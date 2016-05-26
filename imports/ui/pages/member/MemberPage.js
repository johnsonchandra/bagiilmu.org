import React from 'react';
import MemberDetail from '../../containers/member/MemberDetail.js';
// import MemberMenu from '../../containers/member/member_menu.js';
// import { MemberMenu } from '../../components/member/member_menu.js';

// <MemberMenu memberId={ params.memberId } />

export const MemberPage = ({ params, location }) => (
	<div>
		<MemberDetail memberId={ params.memberId } />
	</div>
);
