import { composeWithTracker } from 'react-komposer';
import { Member } from '../../../api/member/member_collection.js';
import { CandidatesList } from '../../components/candidate/candidates_list.js';
import { Loading } from '../../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('candidates');

  if (subscription.ready()) {
    const candidates = Member.find().fetch();
    onData(null, { candidates });
  }
};

export default composeWithTracker(composer, Loading)(CandidatesList);
