import React from 'react';
import { NotFound } from '../../pages/not-found';
import { Jumbotron } from 'react-bootstrap';

export const CandidateDetail = ({ candidate }) => {
	if(candidate)
		return(
			<div>
				<Jumbotron className="text-center">
					<h2>{ candidate.fullname }</h2>
					<p>{ candidate.story }</p>
				</Jumbotron>
			</div>
		);
	else
		return(
			<NotFound />
		);

}

CandidateDetail.propTypes = {
  candidate: React.PropTypes.object.isRequired,
};
