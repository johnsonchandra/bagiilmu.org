import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Member = new Mongo.Collection('Member');

Member.schema = new SimpleSchema({
	fullname: {
		type: String,
		label: 'Member FullName',
	},
	nickname: {
		type: String,
		label: 'Member NickName',
		optional: true
	},
	dob: {
		type: Date,
		label: 'Member Date of Birth',
		optional: true
	},
	bio: {
		type: String,
		label: 'Member Short Biografy',
		optional: true
	}
});

Member.attachSchema(Member.schema);

// jcha: not yet needed
// Factory.define('member', Member, {
//   fullname: () => faker.hacker.phrase(),
// });
