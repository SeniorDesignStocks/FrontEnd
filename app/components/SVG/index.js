import React from 'react';
import ReactSVG from 'react-svg';

import arrowUp from '../../assets/svg/arrow-up.svg';
import arrowDown from '../../assets/svg/arrow-down.svg';

const getPath = (type) => {
  switch (type) {
    case 'arrow-up': return arrowUp;
    case 'arrow-down': return arrowDown;

    default:
      console.error(`unable to find SVG: ${type}`);
      return '';
  }
};

const getStyle = (size, style) => {
  let dimen = '';

  switch (size) {
    case 'small':
      dimen = '18px';
      break;
    case 'medium':
      dimen = '24px';
      break;
    case 'large':
      dimen = '32px';
      break;
    default:
  }

  return {
    height: `${dimen}`,
    width: `${dimen}`,
    ...style,
  };
};

const SVG = ({ type, size, style }) => (
  <ReactSVG
    path={getPath(type)}
    style={getStyle(size, style)}
  />
);

SVG.propTypes = {
  type: React.PropTypes.string,
  size: React.PropTypes.string,
  style: React.PropTypes.object,
};

export default SVG;
