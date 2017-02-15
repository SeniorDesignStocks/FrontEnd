import styled from 'styled-components';
import { white, grey, black } from '../../../styles/colors';


const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 340px;
  padding: 20px;
  border-radius: 2px;
  color: ${black};

  background-color: ${white};
  border: 1px solid ${grey};
`;

export default Wrapper;
