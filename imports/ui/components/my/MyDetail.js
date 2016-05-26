import React from 'react';
import { NotFound } from '../../pages/not-found';
import { Jumbotron } from 'react-bootstrap';

export const MyDetail = ({ member }) => {
	let myAccts = member.accts().fetch();
	console.log('myAccts', myAccts);
	if(member)
		return(
			<div>
				<Jumbotron className="text-center">
					<h2>{ member.fullname }</h2>
					<p>{ member.bio }</p>
				</Jumbotron>
			</div>
		);
	else
		return(
			<NotFound />
		);
}

MyDetail.propTypes = {
  member: React.PropTypes.object
};
