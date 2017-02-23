/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectUserData } from 'containers/App/selectors';

import Navbar from 'components/Navbar';
import SearchBar from 'containers/SearchBar';
import FavoriteList from 'containers/FavoriteList';
import Background from './Background';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { userData } = this.props;

    return (
      <Background>
        <SearchBar />
        <Navbar userData={userData} />
        <FavoriteList />
      </Background>
    );
  }
}

HomePage.propTypes = {
  userData: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object,
  ]),
};

export default connect(createStructuredSelector({
  userData: selectUserData(),
}))(HomePage);
