import React from 'react';
import { Button } from 'react-bootstrap';

import { goLink } from '../../../modules/utils.js';

export const MemberMenuAdmin = () => (
	<div>
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/admin/members') }>Member</Button>
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/admin/crowdfundings') }>Crowdfunding</Button>
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/admin/accts') }>Account</Button>
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/admin/acctTrxs') }>AccountTrx</Button>
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/admin/blogs') }>Blog</Button>
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/admin/invitations') }>Invitation</Button>
	</div>
);
