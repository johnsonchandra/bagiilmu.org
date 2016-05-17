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

import { Member } from '../../ui/pages/member';

import { Blogs } from '../../ui/pages/blogs';
import { Blog } from '../../ui/pages/blog';
import { BlogCreate } from '../../ui/pages/blog_create';

import { DraftPlainText } from '../../ui/pages/draft_plaintext.js';
import { DraftRich } from '../../ui/pages/draft_rich.js';
import { DraftLink } from '../../ui/pages/draft_link.js';
import { DraftEntity } from '../../ui/pages/draft_entity.js';
import { DraftTweet } from '../../ui/pages/draft_tweet.js';
import { DraftMedia } from '../../ui/pages/draft_media.js';
import { DraftColor } from '../../ui/pages/draft_color.js';

const requireAuth = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

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
        
        <Route name="member" path="/member/:memberId" component={ Member } onEnter={ requireAuth }/>
        
        <Route name="blogs" path="/blogs" component={ Blogs } />
        <Route name="blog.create" path="/blog/create" component={ BlogCreate } />
        
        <Route name="blog" path="/blog/:blogId" component={ Blog } />
        
        <Route name="draft.plaintext" path="/draft/plaintext" component={ DraftPlainText } />
        <Route name="draft.rich" path="/draft/rich" component={ DraftRich } />
        <Route name="draft.link" path="/draft/link" component={ DraftLink } />
        <Route name="draft.entity" path="/draft/entity" component={ DraftEntity } />
        <Route name="draft.tweet" path="/draft/tweet" component={ DraftTweet } />
        <Route name="draft.media" path="/draft/media" component={ DraftMedia } />
        <Route name="draft.color" path="/draft/color" component={ DraftColor } />
                
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
