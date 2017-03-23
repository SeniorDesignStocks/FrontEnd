/*
 *
 * FavoriteList
 *
 */

import React, { PropTypes, Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// selectors
import selectFavoriteList from './selectors';
import { selectFavorites } from 'containers/App/selectors';

// actions
import { requestPlotData, requestCurValues, requestFavoritesData, requestPredictions } from './actions';

// components
import Wrapper from './elements/Wrapper';
import FavoriteStock from 'components/FavoriteStock';
import LogInMessage from 'components/LogInMessage';

export class FavoriteList extends Component { // eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps(newProps) {
    const { favorites } = newProps;

    if (this.props.favorites === false && favorites) {
      this.props.getFavoritesData(favorites);
    }
  }

  render() {
    const { favoritesData, favorites, getPlotData, getCurValues, getPredictions } = this.props;

    let content = '';
    if (favoritesData.length > 0) {
      content = favoritesData.map((data, key) =>
        <FavoriteStock
          key={key}
          data={data}
          getPredictions={() => getPredictions(data.name)}
          getPlotData={() => getPlotData(data.name)}
          getCurValues={() => getCurValues(data.name)}
        />
      );
    } else if (favorites && favorites.length === 0) {
      content = <LogInMessage message="You have no favorites O.o" />;
    } else {
      content = <LogInMessage />;
    }

    return (
      <Wrapper>
        { content }
      </Wrapper>
    );
  }
}

FavoriteList.propTypes = {
  favoritesData: PropTypes.array,
  getPlotData: PropTypes.func,
  getCurValues: PropTypes.func,
  getFavoritesData: PropTypes.func,
  getPredictions: PropTypes.func,
  favorites: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
  ]),
};

const mapStateToProps = createStructuredSelector({
  favoritesData: selectFavoriteList(),
  favorites: selectFavorites(),
});

function mapDispatchToProps(dispatch) {
  return {
    getPlotData: (stockName) => dispatch(requestPlotData(stockName)),
    getCurValues: (stockName) => dispatch(requestCurValues(stockName)),
    getPredictions: (stockName) => dispatch(requestPredictions(stockName)),
    getFavoritesData: (favorites) => dispatch(requestFavoritesData(favorites)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
