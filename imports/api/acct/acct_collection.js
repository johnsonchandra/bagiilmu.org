import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

import { Member } from '../member/member_collection.js';

export const Acct = new Mongo.Collection('acct');

// Deny all client-side updates since we will be using methods to manage this collection
Acct.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

// const _LastLogSchema = new SimpleSchema({
// 	userId: {
// 		type: SimpleSchema.RegEx.Id,
// 	},
// 	status: {
// 		type: String,
// 		label: 'Blog Status, Active means is on air',
//  		allowedValues   : ["Draft", "Active", "Expired"],
// 	},
// 	timestamp: {
// 		type: Date,
// 		autoValue : function(){
// 			return new Date();
// 		}
// 	}
// });

// updatedAt: {
//     type: Date,
//     autoValue: function() {
//       if (this.isUpdate) {
//         return new Date();
//       }
//     },
//     denyInsert: true,
//     optional: true
//   },


  // Whenever the "content" field is updated, automatically
  // update a history array.
  // updatesHistory: {
  //   type: [Object],
  //   optional: true,
  //   autoValue: function() {
  //     var content = this.field("content");
  //     if (content.isSet) {
  //       if (this.isInsert) {
  //         return [{
  //             date: new Date(),
  //             content: content.value
  //           }];
  //       } else {
  //         return {
  //           $push: {
  //             date: new Date,
  //             content: content.value
  //           }
  //         };
  //       }
  //     } else {
  //       this.unset();
  //     }
  //   }
  // },
  // 'updatesHistory.$.date': {
  //   type: Date,
  //   optional: true
  // },
  // 'updatesHistory.$.content': {
  //   type: String,
  //   optional: true
  // },


Acct.schema = new SimpleSchema({
	name: {
		type: String,
		label: 'Name of this Acct',
	},
	cocNr: {
		type: String,
		label: 'Number of Chart of Account',
		optional: true
	},
	ownerId: {
		type: SimpleSchema.RegEx.Id,
		label: 'ownerId of this Acct',
		// autoValue : function(){
		// 	if (this.isInsert) {
		// 		return this.userId;
		// 	} else if (this.isUpsert) {
		// 		return {$setOnInsert: new this.userId};
		// 	} else {
		// 		this.unset();
		// 	}
		// }
	},
	saldo: {
		type: Number,
		label: 'Last Saldo of this Acct',
	},
	currency: {
		type: String,
		defaultValue: 'IDR'
	},
	status: {
		type: String,
		label: 'Acct Status, Active means is on air',
 		allowedValues   : ["Active", "Suspended"],
		defaultValue    : "Active"
	},
	timestamp: {
		type: Date,
		label: 'Latest Timestamp',
		autoValue : function(){
			return new Date();
		},
	},

});

Acct.attachSchema(Acct.schema);

Acct.publicFields = {
  _id 			: 1,
  name 			: 1,
  saldo 		: 1,
  currency 	: 1,
  timestamp : 1,
};

Acct.helpers({
	owner() {
		return Member.findOne(this.ownerId);
	},
});

