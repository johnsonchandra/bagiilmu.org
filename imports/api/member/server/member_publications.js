import { Meteor } from 'meteor/meteor';
import { Member } from '../member_collection.js';

Meteor.publish('member', (memberId) => {
	console.log('memberId yang server dapet', memberId);
	check(memberId, String);
	
	return Member.find({_id:memberId});
});