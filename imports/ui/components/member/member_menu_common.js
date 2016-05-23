import React from 'react';
import { Button } from 'react-bootstrap';

import { handleLogout } from '../../../modules/utils.js';

export const MemberMenuCommon = () => (
	<div>
		<p> ini menu common</p>
		<Button bsStyle="danger" onClick={ handleLogout } >Logout</Button>
	</div>
);
