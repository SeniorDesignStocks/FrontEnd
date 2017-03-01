import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import { font, textMedium } from 'styles/text';
import { darkGrey } from 'styles/colors';

import SVG from 'components/SVG';

const SearchIcon = styled(SVG)`
  position: absolute;
  left: 10px;
  top: 1px;
  bottom: 0;
  line-height: 40px;
  color: ${darkGrey}
`;

const Wrapper = styled.form`
  height: 40px;
  min-height: 40px;
  position: relative;
`;

const Input = styled.input`
  height: 40px;
  min-height: 40px;
  padding: 0 10px 0 45px;

  transition: 0.25s ease;
  outline: none;

  font-family: ${font};
  font-size: ${textMedium};
  width: 100%;
`;

class SearchInput extends PureComponent {

  handleSubmit(handler) {
    return (e) => {
      e.preventDefault();
      this.inputNode.blur();

      handler();
    };
  }

  filterKeyboardEvent(filteredFunction) {
    return (e) => {
      let newInput;

      switch (e.keyCode) {
        case 38:
          newInput = 'UP';
          e.preventDefault();
          break;

        case 40:
          newInput = 'DOWN';
          e.preventDefault();
          break;

        default:
          newInput = '';
      }

      return filteredFunction(newInput);
    };
  }

  render() {
    const { onMove, onEnter, ...props } = this.props;

    return (
      <Wrapper onSubmit={this.handleSubmit(onEnter)}>
        <Input
          innerRef={(node) => { this.inputNode = node; }}
          onKeyUp={this.filterKeyboardEvent(onMove)}
          {...props}
        />
        <SearchIcon type="search" size="medium" />
      </Wrapper>
    );
  }
}

SearchInput.propTypes = {
  onMove: PropTypes.func,
  onEnter: PropTypes.func,
};

export default SearchInput;
