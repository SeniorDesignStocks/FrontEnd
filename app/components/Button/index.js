import styled from 'styled-components';
import { red, white } from 'styles/colors';
import { textMedium, font } from 'styles/text';

const Button = styled.button`
  color: ${white};
  background-color: ${red};
  border-radius: 2px;

  font-family: ${font};
  font-size: ${textMedium};
  outline: none;
  height: 40px;
  width: 300px;
`;

export default Button;
