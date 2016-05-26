import { composeWithTracker } from 'react-komposer';
import { Organization } from '../../../api/organization/organization_collection.js';
import { OrganizationDetail } from '../../components/organization/OrganizationDetail.js';
import { Loading } from '../../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
	const subscription = Meteor.subscribe('organization', params.organizationId);
	if (subscription.ready()) {
		const organization = Organization.findOne();
		onData(null, { organization });
	}
};

export default composeWithTracker(composer, Loading)(OrganizationDetail);
