import React from 'react';
import { NotFound } from '../../pages/not-found';
import { Jumbotron } from 'react-bootstrap';

export const MemberDetail = ({ member }) => {
	let memberAccts = member.accts().fetch();
	console.log('memberAccts', memberAccts);
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

MemberDetail.propTypes = {
  member: React.PropTypes.object
};
