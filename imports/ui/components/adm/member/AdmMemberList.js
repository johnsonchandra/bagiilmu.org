import React from 'react';
import { Table, Alert } from 'react-bootstrap';
import { AdmMemberItem } from './AdmMemberItem.js';

export const AdmMemberList = ({ members }) => (
  members.length > 0 ? <Table striped bordered condensed hover responsive>
	<thead>
		<tr>
			<th>Fullname</th>
			<th>Bio</th>
		</tr>
	</thead>
	<tbody>
		{members.map((member) => (
			<AdmMemberItem key={ member._id } member={ member } />
		))}
    </tbody>
  </Table> :
  <Alert bsStyle="warning">No Member yet.</Alert>
);

AdmMemberList.propTypes = {
  members: React.PropTypes.array,
};
