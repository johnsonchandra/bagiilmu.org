import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import { BlogListMenuPublic } from './BlogListMenuPublic';
import { BlogListMenuAdmin } from './BlogListMenuAdmin';

export class BlogListMenu extends React.Component {
  renderBlogMenu(hasUser) {
    if(Meteor.user()){
      return Roles.userIsInRole(Meteor.userId(),'akar','bagiilmu.org') ? <BlogListMenuAdmin /> : <BlogListMenuPublic />;
    }else
      return '';
  }

  render() {
    return <div>
      { this.renderBlogMenu() }
    </div>
  }
}
