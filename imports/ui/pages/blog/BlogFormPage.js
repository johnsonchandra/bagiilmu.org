import React from 'react';
import BlogForm from '../../containers/blog/BlogForm.js';

export const BlogFormPage = ({ params, location }) => (
	<div>
		<h4 className="page-header">Blog Form</h4>
      <BlogForm blogId={ params.blogId } />
	</div>
);

