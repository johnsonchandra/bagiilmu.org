import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';

import { browserHistory } from 'react-router';

const goMemberProfile = (memberId, event) => {
  event.preventDefault();
  browserHistory.push('/member/detail/'+memberId);
};

export const MemberItem = ({ member }) => (
  <tr onClick={ goMemberProfile.bind(this, member._id) }>
    <td>
      { member.fullname }
    </td>
    <td>
      { member.bio }
    </td>
  </tr>
);
