import React from 'react';

import { Member } from '../../../api/member/member_collection.js';

import { MemberMenuAdmin } from './member_menu_admin';
import { MemberMenuPrivate } from './member_menu_private';
import { MemberMenuPublic } from './member_menu_public';
import { MemberMenuCommon } from './member_menu_common';

export class MemberMenu extends React.Component {
	renderMenu(hasUser, memberId) {
		if(!hasUser || !memberId)
			return '';

		if(hasUser._id === memberId){
			return(
				<div>
					{Roles.userIsInRole(Meteor.userId(),'akar','bagiilmu.org') ? <MemberMenuAdmin /> : <MemberMenuPrivate />}
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
