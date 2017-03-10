import React, { Component, PropTypes } from 'react';
import { groupBy, isUndefined } from 'lodash';

import SearchBarList from './SearchBarList';
import SearchBarListItem from './SearchBarListItem';
import SearchBarListItemRight from './SearchBarListItemRight';
import SearchBarListItemPadding from './SearchBarListItemPadding';
import StockNameHighlight from './StockNameHighlight';
import FavoriteIcon from 'containers/FavoriteIcon';

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
    const { onSelectResult, results, searchTerm, favorites, selectIndex } = this.props;

    const createList = (favorited, modSelectIndex) => ({ symbol, lastTradePriceOnly, ...elem }, key) => (
      <SearchBarListItem selected={modSelectIndex === key} onClick={onSelectResult} stockName={symbol} key={key}>
        { isUndefined(favorited)
            ? ''
            : <FavoriteIcon
              stockName={symbol}
            /> }
        {this.createName(symbol, searchTerm)}
        <SearchBarListItemPadding />
        <SearchBarListItemRight value={lastTradePriceOnly} up={lastTradePriceOnly > elem['50DayMovingAverage']} />
      </SearchBarListItem>
    );

    if (favorites) {
      const groups = groupBy(results, ({ symbol }) => (
        favorites.indexOf(symbol) !== -1
          ? 'favorite'
          : 'nonFavorite'
      ));
      const nonFavSelectIndex = isUndefined(groups.favorite)
        ? selectIndex
        : selectIndex - groups.favorite.length
        ;

      return (
        <SearchBarList>
          { isUndefined(groups.favorite)
              ? ''
              : groups.favorite.map(createList(true, selectIndex)) }
          { isUndefined(groups.nonFavorite)
              ? ''
              : groups.nonFavorite.map(createList(false, nonFavSelectIndex)) }
        </SearchBarList>
      );
    }

    return (
      <SearchBarList>
        { results.map(createList(undefined, selectIndex)) }
      </SearchBarList>
    );
  }
}

const { arrayOf, string, object, bool, oneOfType, number, func } = PropTypes;
SearchBarResults.propTypes = {
  results: arrayOf(object),
  searchTerm: string,
  favorites: oneOfType([bool, arrayOf(string)]),
  onSelectResult: func,
  selectIndex: number,
};

export default SearchBarResults;
