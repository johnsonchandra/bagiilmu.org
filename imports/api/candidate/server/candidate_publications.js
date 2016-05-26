import { Meteor } from 'meteor/meteor';
import { Candidate } from '../candidate_collection.js';

// Match._id = Match.Where(id => {
//   check(id, String);
//   return /^[a-zA-Z0-9]{17,17}/.test(id); 
// });

Meteor.publish('candidate', (candidateId) => {
	check(candidateId, Match._id);
	
	return Candidate.find({_id:candidateId});
});

Meteor.publish('candidates.active', () => {	
	//FIXME bikin limit buat infinite scrolling
	return Candidate.find({status:'Active'});
});
