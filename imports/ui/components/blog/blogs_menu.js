import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import { BlogsMenuPublic } from './blogs_menu_public';
import { BlogsMenuAdmin } from './blogs_menu_admin';

export class BlogsMenu extends React.Component {
  renderBlogsMenu(hasUser) {
    if(Meteor.user()){
      return Roles.userIsInRole(Meteor.userId(),'akar','bagiilmu.org') ? <BlogsMenuAdmin /> : <BlogsMenuPublic />;
    }else
      return '';
  }

  render() {
    return <div>
      { this.renderBlogsMenu() }
    </div>
  }
}
