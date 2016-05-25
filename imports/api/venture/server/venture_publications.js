import { Meteor } from 'meteor/meteor';
import { Venture } from '../venture_collection.js';

Match._id = Match.Where(id => {
  check(id, String);
  return /^[a-zA-Z0-9]{17,17}/.test(id); 
});

Meteor.publish('venture', (ventureId) => {
	check(ventureId, Match._id);
	
	return Venture.find({_id:ventureId});
});

Meteor.publish('ventures.active', () => {	
	//FIXME bikin limit buat infinite scrolling
	return Venture.find({status:'Active'});
});
