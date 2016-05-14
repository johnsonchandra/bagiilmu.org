import React from 'react';

import { MemberMenuAdmin } from './member_menu_admin';
import { MemberMenuNormal } from './member_menu_normal';
import { MemberMenuOther } from './member_menu_other';


// export const MemberMenu = ({ memberId }) => {
// 	if(Meteor.userId() === memberId)
// 		return(
// 			<Button bsStyle="danger" onClick={ handleLogout } >Logout</Button>
// 		);
// 	else
// 		return(
// 			<p>BEDAAAA</p>
// 		);
// };




export class MemberMenu extends React.Component {
	
	renderMenu(memberId) {
		if(Meteor.userId() === memberId){
			return Roles.userIsInRole(memberId,'akar','bagiilmu.org') ? <MemberMenuAdmin /> : <MemberMenuNormal />;
		}else{
			return <MemberMenuOther />;
		}
	}

	render() {
		return <div>
    		{ this.renderMenu(this.props.memberId) }
    	</div>
  }
}

MemberMenu.propTypes = {
  memberId: React.PropTypes.string.isRequired,
};
