import React, { PropTypes, Component } from 'react';

import SVG from 'components/SVG';
import { darkGrey, red } from 'styles/colors';

class FavoriteIcon extends Component {
  state = { isMouseOver: false }

  getType() {
    const { favorited } = this.props;
    const { isMouseOver } = this.state;

    if (isMouseOver) {
      return 'star-half';
    } else if (favorited) {
      return 'star-full';
    }

    return 'star-empty';
  }

  changeHover = (isMouseOver) => this.setState({ isMouseOver })

  render() {
    const { favorited, ...others } = this.props;

    return (
      <SVG
        style={{
          margin: '0 10px 3px 0',
          color: favorited ? red : darkGrey,
          fill: red,
        }}
        type={this.getType()}
        size="small"
        onMouseEnter={() => this.changeHover(true)}
        onFocus={() => this.changeHover(true)}
        onMouseLeave={() => this.changeHover(false)}
        onBlur={() => this.changeHover(false)}
        {...others}
      />
    );
  }
}

FavoriteIcon.propTypes = {
  favorited: PropTypes.bool,
};

export default FavoriteIcon;
