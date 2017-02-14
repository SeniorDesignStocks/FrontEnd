/*
 *
 * FavoriteList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectFavoriteList from './selectors';

import Wrapper from './elements/Wrapper';
import FavoriteStock from '../../components/FavoriteStock';

export class FavoriteList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        { this.props.favorites.map((info, key) =>
          <FavoriteStock key={key} info={info} />)
        }
      </Wrapper>
    );
  }
}

FavoriteList.propTypes = {
  favorites: React.PropTypes.array,
};

const mapStateToProps = selectFavoriteList();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
