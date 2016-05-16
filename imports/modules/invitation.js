import $ from 'jquery';
import 'jquery-validation';
import { Bert } from 'meteor/themeteorchef:bert';
import { getInputValue } from './get-input-value';
import { resetInputValue } from './utils';

let component;

const getInvitationData = () => ({
  email: getInputValue(component.refs.emailAddress),
  fullname: getInputValue(component.refs.fullName)
});

const invite = () => {
  const invitation = getInvitationData();
  
  Meteor.call('invitation', invitation, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      Bert.alert('Invitation sent!', 'success');
      resetInputValue(component.refs.emailAddress);
      resetInputValue(component.refs.fullName);
    };
  });
};

const validate = () => {
  $(component.refs.invitation).validate({
    rules: {
      fullName: {
        required: true,
      },
      emailAddress: {
        required: true,
        email: true,
      }
    },
    messages: {
      fullName: {
        required: 'Full Name?',
      },
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?',
      },

    },
    submitHandler() { invite(); },
  });
};

export const invitation = (options) => {
  component = options.component;
  validate();
};
