import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

import { Member } from '../member/member_collection.js';

export const Blog = new Mongo.Collection('blog');

const _BlogLogSchema = new SimpleSchema({
	userId: {
		type: SimpleSchema.RegEx.Id,
	},
	status: {
		type: String,
		label: 'Blog Status, Active means is on air',
 		allowedValues   : ["Draft", "Active", "Expired"],
	},
	timestamp: {
		type: Date,
		autoValue : function(){
			return new Date();
		}
	}
});

Blog.schema = new SimpleSchema({
	userId: {
		type: SimpleSchema.RegEx.Id,
		label: 'userId of last Editor',
		autoValue: function(){
			return this.userId;
		}
	},
	title: {
		type: String,
		label: 'Blog Title',
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
  _id 		: 1,
  userId 	: 1,
  title 		: 1,
  article 	: 1,
  status 	: 1,
  timestamp : 1,
};

Blog.helpers({
	member() {
		return Member.findOne(this.userId);
	},
	editableBy(userId) {
		if (this.userId) {
		   return this.userId === userId;
		}else{
			return false;
		}
	},
});

