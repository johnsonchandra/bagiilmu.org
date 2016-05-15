import React from 'react';
// import { MemberMenu } from './member_menu.js';
import { NotFound } from '../pages/not-found';
import { Jumbotron } from 'react-bootstrap';

export const BlogDetail = ({ blog }) => {
	if(blog)
		return(
			<div>
				<Jumbotron className="text-center">
					<h2>{ blog.title }</h2>
					<p>{ blog.article }</p>
				</Jumbotron>
			</div>
		);
	else
		return(
			<NotFound />
		);

}

BlogDetail.propTypes = {
  blog: React.PropTypes.object.isRequired,
};
