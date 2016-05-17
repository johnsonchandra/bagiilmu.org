import React from 'react';
import { MemberMenu } from './member_menu.js';
import { NotFound } from '../pages/not-found';
import { Jumbotron } from 'react-bootstrap';

export const MemberDetail = ({ member }) => {
	if(member)
		return(
			<div>
				<MemberMenu memberId={ member._id } />
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
