import styled from 'styled-components';

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  background: hsla(0,0%,97%,.8);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 100px 0;
  pointer-events: all;
`;

export default Overlay;
