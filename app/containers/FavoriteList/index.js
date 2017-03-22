/*
 *
 * FavoriteList
 *
 */

import React, { PropTypes, Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';

// selectors
import selectFavoriteList from './selectors';
import { selectFavorites } from 'containers/App/selectors';

// actions
import { requestPlotData, requestCurValues, requestFavoritesData } from './actions';

// components
import Wrapper from './elements/Wrapper';
import FavoriteStock from 'components/FavoriteStock';
import LogInMessage from 'components/LogInMessage';

export class FavoriteList extends Component { // eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps(newProps) {
    const { favorites } = newProps;

    if (!isEqual(favorites, this.props.favorites)) {
      this.props.getFavoritesData(favorites);
    }
  }

  render() {
    const { favoritesData, favorites, getPlotData, getCurValues } = this.props;

    let content = '';
    if (favoritesData.length > 0) {
      content = favoritesData.map((data, key) =>
        <FavoriteStock
          key={key}
          data={data}
          getPlotData={() => getPlotData(data.name)}
          getCurValues={() => getCurValues(data.name)}
        />
      );
    } else if (favorites && favorites.length === 0) {
      content = <div>testing</div>;
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
    getFavoritesData: (favorites) => dispatch(requestFavoritesData(favorites)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
