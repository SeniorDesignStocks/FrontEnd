/*
 *
 * FavoriteList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectFavoriteList from './selectors';

export class FavoriteList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = selectFavoriteList();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
