import { Meteor } from 'meteor/meteor';
import { Blog } from '../blog_collection.js';

Meteor.publish('blogs', () => {	
	return Blog.find();
});

Meteor.publish('blog', (blogId) => {
	console.log('blogId yang server dapet', blogId);
	check(blogId, String);
	
	return Blog.find({_id:blogId});
});
