import React from 'react';

import { goLink } from '../../../modules/utils.js';

export const OrganizationItem = ({ organization }) => (
  <tr onClick={ goLink.bind(this, '/organization/'+organization._id) }>
    <td>
      { organization.name }
    </td>
  </tr>
);
