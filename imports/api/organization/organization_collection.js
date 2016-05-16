import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Organization = new Mongo.Collection('organization');

Organization.schema = new SimpleSchema({
	name: {
		type: String,
		label: 'Organization Name',
	},
	bio: {
		type: String,
		label: 'Organization Short Biografy',
		optional: true
	}
});

Organization.attachSchema(Organization.schema);
