import { Meteor } from 'meteor/meteor';
import { Invitation } from '../invitation_collection.js';

Meteor.publish('invitation', (invitationId) => {
	check(invitationId, Match._id);
	
	return Invitation.find({_id:invitationId});
});
