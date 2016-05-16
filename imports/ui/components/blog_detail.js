import React from 'react';
// import { MemberMenu } from './member_menu.js';
import { NotFound } from '../pages/not-found';
import { Row, Col, Image, Jumbotron } from 'react-bootstrap';

export const BlogDetail = ({ blog }) => {
	if(blog)
		return(
			<div>
				<Row>
					<Col xs={ 12 }>
						<h2>{ blog.title }</h2>
						<hr/>
						<p>Posted on August 24, 2013 at 9:00 PM</p>
						<hr/>
						<Image alt="article" src="/images/900x300.png" responsive />
						<hr/>
						<div dangerouslySetInnerHTML={{__html: blog.article}}/>
					</Col>
				</Row>
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

				// <Jumbotron className="text-center">
				// 	<h2>{ blog.title }</h2>
				// 	<p>{ blog.article }</p>
				// </Jumbotron>

				// result.join(" ")