/*
 *
 * FavoriteList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectFavoriteList from './selectors';
import { createStructuredSelector } from 'reselect';

import { requestPlotData } from './actions';
import Wrapper from './elements/Wrapper';
import FavoriteStock from '../../components/FavoriteStock';

export class FavoriteList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        { this.props.favorites.map((info, key) =>
          <FavoriteStock
            key={key}
            info={info}
            requestPlotData={() => this.props.requestPlotData(info.name)}
          />
        )}
      </Wrapper>
    );
  }
}

FavoriteList.propTypes = {
  favorites: React.PropTypes.array,
  requestPlotData: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  favorites: selectFavoriteList(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestPlotData: (stockName) => {
      dispatch(requestPlotData(stockName));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
