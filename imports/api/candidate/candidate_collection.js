import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

import { Member } from '../member/member_collection.js';
import { Acct } from '../acct/acct_collection.js';
import { Organization } from '../organization/organization_collection.js';

class CandidateCollection extends Mongo.Collection {
  insert(doc, callback) {
    const result = super.insert(doc, callback);
    Acct.insert({
      name: doc.title,
      ownerId: doc.partnerId,
      saldo: 0
    });

    return result;
  }
  update(selector, modifier) {
    const result = super.update(selector, modifier);
    return result;
  }
  remove(selector) {
    const result = super.remove(selector);
    return result;
  }
}

export const Candidate = new Mongo.Collection('candidate');

// Deny all client-side updates since we will be using methods to manage this collection
Candidate.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Candidate.schema = new SimpleSchema({
	fullname: {
		type: String,
		label: 'Fullname of this Candidate',
	},
	story: {
		type: String,
		label: 'Story of this Candidate',
	},
	imgUrl: {
		type: String,
		defaultValue: '/images/64x64.png'
	},
	target: {
		type: Number,
		label: 'Target of this Venture',
	},
	saldo: {
		type: Number,
		label: 'Last Saldo of this Venture',
	},
	currency: {
		type: String,
		defaultValue: 'IDR'
	},
	partnerId: {
		type: SimpleSchema.RegEx.Id,
	},
	organizationId: {
		type: SimpleSchema.RegEx.Id,
	},
	donorIds: {
		type: [ SimpleSchema.RegEx.Id ],
		optional: true
	},
	scholarId: {
		type: SimpleSchema.RegEx.Id,
		optional: true
	},
	fromDate: {
		type: Date,
	},
	thruDate: {
		type: Date,
		optional: true
	},
	status: {
		type: String,
		label: 'Candidate Status, Active means is on air',
 		allowedValues   : ["Proposed", "Rejected", "Active", "Achieved", "Not Achieved"],
		defaultValue    : "Proposed"
	},
	timestamp: {
		type: Date,
		label: 'Latest Timestamp',
		autoValue : function(){
			return new Date();
		},
	},
	memo: {
		type: String,
		optional: true
	}

});

Candidate.attachSchema(Candidate.schema);

Candidate.publicFields = {
  _id 						: 1,
  fullname 				: 1,
  story 	 				: 1,
  imgUrl  				: 1,
  target 					: 1,
  saldo 					: 1,
  currency 				: 1,
  partnerId				: 1,
  organizationId 	: 1,
  donors 					: 1,
  scholarId 			: 1,
  fromDate 				: 1,
  thruDate 				: 1,
  status 	 				: 1,
  timestamp 			: 1,
};

Candidate.helpers({
	partner(){
		return Member.findOne(this.partnerId);
	},
	scholar(){
		return Member.findOne(this.scholarId);
	},
	organization(){
		return Organization.findOne(this.organizationId);
	},
	donors(){
		return Member.find({ _id: { $in: this.donorIds } } );
	},
	acct(){
		return Acct.findOne(this._id);
	},
});

