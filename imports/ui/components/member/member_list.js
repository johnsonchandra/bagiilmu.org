import React from 'react';
import { Table, Alert } from 'react-bootstrap';
import { MemberItem } from './member_item.js';

export const MemberList = ({ members }) => (
  members.length > 0 ? <Table striped bordered condensed hover responsive>
	<thead>
		<tr>
			<th>Fullname</th>
			<th>Bio</th>
		</tr>
	</thead>
	<tbody>
		{members.map((member) => (
			<MemberItem key={ member._id } member={ member } />
		))}
    </tbody>
  </Table> :
  <Alert bsStyle="warning">No Member yet.</Alert>
);

MemberList.propTypes = {
  members: React.PropTypes.array,
};
