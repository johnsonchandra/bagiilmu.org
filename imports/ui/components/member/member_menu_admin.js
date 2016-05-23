import React from 'react';
import { Button } from 'react-bootstrap';

import { handleLogout } from '../../../modules/utils.js';

export const MemberMenuAdmin = () => (
	<div>
		<p>Menu Admin</p>
		<Button bsStyle="danger" onClick={ handleLogout } >Logout</Button>
	</div>
);
