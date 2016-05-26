import React from 'react';
import AdmMemberDetail from '../../../containers/adm/member/AdmMemberDetail.js';

export const AdmMemberPage = ({ params, location }) => (
	<div>
		<AdmMemberDetail memberId={ params.memberId } />
	</div>
);
