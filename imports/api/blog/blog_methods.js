import { Blog } from './blog_collection';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const insertBlog = new ValidatedMethod({
  name: 'blog.insert',
  validate: new SimpleSchema({
    title: { type: String },
    article: { type: String },
  }).validator(),
  run(blog) {
    return Blog.insert(blog);
  },
});

export const updateBlog = new ValidatedMethod({
  name: 'blog.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'blog.title': { type: String },
    'blog.article': { type: String },
  }).validator(),
  run({ _id, blog }) {
    console.log('_id di belakang:', _id);
    console.log('blog di belakang:', blog);

    Blog.update(_id, { $set: blog });
  },
});

export const removeBlog = new ValidatedMethod({
  name: 'blog.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Blog.remove(_id);
  },
});
