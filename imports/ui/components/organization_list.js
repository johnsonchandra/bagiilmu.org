import React from 'react';
import { Table, Alert } from 'react-bootstrap';
import { OrganizationItem } from './organization_item.js';

export const OrganizationList = ({ organizations }) => (
	organizations.length > 0 ? <div> 
		{organizations.map((organization) => (
			<OrganizationItem key={ organization._id } organization={ organization } />
		))} 
	</div> :
 	<Alert bsStyle="warning">No Organization yet.</Alert>
);

OrganizationList.propTypes = {
  organizations: React.PropTypes.array,
};
