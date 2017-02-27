/*
 *
 * SignInPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectErrorMessage,
} from 'containers/App/selectors';

import SignInForm from 'components/SignInForm';
import { signIn } from 'containers/App/actions';

import Overlay from './elements/Overlay';

export class SignInPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleSubmit = (values) => {
    const userData = values.toJS();
    this.props.handleSignIn(userData);
  }

  render() {
    const { errorMessage, oldPathName } = this.props;

    return (
      <Overlay oldPathName={oldPathName}>
        <SignInForm errorMessage={errorMessage} onSubmit={this.handleSubmit} />
      </Overlay>
    );
  }
}

SignInPage.propTypes = {
  handleSignIn: PropTypes.func,
  oldPathName: PropTypes.string,
  errorMessage: PropTypes.string,
};

const mapStatetoProps = createStructuredSelector({
  errorMessage: selectErrorMessage(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSignIn: (loginInfo) => dispatch(signIn(loginInfo)),
  };
}

export default connect(mapStatetoProps, mapDispatchToProps)(SignInPage);
