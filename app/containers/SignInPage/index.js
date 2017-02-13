/*
 *
 * SignInPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import SignInForm from '../../components/SignInForm';
import { signIn } from '../App/actions';

export class SignInPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleSubmit = (values) => {
    const userData = values.toJS();
    this.props.handleSignIn(userData);
  }

  render() {
    return (
      <div>
        <SignInForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

SignInPage.propTypes = {
  handleSignIn: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    handleSignIn: (userData) => dispatch(signIn(userData)),
  };
}

export default connect(null, mapDispatchToProps)(SignInPage);
