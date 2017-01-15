import React from 'react';

import SearchBarList from './SearchBarList';
import SearchBarListItem from './SearchBarListItem';
import SearchBarListItemRight from './SearchBarListItemRight';
import StockNameHighlight from './StockNameHighlight';

const createName = (name, rawTerm) => {
  const searchTerm = rawTerm.toUpperCase();
  const index = name.indexOf(searchTerm);
  const substrings = [];

  if (index !== -1) {
    substrings.push(<span key={1}>{name.slice(0, index)}</span>);
    substrings.push(<StockNameHighlight key={2}>{searchTerm}</StockNameHighlight>);

    if ((index + searchTerm.length) < name.length) {
      substrings.push(<span key={3}>{name.slice((index + searchTerm.length))}</span>);
    }
  }

  return (<span>{substrings}</span>);
};

const SearchBarResults = ({ results, searchTerm }) => (
  <SearchBarList>
    { results.map((name, key) =>
      <SearchBarListItem key={key}>
        {createName(name, searchTerm)}
        <SearchBarListItemRight>Pred: test</SearchBarListItemRight>
      </SearchBarListItem>) }
  </SearchBarList>
);

SearchBarResults.propTypes = {
  results: React.PropTypes.arrayOf(React.PropTypes.string),
  searchTerm: React.PropTypes.string,
};

export default SearchBarResults;
