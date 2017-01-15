/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import SearchBar from '../SearchBar';
import Navbar from '../../components/Navbar';

import Background from './Background';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Background>
        <SearchBar />
        <Navbar />
        <FormattedMessage {...messages.header} />
      </Background>
    );
  }
}
