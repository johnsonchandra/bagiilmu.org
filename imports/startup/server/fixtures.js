import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';

import { Member } from '../../api/member/member_collection.js';
import { Blog } from '../../api/blog/blog_collection.js';

const users = [{
  username: 'jcha',
  email: 'johnson.chandra@bagiilmu.org',
  password: 'password',
  profile: {
    fullname: 'Johnson Chandra',
  },
  bio: 'Catalyst',
  roles: ['akar'],
  group: Roles.GLOBAL_GROUP
},{
  username: 'icha',
  email: 'alyssa.prabandari@bagiilmu.org',
  password: 'password',
  profile: {
    fullname: 'Alyssa Prabandari',
  },
  bio: 'Designer',
  roles: ['akar'],
  group: 'bagiilmu.org'
},{
  username: 'cindy',
  email: 'cindy.riswantyo@bagiilmu.org',
  password: 'password',
  profile: {
    fullname: 'Cindy Riswantyo',
  },
  bio: 'Lawyer',
  roles: ['akar'],
  group: 'bagiilmu.org'
},{
  username: 'lidya',
  email: 'lidya.clementina@bagiilmu.org',
  password: 'password',
  profile: {
    fullname: 'Lidya Clementina',
  },
  bio: 'Marketing',
  roles: ['akar'],
  group: 'bagiilmu.org'
}];

users.forEach(({ username, email, password, profile, bio, roles, group }) => {
  const userExists = Meteor.users.findOne({ 'emails.address': email });

  if (!userExists) {
    const userId = Accounts.createUser({ username, email, password, profile });
    Roles.addUsersToRoles(userId, roles, group);

    Member.insert({
      _id: userId,
      nickname: username,
      fullname: profile.fullname,
      bio: bio
    });

  }
});

const blogs = [{
  _id: 'blog1',
  title: 'This is the title of first article',
  article: '<b>ini artikel pertama lohhhhhh</b><i>coba ah</id>'
},{
  _id: 'blog2',
  title: 'Artikel Kedua',
  article: 'ini deskripsi lorem ipsum artikel kedua'
}];

blogs.forEach(({ _id, title, article }) => {
  const blogExists = Blog.findOne(_id);

  if (!blogExists) {
    Blog.insert({
      _id: _id,
      title: title,
      article: article
    });
  }
});