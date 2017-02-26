import { red } from './colors';

export const listHighlight = (color, type) => {
  if (type === 'hover') {
    return `
      position: relative;
      &:before {
        transition: 0.25s ease;
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        right: 0;
        background-color: ${color};
        height: 0;
      }

      &:hover {
        color: ${color};
        &:before {
          height: 3px;
        }
      }
    `;
  }

  return `
  color: ${color};
  position: relative;
  &:before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${color};
    height: 3px;
  }

  &:hover {
    color: ${color};
    &:before {
      height: 3px;
      color: ${color};
    }
  }
  `;
};

export const inputFocus = () => `
  transition: 0.25s ease;
  &:hover {
    box-shadow: 0 1px 4px rgba(0,0,0,0.3);
  }
  &:focus {
    border-color: ${red};
    box-shadow: 0 1px 4px rgba(0,0,0,0.3);
  }
`;
