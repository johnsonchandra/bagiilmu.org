import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';

import { Member } from '../../api/member/member_collection.js';
import { Acct } from '../../api/acct/acct_collection.js';
// import { Blog } from '../../api/blog/blog_collection.js';

const users = [{
  username: 'jcha',
  email: 'johnson.chandra@bagiilmu.org',
  password: 'password',
  profile: {
    fullname: 'Johnson Chandra',
  },
  bio: 'Catalyst',
  roles: ['Akar', 'Admin'],
  group: Roles.GLOBAL_GROUP
},{
  username: 'icha',
  email: 'alyssa.prabandari@bagiilmu.org',
  password: 'password',
  profile: {
    fullname: 'Alyssa Prabandari',
  },
  bio: 'Designer',
  roles: ['Admin'],
  group: 'bagiilmu.org'
},{
  username: 'cindy',
  email: 'cindy.riswantyo@bagiilmu.org',
  password: 'password',
  profile: {
    fullname: 'Cindy Riswantyo',
  },
  bio: 'Lawyer',
  roles: ['Admin'],
  group: 'bagiilmu.org'
// },{
//   username: 'joko',
//   email: 'dummy.joko@bagiilmu.org',
//   password: 'password',
//   profile: {
//     fullname: 'Joko Kandidat Pertama',
//   },
//   bio: 'Bio Joko Kandidat Pertama',
//   roles: ['Candidate'],
//   group: 'bagiilmu.org'
// },{
//   username: 'bunga',
//   email: 'dummy.bunga@bagiilmu.org',
//   password: 'password',
//   profile: {
//     fullname: 'Bunga Kandidat Kedua',
//   },
//   bio: 'bio Bunga Kandidat Kedua',
//   roles: ['Candidate'],
//   group: 'bagiilmu.org'
},{
  username: 'Mansur',
  email: 'mansur@bagiilmu.org',
  password: 'password',
  profile: {
    fullname: 'Mansur Scholar Pertama',
  },
  bio: 'Bio Mansur Scholar Pertama',
  roles: ['Scholar'],
  group: 'bagiilmu.org'
},{
  username: 'sity',
  email: 'siti@bagiilmu.org',
  password: 'password',
  profile: {
    fullname: 'Siti Scholar Kedua',
  },
  bio: 'Bio Siti Scholar Kedua',
  roles: ['Scholar'],
  group: 'bagiilmu.org'
},{
  username: 'herman',
  email: 'herman@bagiilmu.org',
  password: 'password',
  profile: {
    fullname: 'Herman Partner Pertama',
  },
  bio: 'Bio Herman Partner Pertama',
  roles: ['Partner'],
  group: 'bagiilmu.org'
},{
  username: 'dika',
  email: 'dika@bagiilmu.org',
  password: 'password',
  profile: {
    fullname: 'Dika Partner Kedua',
  },
  bio: 'Bio Dika Partner Kedua',
  roles: ['Partner'],
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
      bio: bio,
      type: roles[roles.length-1],
      status: 'Active'
    });

  }
});


// const blogs = [{
//   _id: 'blog1',
//   title: 'This is the title of first article',
//   article: ''
// },{
//   _id: 'blog2',
//   title: 'Artikel Kedua',
//   article: ''
// }];

// blogs.forEach(({ _id, title, article }) => {
//   const blogExists = Blog.findOne(_id);

//   if (!blogExists) {
//     Blog.insert({
//       _id: _id,
//       title: title,
//       article: article
//     });
//   }
// });
