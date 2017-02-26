import React, { Component, PropTypes } from 'react';
import { groupBy, isUndefined } from 'lodash';

import SearchBarList from './SearchBarList';
import SearchBarListItem from './SearchBarListItem';
import SearchBarListItemRight from './SearchBarListItemRight';
import StockNameHighlight from './StockNameHighlight';
import FavoriteIcon from 'components/FavoriteIcon';

class SearchBarResults extends Component {
  createName(name, rawTerm) {
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
  }

  render() {
    const { results, searchTerm, favorites, setFavorite } = this.props;

    const createList = (favorited) => (name, key) => (
      <SearchBarListItem stockName={name} key={key}>
        { isUndefined(favorited)
            ? ''
            : <FavoriteIcon
              favorited={favorited}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setFavorite(name, !favorited);
              }}
            /> }
        {this.createName(name, searchTerm)}
        <SearchBarListItemRight>Pred: test</SearchBarListItemRight>
      </SearchBarListItem>
    );

    if (favorites) {
      const groups = groupBy(results, (name) => (
        favorites.indexOf(name) !== -1
          ? 'favorite'
          : 'nonFavorite'
      ));

      return (
        <SearchBarList>
          { isUndefined(groups.favorite)
              ? ''
              : groups.favorite.map(createList(true)) }
          { isUndefined(groups.nonFavorite)
              ? ''
              : groups.nonFavorite.map(createList(false)) }
        </SearchBarList>
      );
    }

    return (
      <SearchBarList>
        { results.map(createList()) }
      </SearchBarList>
    );
  }
}

SearchBarResults.propTypes = {
  results: PropTypes.arrayOf(React.PropTypes.string),
  searchTerm: PropTypes.string,
  favorites: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  setFavorite: PropTypes.func,
};

export default SearchBarResults;
