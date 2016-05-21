import $ from 'jquery';
import 'jquery-validation';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { getInputValue } from './get-input-value';

import { convertToRaw } from 'draft-js';

let component;

const blog = () => {
  const title = getInputValue(component.refs.blogTitle);

  const content = component.state.editorState.getCurrentContent();
  const article = JSON.stringify(convertToRaw(content)); // to workaround ValidatedMethod in SimpleSchema
  
  if(component.props.blog && component.props.blog._id){
    //update modus
    const blog = {
      title: title,
      article: article
    };

    console.log('blog di depan', blog);

    Meteor.call('blog.update', {_id:component.props.blog._id, blog: blog}, function(error,result){
      if(error){
        Bert.alert(error.message,'danger');
      }else{
        Bert.alert('Updated...', 'success');
      }
    });
  }else{
    //insert modus
    Meteor.call('blog.insert', {title: title, article: article}, function(error,result){
      if(error){
        Bert.alert(error.message,'danger');
      }else{
        Bert.alert('Saved...', 'success');
        browserHistory.push('/blog/form/'+result);
      }
    });
  };
  
  // console.log('contentRaw di dalam module', contentRaw);

  // const article = getInputValue(component.refs.blogArticle);
  // const article = 'sementara';

  // console.log('blog._id di dalam module', component.props.blog._id);

  // const blog = {
  //   title: title,
  //   article: article
  // };

  // if(component.props.blog._id)
  //   blog._id = component.props.blog._id;

};

const validate = () => {
  $(component.refs.blog).validate({
    rules: {
      blogTitle: {
        required: true
      },
      // blogArticle: {
      //   required: true
      // },
    },
    messages: {
      blogTitle: {
        required: 'Need a title here.',
      },
      // blogArticle: {
      //   required: 'Need article here.',
      // },
    },
    submitHandler() { blog(); },
  });
};

export const blogValidate = (options) => {
  component = options.component;
  validate();
};
