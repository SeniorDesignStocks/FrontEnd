/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';

import FavoriteList from 'containers/FavoriteList';
import Helmet from 'react-helmet';
import Background from './Background';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Background>
        <Helmet
          title="Home"
          meta={[
            { name: 'description', content: 'Home page' },
          ]}
        />
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

export default HomePage;
