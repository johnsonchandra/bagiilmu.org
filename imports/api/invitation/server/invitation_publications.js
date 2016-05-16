import { Meteor } from 'meteor/meteor';
import { Invitation } from '../invitation_collection.js';

Meteor.publish('invitation', (invitationId) => {
	console.log('invitationId yang server dapet', invitatationId);
	check(invitationId, String);
	
	return Invitation.find({_id:invitationId});
});
