import React from 'react';
import ReactSVG from 'react-svg';

import iconArrowUp from 'assets/svg/arrow-up.svg';
import iconArrowDown from 'assets/svg/arrow-down.svg';
import iconStarFull from 'assets/svg/star-full.svg';
import iconStarEmpty from 'assets/svg/star-empty.svg';

const getPath = (type) => {
  switch (type) {
    case 'arrow-up': return iconArrowUp;
    case 'arrow-down': return iconArrowDown;
    case 'star-full': return iconStarFull;
    case 'star-empty': return iconStarEmpty;

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
