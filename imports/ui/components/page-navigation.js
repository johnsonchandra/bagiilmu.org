import React from 'react';
// import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
// import { PagePublicNavigation } from './page-public-navigation';
// import { PageAuthenticatedNavigation } from './page-authenticated-navigation';

import { MemberMenu } from './member/member_menu';

import { BlogMenu } from './blog/blog_menu';
import { BlogsMenu } from './blog/blogs_menu';

export class PageNavigation extends React.Component {
  renderNavigation(hasUser, routeName, params) {
    if(!hasUser)
      return '';

    // const pageName = routes[routes.length-1].name;
    // console.log('routes', routes);
    // console.log('this.props.params', this.props.params);
    // console.log('this.props', this.props);
    
    switch(routeName){

      // case 'member.detail':
      //   return <MemberMenu />;

      case 'index':
        return 'ini index';

      case 'member.detail':
        return <MemberMenu hasUser={ hasUser } params={ params } />;

      case 'blogs':
        return <BlogsMenu />;
      case 'blog.detail':
        return <BlogMenu />;
 
    }

    return '';
  }

  render() {
    return <div>
      { this.renderNavigation(this.props.hasUser, this.props.routeName, this.props.params) }
    </div>;
  }
}

PageNavigation.propTypes = {
  hasUser   : React.PropTypes.object,
  routeName : React.PropTypes.string.isRequired,
  params    : React.PropTypes.object
};
