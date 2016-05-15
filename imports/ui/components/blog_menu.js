import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import { BlogMenuPublic } from './blog_menu_public';
import { BlogMenuAdmin } from './blog_menu_admin';

export class BlogMenu extends React.Component {
  renderBlogMenu(hasUser) {
    if(hasUser){
      return Roles.userIsInRole(Meteor.userId(),'akar','bagiilmu.org') ? <BlogMenuAdmin /> : <BlogMenuPublic />;
    }else
      return '';
  }

  render() {
    return <div>
      { this.renderBlogMenu(this.props.hasUser) }
    </div>
  }
}

BlogMenu.propTypes = {
  hasUser: React.PropTypes.object,
};
