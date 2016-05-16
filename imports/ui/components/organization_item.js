import React from 'react';
import { browserHistory } from 'react-router';

const goOrganizationDetail = (organizationId, event) => {
  event.preventDefault();
  browserHistory.push('/organization/detail/'+organizationId);
};

export const OrganizationItem = ({ organization }) => (
  <tr onClick={ goOrganizationDetail.bind(this, organization._id) }>
    <td>
      { organization.name }
    </td>
  </tr>
);
