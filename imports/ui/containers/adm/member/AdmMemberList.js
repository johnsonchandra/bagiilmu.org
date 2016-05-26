import { composeWithTracker } from 'react-komposer';
import { Member } from '../../../../api/member/member_collection.js';
import { AdmMemberList } from '../../../components/adm/member/AdmMemberList.js';
import { Loading } from '../../../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  if( Roles.userIsInRole(Meteor.userId(),'Admin','bagiilmu.org')){
		const subscription = Meteor.subscribe('adm.member.list');
		if (subscription.ready()) {
			const members = Member.find().fetch();
			onData(null, { members });
		}
	}
};

export default composeWithTracker(composer, Loading)(AdmMemberList);
