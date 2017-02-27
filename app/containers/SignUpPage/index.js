/*
 *
 * SignUpPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectSignUpPage from './selectors';
import { signUp } from './actions';

import Overlay from './elements/Overlay';
import SignUpForm from 'components/SignUpForm';

class SignUpPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleSubmit = (values) => {
    const signUpInfo = values.toJS();
    console.log(signUpInfo);
    this.props.handleSignUp(signUpInfo);
  }

  render() {
    const { errors, oldPathName } = this.props;

    return (
      <Overlay oldPathName={oldPathName}>
        <Helmet
          title="Sign Up :D"
          meta={[
            { name: 'description', content: 'Description of SignUpPage' },
          ]}
        />
        <SignUpForm onSubmit={this.handleSubmit} errors={errors} />
      </Overlay>
    );
  }
}

SignUpPage.propTypes = {
  errors: PropTypes.object,
  handleSignUp: PropTypes.func,
  oldPathName: PropTypes.string,
};

const mapStateToProps = selectSignUpPage();

const mapDispatchToProps = (dispatch) => ({
  handleSignUp: (signUpInfo) => dispatch(signUp(signUpInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
