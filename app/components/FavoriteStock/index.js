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
import TitleBarPadding from './elements/TitleBarPadding';
import StockGraph from 'components/StockGraph';
import ValuePrefix from './elements/ValuePrefix';

import FavoriteIcon from 'containers/FavoriteIcon';

class FavoriteStock extends Component {
  componentWillMount() {
    const { getPlotData, getCurValues, getPredictions, data } = this.props;
    const { plotData, curValues, predictions } = data;

    if (plotData === false) {
      getPlotData();
    }

    if (curValues === false) {
      getCurValues();
    }

    if (predictions === false) {
      getPredictions();
    }
  }

  shouldComponentUpdate() {
    // return a boolean value
    return true;
  }

  render() {
    const { name, curValues, plotData, predictions } = this.props.data;
    const pred = predictions.predictionDay;
    const val = curValues.lastTradePriceOnly;

    return (
      <Wrapper>
        <TitleBar>
          <TitleBarLeft>
            <FavoriteIcon stockName={name} />
            <StockName to={`/stock/${name}`}>{name}</StockName>
          </TitleBarLeft>
          <TitleBarPadding />

          <ValuePrefix>Pred:</ValuePrefix>
          { predictions
            ? <StockValue
              up={pred > val}
              value={Math.abs((pred - val) / val) * 100}
              percentage
            />
            : '~'
          }

          <ValuePrefix>Value:</ValuePrefix>
          { curValues
            ? <StockValue
              up={pred > curValues['50DayMovingAverage']}
              value={val}
            />
            : ''
          }
        </TitleBar>
        { plotData === false
          ? <LoadingBar />
          : <StockGraph data={plotData} predictions={predictions} datePeriodSelector />
        }
      </Wrapper>
    );
  }
}

FavoriteStock.propTypes = {
  data: PropTypes.object,
  getPlotData: PropTypes.func,
  getCurValues: PropTypes.func,
  getPredictions: PropTypes.func,
};

export default FavoriteStock;
