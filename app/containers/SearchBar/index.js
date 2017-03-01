/*
 *
 * SearchBar
 *
 */

import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';

import {
  selectSearchTerm,
  selectSearchResults,
  selectSelectIndex,
} from './selectors';
import { selectFavorites } from 'containers/App/selectors';

import {
  addFavorite,
  unfavorite,
} from 'containers/App/actions';
import {
  changeSeachTerm,
  changeSelectIndex,
} from './actions';

import Wrapper from './elements/Wrapper';
import SearchInput from './elements/SearchInput';
import SearchBarFrame from './elements/SearchBarFrame';
import SearchBarResults from './elements/SearchBarResults';

export class SearchBar extends PureComponent {

  selectResult = () => {
    this.props.onSearchTermChange('');
  }

  handleOnEnter = () => {
    const { searchResults, selectIndex } = this.props;

    if (searchResults.length > 0) {
      this.selectResult();
      browserHistory.push(`/stock/${searchResults[selectIndex]}`);
    }
  }

  handleMove = (move) => {
    const { onSelectIndexChange, selectIndex, searchResults } = this.props;

    if (move === 'DOWN' && selectIndex !== searchResults.length - 1 && searchResults.length > 0) {
      onSelectIndexChange(selectIndex + 1);
    } else if (move === 'UP' && selectIndex !== 0) {
      onSelectIndexChange(selectIndex - 1);
    }
  }

  render() {
    const { searchTerm, searchResults, onSearchTermChange, favorites, selectIndex } = this.props;
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
            onChange={(e) => onSearchTermChange(e.target.value)}
            onMove={this.handleMove}
            onEnter={this.handleOnEnter}
          />
          { searchTerm.length > 0 ?
            <SearchBarResults
              results={searchResults}
              searchTerm={searchTerm}
              favorites={favorites}
              selectIndex={selectIndex}
              onSelectResult={this.selectResult}
            />
            : '' }
        </SearchBarFrame>
      </Wrapper>
    );
  }
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string,
  selectIndex: PropTypes.number,
  searchResults: PropTypes.arrayOf(PropTypes.string),
  onSearchTermChange: PropTypes.func,
  onSelectIndexChange: PropTypes.func,
  favorites: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

const mapStateToProps = createStructuredSelector({
  searchTerm: selectSearchTerm(),
  searchResults: selectSearchResults(),
  selectIndex: selectSelectIndex(),
  favorites: selectFavorites(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSearchTermChange: (term) => dispatch(changeSeachTerm(term)),
    onSelectIndexChange: (newIndex) => dispatch(changeSelectIndex(newIndex)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
