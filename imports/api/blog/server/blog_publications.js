import { Meteor } from 'meteor/meteor';

import { Blog } from '../blog_collection.js';
import { Member } from '../../member/member_collection.js';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

// Meteor.publish('blogs', () => {	
// 	return Blog.find();
// });

Meteor.publish('blog.edit', function blogEdit(blogId) {
  check(blogId, String);

  const blog = Blog.findOne(blogId);

  if(blog && blog.editableBy(this.userId))
    return Blog.find({_id:blogId});
  
  return this.ready();
});

Meteor.publishComposite('blog.active', function blogActive(blogId) {
	
  check(blogId, String);

  return {
    find() {
    	console.log('blogId di server pub', blogId);

      const query = {
        _id: blogId,
        status: 'Active',
        // $or: [{ userId: { $exists: false } }, { userId }],
      };

      // We only need the _id field in this query, since it's only
      // used to drive the child queries to get the todos
      const options = {
        fields: Blog.publicFields,
      };

      return Blog.find(query, options);
    },

    children: [{
      find(blog) {
        return Member.find({ _id: blog.userId }, { fields: Member.publicFields });
      },
    }],
  };
});

Meteor.publishComposite('blogs.active', function blogsActive() {
  // new SimpleSchema({
  //   listId: { type: String },
  // }).validate({ listId });

  // const userId = this.userId;

  return {
    find() {
    	console.log('di dalam pub blogs.active');

      const query = {
        status: 'Active',
        // _id: listId,
        // $or: [{ userId: { $exists: false } }, { userId }],
      };

      // We only need the _id field in this query, since it's only
      // used to drive the child queries to get the todos
      const options = {
        fields: Blog.publicFields,
      };

      return Blog.find(query, options);
    },

    children: [{
      find(blog) {
        return Member.find({ _id: blog.userId }, { fields: Member.publicFields });
      },
    }],
  };
});