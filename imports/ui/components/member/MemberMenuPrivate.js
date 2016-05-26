import React from 'react';
import { Button } from 'react-bootstrap';

import { goLink } from '../../../modules/utils.js';

export const MemberMenuPrivate = () => (
	<div>
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/member/following') }>Following</Button>
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/member/followers') }>Follower</Button>
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/member/accts') }>My Account</Button>
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/member/blogs') }>My Blog</Button>
	</div>
);
