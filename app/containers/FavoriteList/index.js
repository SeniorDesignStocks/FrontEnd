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

// components
import Wrapper from './elements/Wrapper';
import FavoriteStock from 'components/FavoriteStock';
import LogInMessage from 'components/LogInMessage';

export class FavoriteList extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { favoritesData, favorites, handleRequestPlotData } = this.props;

    let content = '';
    console.log(favoritesData);
    if (favorites) {
      content = favoritesData.map((info, key) =>
        <FavoriteStock
          key={key}
          info={info}
          requestPlotData={() => handleRequestPlotData(info.name)}
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
  handleRequestPlotData: PropTypes.func,
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
    handleRequestPlotData: (stockName) => dispatch(requestPlotData(stockName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
