/*
 *
 * SignInPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SignInForm from 'components/SignInForm';
import { signIn } from 'containers/App/actions';

import Overlay from './elements/Overlay';

export class SignInPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleSubmit = (values) => {
    const userData = values.toJS();
    this.props.handleSignIn({ ...userData, favorites: ['AAPL', 'AASS', 'GOOG'] });
  }

  render() {
    return (
      <Overlay oldPathName={this.props.oldPathName}>
        <SignInForm onSubmit={this.handleSubmit} />
      </Overlay>
    );
  }
}

SignInPage.propTypes = {
  handleSignIn: PropTypes.func,
  oldPathName: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    handleSignIn: (userData) => dispatch(signIn(userData)),
  };
}

export default connect(null, mapDispatchToProps)(SignInPage);
