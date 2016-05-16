import { Meteor } from 'meteor/meteor';
import { Organization } from '../organization_collection.js';

Meteor.publish('organization', (organizationId) => {
	console.log('organizationId yang server dapet', organizationId);
	check(organizationId, String);
	
	return Organization.find({_id:organizationId});
});

Meteor.publish('organizations', () => {	
	//FIXME bikin limit buat infinite scrolling
	return Organization.find();
});
