/*
 *
 * FavoriteList
 *
 */

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import selectFavoriteList from './selectors';
import { createStructuredSelector } from 'reselect';

import {
  requestPlotData,
  unfavorite,
} from './actions';
import Wrapper from './elements/Wrapper';
import FavoriteStock from '../../components/FavoriteStock';

export class FavoriteList extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        { this.props.favorites.map((info, key) =>
          <FavoriteStock
            key={key}
            info={info}
            requestPlotData={() => this.props.requestPlotData(info.name)}
            unFavorite={() => this.props.unfavorite(info.name)}
          />
        )}
      </Wrapper>
    );
  }
}

FavoriteList.propTypes = {
  favorites: PropTypes.array,
  requestPlotData: PropTypes.func,
  unfavorite: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  favorites: selectFavoriteList(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestPlotData: (stockName) => dispatch(requestPlotData(stockName)),
    unfavorite: (stockName) => dispatch(unfavorite(stockName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
