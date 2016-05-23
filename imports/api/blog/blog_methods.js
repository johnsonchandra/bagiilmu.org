import { Blog } from './blog_collection';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const insertBlog = new ValidatedMethod({
  name: 'blog.insert',
  validate: new SimpleSchema({
    title: { type: String },
    article: { type: String },
    status: { type: String },
  }).validator(),
  run(blog) {
    return Blog.insert(blog);
  },
});

export const updateBlog = new ValidatedMethod({
  name: 'blog.update',
  validate: new SimpleSchema({
    _id: { 
      type: String,
      regEx: SimpleSchema.RegEx.Id },
    'blog.title': { type: String },
    'blog.article': { type: String },
    'blog.status': { type: String },
  }).validator(),
  run({ _id, blog }) {
    const blogToBeUpdated = Blog.findOne(_id);

    if(blogToBeUpdated.userId !== this.userId)
      throw new Meteor.Error(944, 'User is not the Owner');
    Blog.update(_id, { $set: blog });
  },
});

export const removeBlog = new ValidatedMethod({
  name: 'blog.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    const blogToBeUpdated = Blog.findOne(_id);

    if(blogToBeUpdated.userId !== this.userId)
      throw new Meteor.Error(944, 'User is not the Owner');
    
    Blog.remove(_id);
  },
});
