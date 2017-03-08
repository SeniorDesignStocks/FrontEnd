import styled from 'styled-components';
import { red, lightBlue } from 'styles/colors';

const getColor = ({ up }) => {
  switch (up) {
    case true: return lightBlue;
    case false: return red;

    default:
      return 'inherit';
  }
};

const TitleElement = styled.div`
  color: ${(props) => getColor(props)};
`;

export default TitleElement;
