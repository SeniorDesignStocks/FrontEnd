/**
*
* DatePeriodSelector
*
*/

import React, { PropTypes, PureComponent } from 'react';
import styled from 'styled-components';

import { grey, lightGrey } from 'styles/colors';

const Wrapper = styled.ol`
  border-bottom: 1px solid ${grey};
  height: 40px;
  line-height: 40px;

  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
`;

const Button = styled.li`
  border-right: 1px solid ${grey};
  text-align: center;
  flex: 1;

  &:last-child {
    border-right: none;
  }
  &:hover {
    background-color: ${(props) => (props.selected ? grey : lightGrey)};
  }

  background-color: ${(props) => (props.selected ? grey : 'none')};
`;


class DatePeriodSelector extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  types = [
    'Week',
    'Month',
    '3 Months',
    'Year',
    'Max',
  ]

  handleClick = (type) => () => {
    if (typeof this.props.pickFilter === 'function') {
      this.props.pickFilter(type);
    }
  }

  render() {
    return (
      <Wrapper>
        { this.types.map((type, key) =>
          <Button
            selected={type === this.props.filter}
            key={key}
            onClick={this.handleClick(type)}
          >
            {type}
          </Button>
        ) }
      </Wrapper>
    );
  }
}

DatePeriodSelector.propTypes = {
  pickFilter: PropTypes.func,
  filter: PropTypes.string,
};

export default DatePeriodSelector;
