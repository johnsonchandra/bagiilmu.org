import { composeWithTracker } from 'react-komposer';
import { Blog } from '../../../api/blog/blog_collection.js';
import { BlogDetail } from '../../components/blog/blog_detail.js';
import { Loading } from '../../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
	const subscription = Meteor.subscribe('blog.active', params.blogId);
	if (subscription.ready()) {
		const blog = Blog.findOne();
		onData(null, { blog });
	}
};

export default composeWithTracker(composer, Loading)(BlogDetail);
