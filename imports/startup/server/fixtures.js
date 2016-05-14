import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';

import { Member } from '../../api/member/member_collection.js';

const users = [{
  email: 'johnson.chandra@gmail.com',
  password: 'password',
  profile: {
    fullname: 'Johnson Chandra',
  },
  roles: ['akar'],
}];

users.forEach(({ email, password, profile, roles }) => {
  const userExists = Meteor.users.findOne({ 'emails.address': email });

  if (!userExists) {
    const userId = Accounts.createUser({ email, password, profile });
    Roles.addUsersToRoles(userId, roles, Roles.GLOBAL_GROUP);

    // Meteor.call('Member.create', userId);

    Member.insert({
      _id: userId,
      fullname: profile.fullname,
      bio: 'Catalyst'
    });

  }
});
