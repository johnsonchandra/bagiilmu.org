import React from 'react';

import { Link } from 'react-router';

export const BlogMenu = () => {
	if(Meteor.user() && Roles.userIsInRole(Meteor.userId(),'akar','bagiilmu.org'))
		return(
			<div>
				<p>
					[ <Link to="/blog/create">Create new Blog</Link> ]
				</p>
			</div>
		);
	else
		return(
			<div>
				<p>[ Bookmark ]</p>
			</div>
		);
};
