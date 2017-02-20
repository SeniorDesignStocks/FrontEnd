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

import { lightBlue } from '../../styles/colors';

import { AreaChart, linearGradient, Area, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

class FavoriteStock extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.plotData = [
        { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
        { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
        { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
        { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
        { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
      ];
      this.forceUpdate();
    }, 2000);
  }

  plotData = false
  render() {
    const { name, favorited, stockData } = this.props.info;
    const width = 800;

    return (
      <Wrapper>
        <TitleBar>
          <StockName>{name}</StockName>
          <StockValue up={stockData.up} value={stockData.value} />
        </TitleBar>
        { this.plotData === false
          ? <LoadingBar><LoadingElement /></LoadingBar>
          : <AreaChart width={width} height={400} margin={{ right: 50, top: 10, bottom: 10 }} data={this.plotData}>
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
};

export default FavoriteStock;
