import styled from 'styled-components';

const diameter = '50px';
const Circle = styled.div`
  height: ${diameter};
  width: ${diameter};
  line-height: ${diameter};
  text-align: center;

  color: white;
  background-color: #FF6B6B;
  border-radius: 50%;
  font-family: 'Rubik';
  font-size: 28px;
  text-shadow: 2px 2px 5px rgba(0,0,0,0.2);
  user-select: none;
  margin: auto 10px auto 0;
`;

export default Circle;
