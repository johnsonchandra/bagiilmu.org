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
  _id: 'how_we_work',
  title: 'Bagaimana cara kami bekerja',
  article: '<b>ini deskripsi cara kami bekerja</b>
    <i>coba ah</id>
  '
},{
  _id: 'how_you_can_help',
  title: 'Bagaimana kamu bisa membantu',
  article: 'ini deskripsi bagaimana kamu bisa membantu'
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