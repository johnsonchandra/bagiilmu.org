import React from 'react';

import { MemberMenu } from './member/MemberMenu';

import { BlogMenu } from './blog/BlogMenu';
import { BlogListMenu } from './blog/BlogListMenu';

export class PageNavigation extends React.Component {
  renderNavigation(hasUser, routeName, params) {
    if(!hasUser)
      return '';
    
    switch(routeName){

      case 'member.detail':
        return <MemberMenu hasUser={ hasUser } params={ params } />;

      case 'blog.list':
        return <BlogListMenu />;
      
      case 'blog':
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
