import { composeWithTracker } from 'react-komposer';
import { Candidate } from '../../../api/candidate/candidate_collection.js';
import { CandidateList } from '../../components/candidate/CandidateList.js';
import { Loading } from '../../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('candidates.active');

  if (subscription.ready()) {
    const candidates = Candidate.find().fetch();
    onData(null, { candidates });
  }
};

export default composeWithTracker(composer, Loading)(CandidateList);
