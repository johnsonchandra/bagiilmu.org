import React from 'react';
import BlogEdit from '../containers/blog_edit.js';

export const BlogForm = ({ params, location }) => (
	<div>
		<h4 className="page-header">Blog Form</h4>
      <BlogEdit blogId={ params.blogId } />
	</div>
);
