import React from 'react';
import { Button } from 'react-bootstrap';

import { goLink, handleLogout } from '../../../modules/utils.js';

export const MemberMenuCommon = () => (
	<div>
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/member/changePassword') }>Change Password</Button>
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/member/settings') }>Settings</Button>
		<Button bsStyle="danger" onClick={ handleLogout } >Logout</Button>
	</div>
);
