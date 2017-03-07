import styled from 'styled-components';
import { red, white, black, grey, lightGrey } from 'styles/colors';
import { textMedium, font } from 'styles/text';
import { inputFocus } from 'styles/mixins';

const secondaryHover = `
transition: 0.25s ease;
&:hover {
  background-color: ${grey};
}
&:focus {
  background-color: ${grey};
}
`;
const secondaryBorder = `1px solid ${grey}`;

const Wrapper = styled.button`
  color: ${(props) => (props.primary ? white : black)};
  background-color: ${(props) => (props.primary ? red : lightGrey)};
  border: ${(props) => (props.primary ? 'none' : secondaryBorder)};
  border-radius: 2px;

  font-family: ${font};
  font-size: ${textMedium};
  outline: none;
  height: 40px;
  width: 300px;
  margin-bottom: 20px;
  position: relative;

  ${inputFocus}
`;

export default Wrapper;
