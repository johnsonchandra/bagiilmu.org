import { composeWithTracker } from 'react-komposer';
import { Member } from '../../../api/member/member_collection.js';
import { CandidateDetail } from '../../components/candidate/candidate_detail.js';
import { Loading } from '../../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
	const subscription = Meteor.subscribe('candidate', params.candidateId);
	if (subscription.ready()) {
		const candidate = Member.findOne();
		onData(null, { candidate });
	}
};

export default composeWithTracker(composer, Loading)(CandidateDetail);
