import { Member } from '../member_collection.js';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const createMember = new ValidatedMethod({
  name: 'Member.create',

  validate: new SimpleSchema({
    userId: { type: SimpleSchema.RegEx.Id }
  }).validator(),

  run({userId}) {
    // now sanity check
    if(!this.userId)
      throw new Meteor.Error(401, 'You must be logged in.');

    let newUser = Meteor.users.findOne(userId);

    if(!newUser)
      throw new Meteor.Error(404,'User not found');

    Member.insert({
      _id: userId,
      fullname: newUser.profile.fullname
    });
    
    Roles.addUsersToRoles(userId, ['member'], 'bagiilmu.org');

    return true;
  }

});
