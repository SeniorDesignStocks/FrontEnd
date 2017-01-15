/**
*
* Navbar
*
*/

import React from 'react';

import OuterWrapper from './elements/OuterWrapper';
import InnerWrapper from './elements/InnerWrapper';
import NavList from './elements/NavList';
import NavElement from './elements/NavElement';
import SelectedNavElement from './elements/SelectedNavElement';
import AccountElement from './elements/AccountElement';

class Navbar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <OuterWrapper>
        <InnerWrapper>
          {/* List of Links to different pages within the app */}
          <NavList>
            <SelectedNavElement>Favorites</SelectedNavElement>
            <NavElement>Growth</NavElement>
            <NavElement>Loss</NavElement>
          </NavList>

          {/* Handles account functions within the application */}
          <AccountElement>Login</AccountElement>
        </InnerWrapper>
      </OuterWrapper>
    );
  }
}

export default Navbar;
