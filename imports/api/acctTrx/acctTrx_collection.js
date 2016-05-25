import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

import { Member } from '../member/member_collection.js';
import { Acct } from '../acct/acct_collection.js';

export const AcctTrx = new Mongo.Collection('acctTrx');

const _PartySchema = new SimpleSchema({
	userId: {
		type: SimpleSchema.RegEx.Id,
	},
	acctId: {
		type: SimpleSchema.RegEx.Id,
	},
	saldoBefore: {
		type: Number,
	},
	saldoAfter: {
		type: Number,
	},
});

const _RefSchema = new SimpleSchema({
	refId: {
		type: SimpleSchema.RegEx.Id,
	},
	refType: {
		type: String,
	},
});

AcctTrx.schema = new SimpleSchema({
	sender: {
		type: _PartySchema,
	},
	receiver: {
		type: _PartySchema,
	},
	amount: {
		type: Number,
	},
	refs: {
		type: [ _RefSchema ],
		optional: true
	},
	type: {
		type: String,
		allowedValues   : ["Remittance In", "Donation", "Donation Refund", "Remittance Out"]
	},
	status: {
		type: String,
		allowedValues   : ["Normal", "Adjustment"],
		defaultValue    : "Normal"
	},
	description: {
		type: String,
		optional: true,
	},
	creatorId: {
		type: SimpleSchema.RegEx.Id,
		autoValue : function(){
			if (this.isInsert) {
				return this.userId;
			} else if (this.isUpsert) {
				return {$setOnInsert: new this.userId};
			} else {
				this.unset();
			}
		}
	},
	timestamp: {
		type: Date,
		autoValue : function(){
			return new Date();
		},
	},
});

AcctTrx.attachSchema(AcctTrx.schema);

AcctTrx.publicFields = {
  _id 						: 1,
  acctIdSender 		: 1,
  acctIdReceiver 	: 1,
  amount 					: 1,
  status 					: 1,
  creatorId				: 1,
  timestamp 			: 1,
};

AcctTrx.helpers({
	sender() {
		return Member.findOne(this.sender.userId);
	},
	senderAcct() {
		return Acct.findOne(this.sender.acctId);
	},
	receiver() {
		return Member.findOne(this.receiver.userId);
	},
	receiverAcct() {
		return Acct.findOne(this.receiver.acctId);
	},
	creator() {
		return Member.findOne(this.creatorId);
	},
});

