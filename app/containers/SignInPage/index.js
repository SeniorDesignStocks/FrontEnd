/*
 *
 * SignInPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import SignInForm from '../../components/SignInForm';
import { signIn } from '../App/actions';

import Background from './elements/Background';

export class SignInPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleSubmit = (values) => {
    const userData = values.toJS();
    this.props.handleSignIn({ ...userData, favorites: ['AAPL', 'AASS', 'GOOG'] });
  }

  render() {
    return (
      <Background>
        <SignInForm onSubmit={this.handleSubmit} />
      </Background>
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
