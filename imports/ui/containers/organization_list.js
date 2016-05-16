import { composeWithTracker } from 'react-komposer';
import { Organization } from '../../api/organization/organization_collection.js';
import { OrganizationList } from '../components/organization_list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('organizations');
  if (subscription.ready()) {
    const organizations = Organization.find().fetch();
    onData(null, { organizations });
  }
};

export default composeWithTracker(composer, Loading)(OrganizationList);
