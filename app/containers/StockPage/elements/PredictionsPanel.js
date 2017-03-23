import React from 'react';
import styled from 'styled-components';

import { red, lightBlue, darkGrey } from 'styles/colors';
import SVG from 'components/SVG';
import H2 from 'components/H2';

const Wrapper = styled.div`
  margin: 0 30px;
`;

const Prediction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0 0 0;
`;

const Change = styled.div`
  color: ${(props) => (props.up ? lightBlue : red)};
  display: flex;
  flex-direction: row;
`;

const Prefix = styled.span`
  color: ${darkGrey};
`;

const round = (num) => Math.round(num * 100) / 100;
const getChange = (newVal, curVal) => round((Math.abs(newVal - curVal) / curVal) * 100);

const PredictionsPanel = ({ curVal, predictions }) => {
  const day = predictions.predictionDay;
  const week = predictions.predictionWeek;
  const month = predictions.predictionMonth;

  return (
    <Wrapper>
      <Prediction>
        <H2><Prefix>Next Day: </Prefix>{round(day)}</H2>
        <H2><Change up={day > curVal}>
          <SVG
            style={{ margin: '0 5px 3px 0' }}
            type={(day > curVal) === true ? 'arrow-up' : 'arrow-down'}
            size="small"
          />
          {getChange(day, curVal)}%
        </Change></H2>
      </Prediction>

      <Prediction>
        <H2><Prefix>Next Week: </Prefix>{round(week)}</H2>
        <H2><Change up={week > curVal}>
          <SVG
            style={{ margin: '0 5px 3px 0' }}
            type={(week > curVal) === true ? 'arrow-up' : 'arrow-down'}
            size="small"
          />
          {getChange(week, curVal)}%
        </Change></H2>
      </Prediction>

      <Prediction>
        <H2><Prefix>Next Month: </Prefix>{round(month)}</H2>
        <H2><Change up={month > curVal}>
          <SVG
            style={{ margin: '0 5px 3px 0' }}
            type={(month > curVal) === true ? 'arrow-up' : 'arrow-down'}
            size="small"
          />
          {getChange(month, curVal)}%
        </Change></H2>
      </Prediction>
    </Wrapper>
  );
};

PredictionsPanel.propTypes = {
  curVal: React.PropTypes.number,
  predictions: React.PropTypes.object,
};

export default PredictionsPanel;
