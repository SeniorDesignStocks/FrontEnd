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
import { requestPlotData } from './actions';
import { unfavorite } from 'containers/App/actions';

// components
import Wrapper from './elements/Wrapper';
import FavoriteStock from 'components/FavoriteStock';
import LogInMessage from 'components/LogInMessage';

export class FavoriteList extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { favoritesData, favorites } = this.props;

    let content = '';
    if (favorites) {
      content = favoritesData.map((info, key) =>
        <FavoriteStock
          key={key}
          info={info}
          requestPlotData={() => this.props.requestPlotData(info.name)}
          unFavorite={() => this.props.unfavorite(info.name)}
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
  requestPlotData: PropTypes.func,
  unfavorite: PropTypes.func,
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
    requestPlotData: (stockName) => dispatch(requestPlotData(stockName)),
    unfavorite: (stockName) => dispatch(unfavorite(stockName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
