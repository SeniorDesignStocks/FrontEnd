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
  ReferenceLine,
} from 'recharts';

import { lightBlue, black, darkGrey, red } from 'styles/colors';
import DatePeriodSelector from './elements/DatePeriodSelector';
import Wrapper from './elements/Wrapper';

const roundNumber = (num) => Math.round(num * 100) / 100;
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
      moment(date).isAfter(endPoint));

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

  createPredictions(data, prediction) {
    const output = [];
    const lastDate = data[data.length - 1];
    const average = lastDate.average;
    const curDay = moment(lastDate.date);
    // adds the prediction the object
    // effects the data object due to ref
    lastDate.prediction = lastDate.close;

    output.push({
      date: curDay.add(1, 'days').format(),
      prediction: roundNumber(prediction.predictionDay),
      average,
    });

    if (data.length > 15) {
      output.push({
        date: curDay.add(1, 'weeks').format(),
        prediction: roundNumber(prediction.predictionWeek),
        average,
      });
    }

    if (data.length > 50) {
      output.push({
        date: curDay.add(1, 'months').format(),
        prediction: roundNumber(prediction.predictionMonth),
        average,
      });
    }

    return output;
  }

  // Converting the data so that it is displayed better by rechart in tooltips
  convertData(data) {
    const formatNumber = (num, exp = 2) => Math.round(num * (10 ** exp)) / (10 ** exp);
    const average = data.reduce((acc, { close }) => acc + close, 0) / data.length;

    return data.map(({ date, adjClose }) => ({
      date,
      average: formatNumber(average),
      close: formatNumber(adjClose),
    }));
  }

  render() {
    const { data, width = 800, margin = { right: 50, top: 10, bottom: 10 }, brush, datePeriodSelector, predictions } = this.props;
    const filteredData = this.convertData(this.filterData(data));
    const filteredPredictions = this.createPredictions(filteredData, predictions);

    return (
      <Wrapper>
        { datePeriodSelector
          ? <DatePeriodSelector pickFilter={this.handleFilter} filter={this.state.filter} />
          : '' }
        <AreaChart width={width} height={400} margin={margin} data={[...filteredData, ...filteredPredictions]}>
          <defs>
            <linearGradient id="lightBlue" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor={lightBlue} stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="red" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor={red} stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="none" x1="0" y1="0" x2="0" y2="1">
              <stop stopOpacity={0} />
            </linearGradient>
          </defs>

          <Area
            isAnimationActive={false}
            dataKey="close"
            stroke={lightBlue}
            fill="url(#lightBlue)"
          />
          <Area
            isAnimationActive={false}
            dataKey="prediction"
            stroke={red}
            fill="url(#red)"
          />
          <Area
            isAnimationActive={false}
            dataKey="average"
            stroke={darkGrey}
            strokeDasharray="5 5"
            activeDot={false}
            dot={false}
            fill="url(#none)"
          />
          <ReferenceLine
            x={filteredData[filteredData.length - 1].date}
            stroke={black}
          />

          <Tooltip labelFormatter={tooltipFormat} />
          <XAxis dataKey="date" tickFormatter={tooltipFormat} minTickGap={100} />
          <YAxis
            dataKey="close"
            domain={['dataMin - 10', 'dataMax + 10']}
            allowDecimals={false}
          />
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
  predictions: PropTypes.object,
  datePeriodSelector: PropTypes.bool,
};

export default StockGraph;
