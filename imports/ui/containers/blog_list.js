import { composeWithTracker } from 'react-komposer';
import { Blog } from '../../api/blog/blog_collection.js';
import { BlogList } from '../components/blog_list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('blogs.active');

  console.log('client habis subscribe');

  if (subscription.ready()) {
    const blogs = Blog.find().fetch();
    
    console.log('blogs sampe di client', blogs);

    onData(null, { blogs });
  }
};

export default composeWithTracker(composer, Loading)(BlogList);
