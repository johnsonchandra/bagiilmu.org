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

import { FaqPage } from '../../ui/pages/faq/FaqPage';
import { FaqWorkPage } from '../../ui/pages/faq/FaqWorkPage';
import { FaqHelpPage } from '../../ui/pages/faq/FaqHelpPage';
import { FaqAboutPage } from '../../ui/pages/faq/FaqAboutPage';

import { MyPage } from '../../ui/pages/my/MyPage';

import { CandidateListPage } from '../../ui/pages/candidate/CandidateListPage';
import { CandidatePage } from '../../ui/pages/candidate/CandidatePage';

import { OrganizationListPage } from '../../ui/pages/organization/OrganizationListPage';
import { OrganizationPage } from '../../ui/pages/organization/OrganizationPage';

import { MemberPage } from '../../ui/pages/member/MemberPage';

import { BlogListPage } from '../../ui/pages/blog/BlogListPage';
import { BlogPage } from '../../ui/pages/blog/BlogPage';
import { BlogFormPage } from '../../ui/pages/blog/BlogFormPage';


import { AdmMemberListPage } from '../../ui/pages/adm/member/AdmMemberListPage';
import { AdmMemberPage } from '../../ui/pages/adm/member/AdmMemberPage';

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
                
        <Route name="my.page" path="/my/page" component={ MyPage } onEnter={ requireAuth }/>
        
        <Route name="member.page" path="/member/:memberId" component={ MemberPage } onEnter={ requireAuth }/>
        
        <Route name="blog.list" path="/blog/list" component={ BlogListPage } />
        <Route name="blog.page" path="/blog/:blogId" component={ BlogPage } />
        <Route name="blog.form" path="/blog/form(/:blogId)" component={ BlogFormPage } onEnter={ requireAuth }/>
        
        <Route name="faq" path="/faq" component={ FaqPage } />
        <Route name="faq.work" path="/faq/work" component={ FaqWorkPage } />
        <Route name="faq.help" path="/faq/help" component={ FaqHelpPage } />
        <Route name="faq.about" path="/faq/about" component={ FaqAboutPage } />
        
        <Route name="candidate.list" path="/candidate/list" component={ CandidateListPage } />
        <Route name="candidate.page" path="/candidate/:candidateId" component={ CandidatePage } />

        <Route name="organization.list" path="/organization/list" component={ OrganizationListPage } />
        <Route name="organization.page" path="/organization/:organizationId" component={ OrganizationPage } />


        <Route name="adm.member.list" path="/adm/member/list" component={ AdmMemberListPage } onEnter={ requireAuth }/>
        <Route name="adm.member.page" path="/adm/member/:memberId" component={ AdmMemberPage } onEnter={ requireAuth }/>

        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
