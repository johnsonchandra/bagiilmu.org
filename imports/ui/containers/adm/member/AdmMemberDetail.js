import { Meteor } from 'meteor/meteor';

import { composeWithTracker } from 'react-komposer';
import { Member } from '../../../../api/member/member_collection.js';
import { AdmMemberDetail } from '../../../components/adm/member/AdmMemberDetail.js';
import { Loading } from '../../../components/loading.js';

const composer = (params, onData) => {
	if( Roles.userIsInRole(Meteor.userId(),'Admin','bagiilmu.org')){
		const subscription = Meteor.subscribe('adm.member.detail', params.memberId);
		if (subscription.ready()) {
			const member = Member.findOne();
			onData(null, { member });
		};
	};
};

export default composeWithTracker(composer, Loading)(AdmMemberDetail);
