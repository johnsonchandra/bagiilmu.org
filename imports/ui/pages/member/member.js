import React from 'react';
import MemberDetail from '../../containers/member/member_detail.js';
// import MemberMenu from '../../containers/member/member_menu.js';
// import { MemberMenu } from '../../components/member/member_menu.js';

// <MemberMenu memberId={ params.memberId } />

export const Member = ({ params, location }) => (
	<div>
		<MemberDetail memberId={ params.memberId } />
	</div>
);
