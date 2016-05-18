import React from 'react';
// import { MemberMenu } from './member_menu.js';
import { NotFound } from '../pages/not-found';
import { Image } from 'react-bootstrap';

import { Link } from 'react-router';

import { 
  convertFromRaw,
  Editor,
  EditorState
} from 'draft-js';


export const BlogDetail = ({ blog }) => {
	if(blog){
		const rawContent = JSON.parse(blog.article);
		const blocks = convertFromRaw(rawContent);

		this.state = {
			editorState: EditorState.createWithContent(blocks),
		};

		const publishedTimestamp = blog.timestamp.toLocaleDateString();

		return(
			<div>
				<h2>{ blog.title }</h2>
				<hr/>
				<p>
					Published on { publishedTimestamp } by <Link to={`/member/detail/${blog.userId}`}>{ blog.member().nickname }</Link>
				</p>
				<hr/>
				<Image alt="article" src="/images/900x300.png" responsive />
				<hr/>
	          <Editor editorState={this.state.editorState} readOnly={ true }/>
	          <hr/>
			</div>
		);
	} else {
		return(
			<NotFound />
		);
	}
}

BlogDetail.propTypes = {
  blog: React.PropTypes.object
};

