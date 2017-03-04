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
    const { getPlotData, getCurValues, data } = this.props;
    const { plotData, curValues } = data;

    if (plotData === false) {
      getPlotData();
    }

    if (curValues === false) {
      getCurValues();
    }
  }

  shouldComponentUpdate() {
    // return a boolean value
    return true;
  }

  render() {
    const { name, curValues, plotData } = this.props.data;

    return (
      <Wrapper>
        <TitleBar>
          <TitleBarLeft>
            <FavoriteIcon stockName={name} />
            <StockName to={`/stock/${name}`}>{name}</StockName>
          </TitleBarLeft>
          { curValues === false
            ? ''
            : <StockValue up={curValues.up} value={curValues.value} />
          }
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
  data: PropTypes.object,
  getPlotData: PropTypes.func,
  getCurValues: PropTypes.func,
};

export default FavoriteStock;
