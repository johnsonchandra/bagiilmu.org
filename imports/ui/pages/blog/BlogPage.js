import React from 'react';
import BlogDetail from '../../containers/blog/BlogDetail.js';

export const BlogPage = ({ params, location }) => (
	<BlogDetail blogId={ params.blogId } />
);
