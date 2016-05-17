import React from 'react';
// import { MemberMenu } from './member_menu.js';
import { NotFound } from '../pages/not-found';
import { Image } from 'react-bootstrap';

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


		return(
			<div>
				<h2>{ blog.title }</h2>
				<hr/>
				<p>Posted on August 24, 2013 at 9:00 PM</p>
				<hr/>
				<div align="center">
					<Image alt="article" src="/images/900x300.png" responsive />
				</div>
				<hr/>

	          <Editor editorState={this.state.editorState} readOnly={true}/>

			</div>
		);
	}
	else
		return(
			<NotFound />
		);
}
