import { Invitation } from './invitation_collection.js';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const invitation = new ValidatedMethod({
  name: 'invitation',

  validate: new SimpleSchema({
    email: { type: SimpleSchema.RegEx.Email },
    fullname: { type: String }
  }).validator(),

  run({email, fullname}) {
    // now sanity check
    if(!this.userId)
      throw new Meteor.Error(401, 'You must be logged in.');

    return Invitation.insert({
      email: email,
      fullname: fullname
    });
  }

});
