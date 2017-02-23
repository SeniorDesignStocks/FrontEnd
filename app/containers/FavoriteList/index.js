/*
 *
 * FavoriteList
 *
 */

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import selectFavoriteList from './selectors';
import { selectFavorites } from '../App/selectors';
import { createStructuredSelector } from 'reselect';

import { requestPlotData } from './actions';
import { unfavorite } from 'containers/App/actions';
import Wrapper from './elements/Wrapper';
import FavoriteStock from 'components/FavoriteStock';

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
      content = <div>You are not Logged In</div>;
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
