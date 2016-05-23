import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { BlogItem } from './blog_item.js';

export const BlogsList = ({ blogs }) => (
  blogs.length > 0 ? <ListGroup className="documents-list">
    {blogs.map((blogItem) => (
      <BlogItem key={ blogItem._id } blogItem={ blogItem } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No Blog yet.</Alert>
);

BlogsList.propTypes = {
  blogs: React.PropTypes.array
};
