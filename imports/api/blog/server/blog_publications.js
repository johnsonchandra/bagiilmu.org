import { Meteor } from 'meteor/meteor';
import { Blog } from '../blog_collection.js';

Meteor.publish('blogs', () => {	
	return Blog.find();
});
