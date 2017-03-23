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
import SelectedNavElement from './elements/SelectedNavElement';

class Navbar extends Component { // eslint-disable-line react/prefer-stateless-function
  routes = [{
    pathName: '/',
    name: 'Favorites',
  }]

  render() {
    const { userData, pathName } = this.props;

    return (
      <OuterWrapper>
        <InnerWrapper>
          {/* List of Links to different pages within the app */}
          <NavList>
            {this.routes.map((route, key) => {
              if (route.pathName === pathName) {
                return (
                  <SelectedNavElement key={key}>
                    {route.name}
                  </SelectedNavElement>
                );
              }

              return (
                <Li key={key}><NavLink to={route.pathName}>
                  {route.name}
                </NavLink></Li>
              );
            })}
          </NavList>

          {/* Handles account functions within the application */}
          { userData
            ? <LoginLink to={'/account'}>{userData.username}</LoginLink>
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
  pathName: PropTypes.string,
};

export default Navbar;
