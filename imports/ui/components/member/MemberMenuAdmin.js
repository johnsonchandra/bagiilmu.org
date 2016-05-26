import React from 'react';
import { Button } from 'react-bootstrap';

import { goLink } from '../../../modules/utils.js';

export const MemberMenuAdmin = () => (
	<div>
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/adm/members') }>Member</Button>
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/adm/crowdfundings') }>Crowdfunding</Button>
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/adm/accts') }>Account</Button>
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/adm/acctTrxs') }>AccountTrx</Button>
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/adm/blogs') }>Blog</Button>
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/adm/invitations') }>Invitation</Button>
	</div>
);
