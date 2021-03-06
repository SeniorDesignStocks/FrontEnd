import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { grey, black, white } from 'styles/colors';
import { font, textMedium } from 'styles/text';
import { Link } from 'react-router';

const Wrapper = styled.li`
  font-family: ${font};
  font-size: ${textMedium};

  height: 40px;
  line-height: 40px;
  margin: 5px;
  padding: 0 5px;
  border-radius: 2px;

  background-color: ${(props) => (props.selected ? grey : white)};
  &:hover {
    background-color: ${grey};
  }
`;

const StockLink = styled(Link)`
  display: flex;
  flex-direction: row;
  color: ${black};
  text-decoration: none;
`;

const SearchBarListItem = ({ stockName, children, selected, ...props }) => (
  <Wrapper {...props} selected={selected}>
    <StockLink to={`/stock/${stockName}`}>
      {React.Children.toArray(children)}
    </StockLink>
  </Wrapper>
);

SearchBarListItem.propTypes = {
  stockName: PropTypes.string,
  children: PropTypes.node,
  selected: PropTypes.bool,
};

export default SearchBarListItem;
