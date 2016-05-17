import { Blog } from './blog_collection.js';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const blogInsert = new ValidatedMethod({
  name: 'blog.insert',
  validate: new SimpleSchema({
    'title': { type: String },
    'article': { type: String }
  }).validator(),
  run(blog) {
    console.log(blog);
    return Blog.insert(blog);
  },
});

export const blogUpdate = new ValidatedMethod({
  name: 'blog.update',
  validate: new SimpleSchema({
    '_id': { type: String },
    'blog.title': { type: String, optional: true },
    'blog.article': { type: Object, optional: true }
  }).validator(),
  run({ blog }) {
    Blog.update(_id, { $set: blog });
  },
});

export const blogDelete = new ValidatedMethod({
  name: 'blog.delete',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Blog.remove(_id);
  },
});
