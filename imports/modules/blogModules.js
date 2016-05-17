import $ from 'jquery';
import 'jquery-validation';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { getInputValue } from './get-input-value';

let component;

const blog = () => {
  const title = getInputValue(component.refs.blogTitle);
  // const article = getInputValue(component.refs.blogArticle);
  const article = 'sementara';

  Meteor.call('blog.insert', {title:title, article:article}, function(error,result){
    if(error){
      Bert.alert(error.message,'danger');
    }else{
      browserHistory.push('/blog/detail/'+result);
      // Bert.alert('Welcome!', 'success');
    }
  });
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
