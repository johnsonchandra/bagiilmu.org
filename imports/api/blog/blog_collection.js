import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

import { Member } from '../member/member_collection.js';

export const Blog = new Mongo.Collection('blog');

// const _BlogLogSchema = new SimpleSchema({
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

Blog.schema = new SimpleSchema({
	title: {
		type: String,
		label: 'Blog Title',
	},
	ownerId: {
		type: SimpleSchema.RegEx.Id,
		label: 'ownerId of this Account',
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
	article: {
		type: String,
		label: 'Blog Article'
	},
	status: {
		type: String,
		label: 'Blog Status, Active means is on air',
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

Blog.attachSchema(Blog.schema);

Blog.publicFields = {
  _id 			: 1,
  ownerId 	: 1,
  title 		: 1,
  article 	: 1,
  status 		: 1,
  timestamp : 1,
};

Blog.helpers({
	owner() {
		return Member.findOne(this.ownerId);
	},
});

