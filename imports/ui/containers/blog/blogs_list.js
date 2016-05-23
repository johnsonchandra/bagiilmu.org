import { composeWithTracker } from 'react-komposer';
import { Blog } from '../../../api/blog/blog_collection.js';
import { BlogsList } from '../../components/blog/blogs_list.js';
import { Loading } from '../../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('blogs.active');

  if (subscription.ready()) {
    const blogs = Blog.find().fetch();    
    onData(null, { blogs });
  }
};

export default composeWithTracker(composer, Loading)(BlogsList);
