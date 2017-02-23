/**
*
* FavoriteStock
*
*/

import React from 'react';

import Wrapper from './elements/Wrapper';
import TitleBar from './elements/TitleBar';
import LoadingBar from './elements/LoadingBar';
import LoadingElement from './elements/LoadingElement';
import StockName from './elements/StockName';
import StockValue from './elements/StockValue';
import TitleBarLeft from './elements/TitleBarLeft';
import FavoriteIcon from 'components/FavoriteIcon';

import { lightBlue } from 'styles/colors';

import {
  AreaChart,
  linearGradient,
  Area,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

class FavoriteStock extends React.Component {
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
    const { name, stockData, plotData, favorited } = this.props.info;
    const width = 800;

    return (
      <Wrapper>
        <TitleBar>
          <TitleBarLeft>
            <FavoriteIcon favorited={favorited} onClick={this.props.unFavorite} />
            <StockName>{name}</StockName>
          </TitleBarLeft>
          <StockValue up={stockData.up} value={stockData.value} />
        </TitleBar>
        { plotData === false
          ? <LoadingBar><LoadingElement /></LoadingBar>
          : <AreaChart width={width} height={400} margin={{ right: 50, top: 10, bottom: 10 }} data={plotData}>
            <Area type="monotone" dataKey="uv" strokeWidth="" stroke={lightBlue} fillOpacity={1} fill="url(#uv)" />
            <defs>
              <linearGradient id="uv" x1="0" y1="0" x2="0" y2="1">
                <stop stopColor={lightBlue} stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Tooltip />
            <XAxis dataKey="name" />
            <YAxis />
          </AreaChart>
        }
      </Wrapper>
    );
  }
}

FavoriteStock.propTypes = {
  info: React.PropTypes.object,
  requestPlotData: React.PropTypes.func,
  unFavorite: React.PropTypes.func,
};

export default FavoriteStock;
