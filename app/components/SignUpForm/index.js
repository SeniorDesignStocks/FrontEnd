/**
*
* SignUpForm
*
*/

import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';

import Wrapper from './elements/Wrapper';
import Section from './elements/Section';
import ErrorMessage from './elements/ErrorMessage';

import Button from 'components/Button';
import TextInput from 'components/TextInput';
import Label from 'components/Label';

const makeErrorMessage = (message) => {
  if (message === '') return message;

  return <ErrorMessage>{message}</ErrorMessage>;
};

function SignUpForm({ handleSubmit, errors }) {
  const { username, email, password } = errors;

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Section>
        <Label htmlFor="username">Username</Label>
        <Field name="username" autoFocus component={TextInput} type="text" />
        { username && email && password && makeErrorMessage('Username or email is already in use')}
      </Section>
      <Section>
        <Label htmlFor="email">Email</Label>
        <Field name="email" component={TextInput} type="text" />
      </Section>
      <Section>
        <Label htmlFor="password">Password</Label>
        <Field name="password" component={TextInput} type="text" />
      </Section>
      <Button type="submit">Sign Up</Button>
      <Button to="/sign-in" primary={false}>Sign In</Button>
    </Wrapper>
  );
}

SignUpForm.propTypes = {
  errors: PropTypes.object,
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'signUp',
})(SignUpForm);
