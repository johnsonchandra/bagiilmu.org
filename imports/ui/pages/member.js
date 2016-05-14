import React from 'react';
import MemberDetail from '../containers/member_detail.js';

export const Member = ({ params, location }) => (
	<MemberDetail memberId={ params.memberId } />
);
