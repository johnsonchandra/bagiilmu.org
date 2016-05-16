import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Invitation = new Mongo.Collection('invitation');

Invitation.schema = new SimpleSchema({
	fullname: {
		type: String,
		label: 'Full Name of the Invitee',
	},
	email: {
		type: SimpleSchema.RegEx.Email,
		label: 'email of the Invitee'
	},
	"createdBy": {
		type      : SimpleSchema.RegEx.Id,
		label     : "Created By",
		autoValue : function(){
			if (this.isInsert) {
				return this.userId;
			} else if (this.isUpsert) {
				return {$setOnInsert: this.userId};
			} else {
				this.unset();
			}
		}
	},
	"createdDate": {
		type      : Date,
      label     : "Created timestamp",
      autoValue : function(){
			if (this.isInsert) {
				return new Date();
			} else if (this.isUpsert) {
				return {$setOnInsert: new Date()};
			} else {
				this.unset();
			}
		}
  },
	"modifiedBy": {
		type      : SimpleSchema.RegEx.Id,
		label     : "Modified By",
		autoValue : function(){
			if (this.isUpdate)
				return  this.userId;
		},
		denyInsert: true,
		optional: true
	},
	"modifiedDate": {
		type      : Date,
		label     : "Last modified timestamp",
		autoValue   : function() {
			if (this.isUpdate)
				return new Date();
		},
		denyInsert: true,
		optional: true
	}
});

Invitation.attachSchema(Invitation.schema);

