import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { BlogItem } from './blog_item.js';

export const BlogList = ({ blogs }) => (
  blogs.length > 0 ? <ListGroup className="documents-list">
    {blogs.map((blogItem) => (
      <BlogItem key={ blogItem._id } blogItem={ blogItem } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No Blog yet.</Alert>
);

BlogList.propTypes = {
  blogs: React.PropTypes.array
};
