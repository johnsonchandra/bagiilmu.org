import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';

import { Member } from '../../api/member/member_collection.js';
import { Blog } from '../../api/blog/blog_collection.js';

const users = [{
  email: 'johnson.chandra@gmail.com',
  password: 'password',
  profile: {
    fullname: 'Johnson Chandra',
  },
  roles: ['akar'],
}];

users.forEach(({ email, password, profile, roles }) => {
  const userExists = Meteor.users.findOne({ 'emails.address': email });

  if (!userExists) {
    const userId = Accounts.createUser({ email, password, profile });
    Roles.addUsersToRoles(userId, roles, Roles.GLOBAL_GROUP);

    Member.insert({
      _id: userId,
      fullname: profile.fullname,
      bio: 'Catalyst'
    });

  }
});

const blogs = [{
  title: 'Bagaimana kamu bisa membantu',
  article: 'ini isinya'
},{
  title: 'Bagaimana cara kami bekerja',
  article: 'ini deskripsi cara kami bekerja'
}];

blogs.forEach(({ title, article }) => {
  const blogExists = Blog.findOne({ 'title': title });

  if (!blogExists) {
    Blog.insert({
      title: title,
      article: article
    });
  }
});