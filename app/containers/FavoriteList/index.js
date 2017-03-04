/*
 *
 * FavoriteList
 *
 */

import React, { PropTypes, PureComponent } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// selectors
import selectFavoriteList from './selectors';
import { selectFavorites } from 'containers/App/selectors';

// actions
import { requestPlotData, requestCurValues } from './actions';

// components
import Wrapper from './elements/Wrapper';
import FavoriteStock from 'components/FavoriteStock';
import LogInMessage from 'components/LogInMessage';

export class FavoriteList extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { favoritesData, favorites, getPlotData, getCurValues } = this.props;

    let content = '';
    if (favorites) {
      content = favoritesData.map((data, key) =>
        <FavoriteStock
          key={key}
          data={data}
          getPlotData={() => getPlotData(data.name)}
          getCurValues={() => getCurValues(data.name)}
        />
      );
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
