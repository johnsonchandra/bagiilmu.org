import React from 'react';
import { NotFound } from '../../pages/not-found';
import { Jumbotron } from 'react-bootstrap';

export const OrganizationDetail = ({ organization }) => {
	if(organization)
		return(
			<div>
				<Jumbotron className="text-center">
					<h2>{ organization.name }</h2>
					<p>{ organization.bio }</p>
				</Jumbotron>
			</div>
		);
	else
		return(
			<NotFound />
		);

}

OrganizationDetail.propTypes = {
  organization: React.PropTypes.object,
};
