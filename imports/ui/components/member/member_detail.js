import React from 'react';
import { NotFound } from '../../pages/not-found';
import { Jumbotron } from 'react-bootstrap';

export const MemberDetail = ({ member }) => {
	return(
		<div>
			<Jumbotron className="text-center">
				<h2>{ member.fullname }</h2>
				<p>{ member.bio }</p>
			</Jumbotron>
		</div>
	);
}

MemberDetail.propTypes = {
  member: React.PropTypes.object.isRequired
};
