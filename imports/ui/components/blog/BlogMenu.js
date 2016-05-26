import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import { BlogMenuPublic } from './BlogMenuPublic';
import { BlogMenuAdmin } from './BlogMenuAdmin';

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
