/**
*
* StockGraph
*
*/

import React, { PropTypes } from 'react';
import {
  AreaChart,
  linearGradient,
  Area,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { lightBlue } from 'styles/colors';

function StockGraph({ data, width = 800, margin = { right: 50, top: 10, bottom: 10 } }) {
  return (
    <AreaChart width={width} height={400} margin={margin} data={data}>
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
  );
}

StockGraph.propTypes = {
  data: PropTypes.array,
  width: PropTypes.number,
  margin: PropTypes.object,
};

export default StockGraph;
