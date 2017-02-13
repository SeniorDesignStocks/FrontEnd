import styled from 'styled-components';
import { red, white } from '../../styles/colors';
import { textMedium, font } from '../../styles/text';

const Button = styled.button`
  border: 2px solid ${red};
  color: ${red};
  font-family: ${font};
  font-size: ${textMedium};
  outline: none;

  height: 40px;
  width: 300px;
  border-radius: 2px;

  &:hover {
    background-color: ${red};
    color: ${white};
  }
`;

export default Button;
