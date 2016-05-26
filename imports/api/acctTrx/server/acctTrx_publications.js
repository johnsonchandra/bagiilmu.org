import { Meteor } from 'meteor/meteor';

import { Acct } from '../../acct/acct_collection.js';
import { Member } from '../../member/member_collection.js';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

// Match._id = Match.Where(id => {
//   check(id, String);
//   return /^[a-zA-Z0-9]{17,17}/.test(id); 
// });

// Meteor.publish('blog.edit', function blogEdit(blogId) {
//   check(blogId, Match._id);

//   const blog = Blog.findOne(blogId);

//   if(blog && blog.ownerId === this.userId)
//     return Blog.find({_id:blogId});
  
//   return this.ready();
// });

Meteor.publishComposite('acctTrx.detail', function acctTrxs(acctTrxId) {
	
  check(acctTrxId, Match._id);

  return {
    find() {
    	
      const query = {
        _id: acctTrxId,
        $or: [
          { 'creatorId'       : this.userId },
          { 'sender.userId'   : this.userId },
          { 'receiver.userId' : this.userId },
        ],
      };

      const options = {
        fields: AcctTrx.publicFields,
      };

      return AcctTrx.find(query, options);
    },

    children: [{
      find(acctTrx) {
        return Member.find({ 
          $or: [
            { '_id'       : acctTrx.sender.userId },
            { '_id'       : acctTrx.receiver.userId },
            { '_id'       : acctTrx.creatorId },
          ],
        }, { fields: Member.publicFields });
      },
    },{
      find(acctTrx) {
        return Acct.find({ 
          $or: [
            { '_id'       : acctTrx.sender.acctId },
            { '_id'       : acctTrx.receiver.acctId },
          ],
        }, { fields: Acct.publicFields });
      },
    }],
  };
});

// Meteor.publishComposite('blogs.active', function blogsActive() {
//   // new SimpleSchema({
//   //   listId: { type: String },
//   // }).validate({ listId });

//   // const userId = this.userId;

//   return {
//     find() {
//       const query = {
//         status: 'Active',
//         // _id: listId,
//         // $or: [{ userId: { $exists: false } }, { userId }],
//       };

//       // We only need the _id field in this query, since it's only
//       // used to drive the child queries to get the todos
//       const options = {
//         fields: Blog.publicFields,
//       };

//       return Blog.find(query, options);
//     },

//     children: [{
//       find(blog) {
//         return Member.find({ _id: blog.ownerId }, { fields: Member.publicFields });
//       },
//     }],
//   };
// });
