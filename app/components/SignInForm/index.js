/**
*
* SignInForm
*
*/

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';

import TextInput from '../TextInput';
import Wrapper from './elements/Wrapper';
import Section from './elements/Section';
import Button from '../Button';
import Label from '../Label';

function SignInForm({ handleSubmit }) {
  return (
    <Wrapper onSubmit={handleSubmit}>
      <Section>
        <Label htmlFor="username">Username</Label>
        <Field name="username" component={TextInput} type="text" />
      </Section>
      <Section>
        <Label htmlFor="password">Password</Label>
        <Field name="password" component={TextInput} type="text" />
      </Section>
      <Button type="submit" className="button-primary">Submit</Button>
    </Wrapper>
  );
}

SignInForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

export default reduxForm({
  form: 'signIn',
})(SignInForm);
