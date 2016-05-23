import { Meteor } from 'meteor/meteor';
import { Member } from '../member_collection.js';

// Match.post = {
//   _id: Match.Optional(Match._id),
//   body: String,
//   createdAt: Match.Optional(Date),
//   userId: Match._id
// };

Match._id = Match.Where(id => {
  check(id, String);
  return /^[a-zA-Z0-9]{17,17}/.test(id); 
});

Meteor.publish('member', (memberId) => {
	console.log('memberId yang server dapet', memberId);
	check(memberId, Match._id);
	
	return Member.find({_id:memberId});
});

Meteor.publish('members', () => {	
	//FIXME bikin limit buat infinite scrolling
	return Member.find();
});
