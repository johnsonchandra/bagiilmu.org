import { Meteor } from 'meteor/meteor';
import { Member } from '../member_collection.js';
import { Organization } from '../../organization/organization_collection.js';
import { Acct } from '../../acct/acct_collection.js';

// Match.post = {
//   _id: Match.Optional(Match._id),
//   body: String,
//   createdAt: Match.Optional(Date),
//   userId: Match._id
// };

// Match._id = Match.Where(id => {
//   check(id, String);
//   return /^[a-zA-Z0-9]{17,17}/.test(id); 
// });

// Meteor.publish('member', (memberId) => {
// 	check(memberId, Match._id);
	
// 	return Member.find({_id:memberId});
// });

// Meteor.publish('members', () => {	
// 	//FIXME bikin limit buat infinite scrolling
// 	return Member.find();
// });


//all publications for own account
Meteor.publishComposite('my.detail', function myDetail(){
  return {
    find() {
    	
      const query = {
        _id: this.userId,
      };

      const options = {
        fields: Member.publicFields,
      };

      return Member.find(query, options);
    },

    children: [{
      find(member) {
        return Organization.find({ _id: member.organizationId }, { fields: Organization.publicFields });
      },
    },{
    	find(member) {
        return Acct.find({ ownerId: member._id }, { fields: Acct.publicFields });
      },
    }],
  };
});


//all publications for other public
Meteor.publishComposite('member.detail', function memberDetail(memberId) {
  
  check(memberId, Match._id);

  return {
    find() {
      
      const query = {
        _id: memberId,
        status: 'Active',
        // $or: [{ userId: { $exists: false } }, { userId }],
      };

      const options = {
        fields: Member.publicFields,
      };

      return Member.find(query, options);
    },

    children: [{
      find(member) {
        return Organization.find({ _id: member.organizationId }, { fields: Organization.publicFields });
      },
    }],
  };
});


// now all publications for admistrators
Meteor.publishComposite('adm.member.detail', function admMemberDetail(memberId) {
  
  check(memberId, Match._id);

  if( Roles.userIsInRole(this.userId,'Admin','bagiilmu.org') )
    return {
      find() {
        
        const query = {
          _id: memberId,
        };

        return Member.find(query);
      },

      children: [{
        find(member) {
          return Organization.find({ _id: member.organizationId });
        },
      },{
        find(member) {
          return Acct.find({ ownerId: member._id });
        },
      }],
    };
});

Meteor.publishComposite('adm.member.list', function admMemberList() {
  //FIXME buat limit untuk paging/infinitescroll

  if( Roles.userIsInRole(this.userId,'Admin','bagiilmu.org') )
    return {
      find() {
        return Member.find();
      },

      children: [{
        find(member) {
          return Organization.find({ _id: member.organizationId });
        },
      },{
        find(member) {
          return Acct.find({ ownerId: member._id });
        },
      }],
    };
});
