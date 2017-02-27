import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';
import { textSmall, font } from '../../styles/text';
import { lightGrey, grey } from '../../styles/colors';
import { inputFocus } from 'styles/mixins';

const Input = styled.input`
  outline: none;
  border: 1px solid ${grey};
  background-color: ${lightGrey};
  padding: 0 10px;

  width: 300px;
  border-radius: 2px;
  height: 40px;

  font-family: ${font};
  font-size: ${textSmall};

  ${inputFocus}
`;

class TextInput extends Component {
  componentDidMount() {
    if (this.props.autoFocus) {
      this.node.focus();
    }
  }

  render() {
    const { input } = this.props;

    return (
      <Input {...input} innerRef={(node) => { this.node = node; }} type="text" />
    );
  }
}

TextInput.propTypes = {
  input: PropTypes.object,
  autoFocus: PropTypes.bool,
};

export default TextInput;
