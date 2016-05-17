import { composeWithTracker } from 'react-komposer';
import { Blog } from '../../api/blog/blog_collection.js';
import { BlogEdit } from '../components/blog_edit.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
	if(params.blogId){
		const subscription = Meteor.subscribe('blog', params.blogId);
		if (subscription.ready()) {
			const blog = Blog.findOne();
			onData(null,  { blog });
		}
	}else{
		onData(null, {});
	}
};

export default composeWithTracker(composer, Loading)(BlogEdit);
