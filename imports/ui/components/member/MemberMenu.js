import React from 'react';

import { Member } from '../../../api/member/member_collection.js';

import { MemberMenuAdmin } from './MemberMenuAdmin';
import { MemberMenuPrivate } from './MemberMenuPrivate';
import { MemberMenuPublic } from './MemberMenuPublic';
import { MemberMenuCommon } from './MemberMenuCommon';

export class MemberMenu extends React.Component {
	renderMenu(hasUser, memberId) {
		if(!hasUser || !memberId)
			return '';

		if(hasUser._id === memberId){
			return(
				<div>
					{Roles.userIsInRole(Meteor.userId(),'Admin','bagiilmu.org') ? <MemberMenuAdmin /> : <MemberMenuPrivate />}
					<MemberMenuCommon />
				</div>
			); 
		}else{
			return <MemberMenuPublic />;
		}
	}

	render() {
		return <div>
    		{ this.renderMenu(this.props.hasUser, this.props.params.memberId) }
    	</div>
  }
}

MemberMenu.propTypes = {
	hasUser   : React.PropTypes.object,
	params    : React.PropTypes.object
};
