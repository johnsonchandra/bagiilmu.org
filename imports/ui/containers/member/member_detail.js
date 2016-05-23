import { Meteor } from 'meteor/meteor';

import { composeWithTracker } from 'react-komposer';
import { Member } from '../../../api/member/member_collection.js';
import { MemberDetail } from '../../components/member/member_detail.js';
import { Loading } from '../../components/loading.js';

import { browserHistory } from 'react-router';

const composer = (params, onData) => {
	const subscription = Meteor.subscribe('member', params.memberId);
	if (subscription.ready()) {
		const member = Member.findOne();
		if(member)
			onData(null, { member });
		else
			browserHistory.push('/error');
	}
};

export default composeWithTracker(composer, Loading)(MemberDetail);
