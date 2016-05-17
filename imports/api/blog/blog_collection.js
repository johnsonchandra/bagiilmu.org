import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Blog = new Mongo.Collection('blog');

Blog.schema = new SimpleSchema({
	title: {
		type: String,
		label: 'Blog Title',
	},
	article: {
		type: String,
		label: 'Blog Article in JSON.stringify(draft.js)'
	}
});

Blog.attachSchema(Blog.schema);
