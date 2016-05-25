import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import { BlogMenuPublic } from './blog_menu_public';
import { BlogMenuAdmin } from './blog_menu_admin';

export class BlogMenu extends React.Component {
  renderBlogMenu() {
    if(Meteor.user()){
      return Roles.userIsInRole(Meteor.userId(),'Admin','bagiilmu.org') ? <BlogMenuAdmin /> : <BlogMenuPublic />;
    }else
      return '';
  }

  render() {
    return <div>
      { this.renderBlogMenu() }
    </div>
  }
}
