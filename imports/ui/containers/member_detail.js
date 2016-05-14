import { composeWithTracker } from 'react-komposer';
import { Member } from '../../api/member/member_collection.js';
import { MemberDetail } from '../components/member_detail.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
	const subscription = Meteor.subscribe('member', params.memberId);
	if (subscription.ready()) {
		const member = Member.findOne();
		onData(null, { member });
	}
};

export default composeWithTracker(composer, Loading)(MemberDetail);
