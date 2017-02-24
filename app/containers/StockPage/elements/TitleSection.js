import styled from 'styled-components';
import { grey } from 'styles/colors';
import { textLarge } from 'styles/text';

const TitleSection = styled.div`
  border-bottom: 1px solid ${grey};
  display: flex;
  flex-direction: row;
  font-size: ${textLarge};
  height: 80px;
  line-height: 80px;
  padding: 0 10px;
`;

export default TitleSection;
