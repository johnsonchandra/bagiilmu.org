import { Meteor } from 'meteor/meteor';

import { composeWithTracker } from 'react-komposer';
import { Member } from '../../../api/member/member_collection.js';
import { MyDetail } from '../../components/my/MyDetail.js';
import { Loading } from '../../components/loading.js';

const composer = (params, onData) => {
	const subscription = Meteor.subscribe('my.detail', params.memberId);
	if (subscription.ready()) {
		const member = Member.findOne();
		onData(null, { member });
	}
};

export default composeWithTracker(composer, Loading)(MyDetail);
