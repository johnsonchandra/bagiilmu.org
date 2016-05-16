import { composeWithTracker } from 'react-komposer';
import { Member } from '../../api/member/member_collection.js';
import { MemberList } from '../components/member_list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('members');
  if (subscription.ready()) {
    const members = Member.find().fetch();
    onData(null, { members });
  }
};

export default composeWithTracker(composer, Loading)(MemberList);
