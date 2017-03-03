/**
*
* StockGraph
*
*/

import React, { PropTypes } from 'react';
import moment from 'moment';
import {
  AreaChart,
  linearGradient,
  Area,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { lightBlue } from 'styles/colors';

const dateFormat = (date) => moment(date).format('MMM');
const tooltipFormat = (date) => moment(date).format('MMM Do');


function StockGraph({ data, width = 800, margin = { right: 50, top: 10, bottom: 10 } }) {
  return (
    <AreaChart width={width} height={400} margin={margin} data={data}>
      <defs>
        <linearGradient id="close" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor={lightBlue} stopOpacity={0.1} />
        </linearGradient>
      </defs>

      <Area type="monotone" dataKey="adjClose" strokeWidth="" stroke={lightBlue} fillOpacity={1} fill="url(#close)" />
      <Tooltip labelFormatter={tooltipFormat} />
      <XAxis dataKey="date" tickFormatter={dateFormat} tickCount={5} />
      <YAxis dataKey="adjClose" />
    </AreaChart>
  );
}

StockGraph.propTypes = {
  data: PropTypes.array,
  width: PropTypes.number,
  margin: PropTypes.object,
};

export default StockGraph;
