import React, { PropTypes } from 'react';
import ReactSVG from 'react-svg';
import styled from 'styled-components';

import iconArrowUp from 'assets/svg/arrow-up.svg';
import iconArrowDown from 'assets/svg/arrow-down.svg';
import iconStarFull from 'assets/svg/star-full.svg';
import iconStarEmpty from 'assets/svg/star-empty.svg';
import iconStarHalf from 'assets/svg/star-half.svg';
import iconCross from 'assets/svg/cross.svg';
import iconSearch from 'assets/svg/search.svg';

const Wrapper = styled.div`

`;

const getPath = (type) => {
  switch (type) {
    case 'arrow-up': return iconArrowUp;
    case 'arrow-down': return iconArrowDown;
    case 'star-full': return iconStarFull;
    case 'star-empty': return iconStarEmpty;
    case 'star-half': return iconStarHalf;
    case 'cross': return iconCross;
    case 'search': return iconSearch;

    default:
      return '';
  }
};

const getStyle = (size, style = { margin: '0 0 3px 0' }) => {
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

const SVG = ({ type, size, style, ...others }) => (
  <Wrapper {...others}>
    <ReactSVG
      path={getPath(type)}
      style={getStyle(size, style)}
    />
  </Wrapper>
);

SVG.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
};

export default SVG;
