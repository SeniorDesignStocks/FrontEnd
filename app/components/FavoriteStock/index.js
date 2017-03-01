/**
*
* FavoriteStock
*
*/

import React, { Component, PropTypes } from 'react';

import Wrapper from './elements/Wrapper';
import TitleBar from './elements/TitleBar';
import LoadingBar from 'components/LoadingBar';
import StockName from './elements/StockName';
import StockValue from './elements/StockValue';
import TitleBarLeft from './elements/TitleBarLeft';
import StockGraph from 'components/StockGraph';

import FavoriteIcon from 'containers/FavoriteIcon';

class FavoriteStock extends Component {
  componentWillMount() {
    if (this.props.info.plotData === false) {
      this.props.requestPlotData();
    }
  }

  shouldComponentUpdate() {
    // return a boolean value
    return true;
  }

  render() {
    const { name, stockData, plotData } = this.props.info;

    return (
      <Wrapper>
        <TitleBar>
          <TitleBarLeft>
            <FavoriteIcon stockName={name} />
            <StockName to={`/stock/${name}`}>{name}</StockName>
          </TitleBarLeft>
          <StockValue up={stockData.up} value={stockData.value} />
        </TitleBar>
        { plotData === false
          ? <LoadingBar />
          : <StockGraph data={plotData} />
        }
      </Wrapper>
    );
  }
}

FavoriteStock.propTypes = {
  info: PropTypes.object,
  requestPlotData: PropTypes.func,
  unFavorite: PropTypes.func,
};

export default FavoriteStock;
