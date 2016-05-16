import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MemberList from '../containers/member_list.js';
import { Invitation } from '../components/invitation.js';

export const Members = ({ params, location }) => (
	<div>
		<Row>
			<Col xs={ 12 }>
				<Invitation />
			</Col>
		</Row>
		<Row>
			<Col xs={ 12 }>
				<h4 className="page-header">Member List</h4>
				<MemberList />
			</Col>
		</Row>
	</div>
);
