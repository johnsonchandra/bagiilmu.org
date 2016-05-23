import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { App } from '../../ui/layouts/app';
import { Documents } from '../../ui/pages/documents';
import { Index } from '../../ui/pages/index';
import { Login } from '../../ui/pages/login';
import { NotFound } from '../../ui/pages/not-found';
import { RecoverPassword } from '../../ui/pages/recover-password';
import { ResetPassword } from '../../ui/pages/reset-password';
import { Signup } from '../../ui/pages/signup';

import { Faqs } from '../../ui/pages/faq/faqs';
import { FaqWork } from '../../ui/pages/faq/faq_work';
import { FaqHelp } from '../../ui/pages/faq/faq_help';
import { FaqAbout } from '../../ui/pages/faq/faq_about';

import { Organizations } from '../../ui/pages/organization/organizations';
import { Organization } from '../../ui/pages/organization/organization';

import { Members } from '../../ui/pages/member/members';
import { Member } from '../../ui/pages/member/member';

import { Blogs } from '../../ui/pages/blog/blogs';
import { Blog } from '../../ui/pages/blog/blog';
import { BlogForm } from '../../ui/pages/blog/blog_form';


const requireAuth = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};
// <Route name="blog.form" path="/blog/form" component={ BlogForm } onEnter={ requireAuth }/>
        
        // <Route name="candidate" path="/candidates" component={ Candidates } />
        // <Route name="candidate.detail" path="/candidate/detail/:candidateId" component={ Candidate } />

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index }  />
        <Route name="documents" path="/documents" component={ Documents } onEnter={ requireAuth } />
        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />
                
        <Route name="members" path="/members" component={ Members } onEnter={ requireAuth }/>
        <Route name="member.detail" path="/member/detail/:memberId" component={ Member } onEnter={ requireAuth }/>
        
        <Route name="blogs" path="/blogs" component={ Blogs } />
        <Route name="blog.detail" path="/blog/detail/:blogId" component={ Blog } />
        <Route name="blog.form" path="/blog/form(/:blogId)" component={ BlogForm } onEnter={ requireAuth }/>
        
        <Route name="faqs" path="/faqs" component={ Faqs } />
        <Route name="faq.work" path="/faq/work" component={ FaqWork } />
        <Route name="faq.help" path="/faq/help" component={ FaqHelp } />
        <Route name="faq.about" path="/faq/about" component={ FaqAbout } />
        
        <Route name="organizations" path="/organizations" component={ Organizations } />
        <Route name="organization.detail" path="/organization/detail/:organizationId" component={ Organization } />

        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
