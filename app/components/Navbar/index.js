/**
*
* Navbar
*
*/

import React, { Component, PropTypes } from 'react';

import Li from './elements/CleanLi';
import NavList from './elements/NavList';
import NavLink from './elements/NavLink';
import LoginLink from './elements/LoginLink';
import OuterWrapper from './elements/OuterWrapper';
import InnerWrapper from './elements/InnerWrapper';
import AccountElement from './elements/AccountElement';
import SelectedNavElement from './elements/SelectedNavElement';

class Navbar extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { userData } = this.props;

    return (
      <OuterWrapper>
        <InnerWrapper>
          {/* List of Links to different pages within the app */}
          <NavList>
            <SelectedNavElement>Favorites</SelectedNavElement>
            <Li><NavLink to={'/growth'}>Growth</NavLink></Li>
            <Li><NavLink to={'/loss'}>Loss</NavLink></Li>
          </NavList>

          {/* Handles account functions within the application */}
          { userData
            ? <AccountElement>{userData.username}</AccountElement>
            : <LoginLink to={'/sign-in'}>Log In</LoginLink>
          }
        </InnerWrapper>
      </OuterWrapper>
    );
  }
}

Navbar.propTypes = {
  userData: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
};

export default Navbar;
