import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { selectUserData } from './selectors';
import { createStructuredSelector } from 'reselect';

import Navbar from 'components/Navbar';
import SearchBar from 'containers/SearchBar';
import { lightGrey, black } from 'styles/colors';
import { font } from 'styles/text';

const Wrapper = styled.div`
  background-color: ${lightGrey};
  min-height: 100vh;
  font-family: ${font};
  color: ${black};
`;

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    const { userData, location } = this.props;
    const { pathname } = location;

    return (
      <Wrapper>
        <SearchBar />
        <Navbar pathName={pathname} userData={userData} />
        {React.Children.toArray(this.props.children)}
      </Wrapper>
    );
  }
}

App.propTypes = {
  userData: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  location: PropTypes.object,
};

export default connect(createStructuredSelector({
  userData: selectUserData(),
}))(App);
