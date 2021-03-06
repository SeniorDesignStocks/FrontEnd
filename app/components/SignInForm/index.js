/**
*
* SignInForm
*
*/

import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';

import Wrapper from './elements/Wrapper';
import Section from './elements/Section';
import ErrorMessage from './elements/ErrorMessage';

import Label from 'components/Label';
import Button from 'components/Button';
import TextInput from 'components/TextInput';

function SignInForm({ handleSubmit, errorMessage }) {
  return (
    <Wrapper onSubmit={handleSubmit}>
      <Section>
        <Label htmlFor="username">Username</Label>
        <Field name="username" autoFocus component={TextInput} type="text" />
      </Section>
      <Section>
        <Label htmlFor="password">Password</Label>
        <Field name="password" component={TextInput} type="password" />
      </Section>
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <Button type="submit">Sign In</Button>
      <Button to="/sign-up" primary={false}>Sign Up</Button>
    </Wrapper>
  );
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func,
  errorMessage: PropTypes.string,
};

export default reduxForm({
  form: 'signIn',
})(SignInForm);
