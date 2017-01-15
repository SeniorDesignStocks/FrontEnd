/*
 *
 * SearchBar
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Wrapper from './elements/Wrapper';
import SearchInput from './elements/SearchInput';
import SearchBarFrame from './elements/SearchBarFrame';
import SearchBarResults from './elements/SearchBarResults';

import { selectSearchTerm, selectSearchResults } from './selectors';
import { changeSeachTerm } from './actions';

export class SearchBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      focus: false,
    };
  }

  handleFocus = (focus) => {
    this.setState({ focus });
  }

  render() {
    const { searchTerm, searchResults, onSearchTermChange } = this.props;
    let style = { height: '50px' };

    if (this.state.focus && searchTerm.length > 0) {
      style = {
        height: `${((1 + searchResults.length) * 50)}px`,
        boxShadow: '0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08)',
      };
    }

    return (
      <Wrapper>
        <SearchBarFrame style={style}>
          <SearchInput
            type="text"
            value={searchTerm}
            onChange={onSearchTermChange}
            onFocus={() => this.handleFocus(true)}
            onBlur={() => this.handleFocus(false)}
          />
          { this.state.focus && searchTerm.length > 0 ?
            <SearchBarResults
              results={searchResults}
              searchTerm={searchTerm}
            />
            : '' }
        </SearchBarFrame>
      </Wrapper>
    );
  }
}

SearchBar.propTypes = {
  searchTerm: React.PropTypes.string,
  searchResults: React.PropTypes.arrayOf(React.PropTypes.string),
  onSearchTermChange: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  searchTerm: selectSearchTerm(),
  searchResults: selectSearchResults(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSearchTermChange: (e) => dispatch(changeSeachTerm(e.target.value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
