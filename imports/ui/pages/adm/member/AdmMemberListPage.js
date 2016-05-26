import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import AdmMemberList from '../../../containers/adm/member/AdmMemberList.js';

export const AdmMemberListPage = ({ params, location }) => (
	<Row>
		<Col xs={ 12 }>
			<h4 className="page-header">Member List</h4>
			<AdmMemberList />
		</Col>
	</Row>
);