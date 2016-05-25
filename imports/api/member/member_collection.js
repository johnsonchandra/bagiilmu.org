import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

import { Acct } from '../acct/acct_collection'

class MemberCollection extends Mongo.Collection {
  insert(doc, callback) {
    const result = super.insert(doc, callback);
    Acct.insert({
      name: doc.fullname,
      ownerId: result,
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

export const Member = new MemberCollection('member');

// Deny all client-side updates since we will be using methods to manage this collection
Member.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});


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
	},
	role: {
		type: String,
		allowedValues   : ["Member", "Candidate", "Scholar", "Partner", "Admin"],
		defaultValue    : "Member"
	},
	orgId: {
		type: SimpleSchema.RegEx.Id,
		optional: true
	}
});

Member.attachSchema(Member.schema);

Member.publicFields = {
  _id 			: 1,
  fullname 	: 1,
  nickname 	: 1,
  bio 			: 1,
  role 			: 1,
};


// Member.helpers({
// 	org() {
// 		return Organization.findOne(this.orgId);
// 	},
// });
