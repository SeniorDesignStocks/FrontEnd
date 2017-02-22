import React, { PropTypes } from 'react';

import SVG from 'components/SVG';
import { darkGrey, red } from 'styles/colors';

const FavoriteIcon = ({ favorited }) => (
  <SVG
    style={{
      margin: '0 10px 3px 0',
      color: favorited ? red : darkGrey,
    }}
    type={favorited ? 'star-full' : 'star-empty'}
    size="small"
  />
);

FavoriteIcon.propTypes = {
  favorited: PropTypes.bool,
};

export default FavoriteIcon;
