import React from 'react';
// import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';

import { goLink } from '../../../../modules/utils.js';

export const AdmMemberItem = ({ member }) => (
  <tr onClick={ goLink.bind(this, '/adm/member/detail/'+member._id) }>
    <td>
      { member.fullname }
    </td>
    <td>
      { member.role }
    </td>
  </tr>
);
