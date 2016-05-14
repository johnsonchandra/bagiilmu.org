import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Blog } from './blog.js';

export const BlogList = ({ blogs }) => (
  blogs.length > 0 ? <ListGroup className="documents-list">
    {blogs.map((blog) => (
      <Blog key={ blog._id } blog={ blog } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No Blog yet.</Alert>
);

BlogList.propTypes = {
  blogs: React.PropTypes.array
};
