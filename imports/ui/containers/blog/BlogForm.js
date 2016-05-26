import { composeWithTracker } from 'react-komposer';
import { Blog } from '../../../api/blog/blog_collection.js';
import { BlogForm } from '../../components/blog/BlogForm.js';
import { Loading } from '../../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
	if(params.blogId){
		const subscription = Meteor.subscribe('blog.edit', params.blogId);
		if (subscription.ready()) {
			const blog = Blog.findOne();
			if(blog)
				onData(null,  { blog });
			else{
				browserHistory.push('/error');
			}
		}
	}else{
		onData(null, {});
	}
};

export default composeWithTracker(composer, Loading)(BlogForm);
