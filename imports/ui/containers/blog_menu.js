import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { BlogMenu } from '../components/blog_menu';

const composer = (props, onData) => {
  onData(null, { hasUser: Meteor.user() });
};

export default composeWithTracker(composer, {}, {}, { pure: false })(BlogMenu);
