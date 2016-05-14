import React from 'react';
import { Button } from 'react-bootstrap';

import { handleLogout } from '../../modules/utils.js';

export const MemberMenuNormal = () => (
	<div>
		<p> ini menu non admin</p>
		<Button bsStyle="danger" onClick={ handleLogout } >Logout</Button>
	</div>
);
