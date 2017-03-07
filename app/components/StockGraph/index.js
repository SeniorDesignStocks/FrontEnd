/**
*
* StockGraph
*
*/

import React, { PropTypes, Component } from 'react';
import moment from 'moment';
import {
  AreaChart,
  linearGradient,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  Brush,
} from 'recharts';

import { lightBlue, black, purple } from 'styles/colors';
import DatePeriodSelector from './elements/DatePeriodSelector';
import Wrapper from './elements/Wrapper';

const tooltipFormat = (date) => moment(date).format('MMM Do');

class StockGraph extends Component {
  state = {
    filter: 'Week',
  }

  handleFilter = (type) => {
    this.setState({ filter: type });
  }

  filterData = (data) => {
    const { filter } = this.state;
    const getIndex = (endPoint) => data.findIndex(({ date }) =>
      moment(date).isAfter(endPoint, 'day') && moment(date).isAfter(endPoint, 'month'));

    switch (filter) {
      case 'Week':
        return data.slice(
          data.length - 5,
          data.length
        );
      case 'Month':
        return data.slice(
          getIndex(moment(data[data.length - 1].date).subtract(1, 'months')),
          data.length
        );
      case '3 Months':
        return data.slice(
          getIndex(moment(data[data.length - 1].date).subtract(3, 'months')),
          data.length
        );

      case 'Year':
        return data.slice(
          getIndex(moment(data[data.length - 1].date).subtract(1, 'years')),
          data.length
        );

      default:
        return data;
    }
  }

  // Converting the data so that it is displayed better by rechart in tooltips
  convertData(data) {
    return data.map(({ date, adjClose }) => ({
      date,
      close: adjClose,
    }));
  }

  render() {
    const { data, width = 800, margin = { right: 50, top: 10, bottom: 10 }, brush, datePeriodSelector } = this.props;

    return (
      <Wrapper>
        { datePeriodSelector
          ? <DatePeriodSelector pickFilter={this.handleFilter} filter={this.state.filter} />
          : '' }
        <AreaChart width={width} height={400} margin={margin} data={this.convertData(this.filterData(data))}>
          <defs>
            <linearGradient id="lightBlue" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor={lightBlue} stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <Area
            isAnimationActive={false}
            dataKey="close"
            stroke={lightBlue}
            fill="url(#lightBlue)"
          />

          <Tooltip labelFormatter={tooltipFormat} />
          <XAxis dataKey="date" tickFormatter={tooltipFormat} minTickGap={100} />
          <YAxis dataKey="close" />
          { brush
            ? <Brush dataKey="date" height={30} stroke={black} tickFormatter={tooltipFormat} />
            : '' }
        </AreaChart>
      </Wrapper>
    );
  }
}

StockGraph.propTypes = {
  data: PropTypes.array,
  width: PropTypes.number,
  margin: PropTypes.object,
  brush: PropTypes.bool,
  datePeriodSelector: PropTypes.bool,
};

export default StockGraph;
