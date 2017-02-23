/*
 *
 * SearchBar
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSearchTerm, selectSearchResults } from './selectors';
import { selectFavorites } from 'containers/App/selectors';

import {
  addFavorite,
  unfavorite,
} from 'containers/App/actions';
import { changeSeachTerm } from './actions';

import Wrapper from './elements/Wrapper';
import SearchInput from './elements/SearchInput';
import SearchBarFrame from './elements/SearchBarFrame';
import SearchBarResults from './elements/SearchBarResults';

export class SearchBar extends Component {

  handleFocus = (focus) => {
    this.setState({ focus });
  }

  render() {
    const { searchTerm, searchResults, onSearchTermChange, favorites, setFavorite } = this.props;
    let style = { height: '50px' };

    if (searchTerm.length > 0) {
      style = {
        height: `${((1 + searchResults.length) * 50)}px`,
        boxShadow: '0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08)',
      };
    }

    return (
      <Wrapper>
        <SearchBarFrame style={style} >
          <SearchInput
            type="text"
            value={searchTerm}
            onChange={onSearchTermChange}
          />
          { searchTerm.length > 0 ?
            <SearchBarResults
              results={searchResults}
              searchTerm={searchTerm}
              favorites={favorites}
              setFavorite={setFavorite}
            />
            : '' }
        </SearchBarFrame>
      </Wrapper>
    );
  }
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string,
  searchResults: PropTypes.arrayOf(PropTypes.string),
  onSearchTermChange: PropTypes.func,
  favorites: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  setFavorite: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  searchTerm: selectSearchTerm(),
  searchResults: selectSearchResults(),
  favorites: selectFavorites(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSearchTermChange: (e) => dispatch(changeSeachTerm(e.target.value)),
    setFavorite: (stockName, isFavorite) => dispatch(
      isFavorite
        ? addFavorite(stockName)
        : unfavorite(stockName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
