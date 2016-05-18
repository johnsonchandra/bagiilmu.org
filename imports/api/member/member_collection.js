import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Member = new Mongo.Collection('member');

Member.schema = new SimpleSchema({
	fullname: {
		type: String,
		label: 'Member FullName',
	},
	nickname: {
		type: String,
		label: 'Member NickName',
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

Member.publicFields = {
  _id 		: 1,
  fullname 	: 1,
  nickname 	: 1,
  bio 	 	: 1,
};

// jcha: not yet needed
// Factory.define('member', Member, {
//   fullname: () => faker.hacker.phrase(),
// });
