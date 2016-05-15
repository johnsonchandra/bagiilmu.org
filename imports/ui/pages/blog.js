import React from 'react';
import BlogDetail from '../containers/blog_detail.js';

export const Blog = ({ params, location }) => (
	<BlogDetail blogId={ params.blogId } />
);
