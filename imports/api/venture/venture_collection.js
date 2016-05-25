import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

import { Member } from '../member/member_collection.js';
import { Acct } from '../acct/acct_collection.js';

class VentureCollection extends Mongo.Collection {
  insert(doc, callback) {
    const result = super.insert(doc, callback);
    Acct.insert({
      name: doc.title,
      ownerId: doc.picId,
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

export const Venture = new Mongo.Collection('venture');

Venture.schema = new SimpleSchema({
	title: {
		type: String,
		label: 'Title of this Venture',
	},
	story: {
		type: String,
		label: 'Story of this Venture',
	},
	imgUrl: {
		type: String,
	},
	acctId: {
		type: SimpleSchema.RegEx.Id,
		label: 'acctId of this Venture'
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
	candidateId: {
		type: SimpleSchema.RegEx.Id
	},
	picId: {
		type: SimpleSchema.RegEx.Id,
	},
	organizationId: {
		type: SimpleSchema.RegEx.Id,
	},
	donorIds: {
		type: [ SimpleSchema.RegEx.Id ],
		optional: true
	},
	fromDate: {
		type: Date,
	},
	thruDate: {
		type: Date,
		optional: true
	},
	type: {
		type: String,
		label: 'type of this Venture',
 		allowedValues   : ["Crowdfunding", "Other"],
		defaultValue    : "Crowdfunding"
	},
	status: {
		type: String,
		label: 'Acct Status, Active means is on air',
 		allowedValues   : ["Draft", "Active", "Expired"],
		defaultValue    : "Draft"
	},
	timestamp: {
		type: Date,
		label: 'Latest Timestamp',
		autoValue : function(){
			return new Date();
		},
	},

});

Venture.attachSchema(Venture.schema);

Venture.publicFields = {
  _id 				: 1,
  title 			: 1,
  target 			: 1,
  saldo 			: 1,
  currency 		: 1,
  candidateId	: 1,
  picId				: 1,
  donors 			: 1,
  fromDate 		: 1,
  thruDate 		: 1,
  type 				: 1,
  status 	 		: 1,
  timestamp 	: 1,
};

Venture.helpers({
	pic(){
		return Member.findOne(this.picId);
	},
	candidate(){
		return Member.findOne(this.candidateId);
	},
	donors(){
		return Member.find({ _id: { $in: this.donorIds } } );
	},
	acct(){
		return Acct.findOne(this.acctId);
	},
});

