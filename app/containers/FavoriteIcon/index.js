import React, { PropTypes, Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import {
  addFavorite,
  unfavorite,
} from 'containers/App/actions';
import { selectFavorites } from 'containers/App/selectors';

import SVG from 'components/SVG';
import { darkGrey, red } from 'styles/colors';

class FavoriteIcon extends Component {
  state = { isMouseOver: false }

  getType() {
    const { isMouseOver } = this.state;

    if (isMouseOver) {
      return 'star-half';
    } else if (this.favorited) {
      return 'star-full';
    }

    return 'star-empty';
  }

  favorited = false

  handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { favorites, stockName, setFavorite } = this.props;

    if (favorites) {
      setFavorite(stockName, this.favorited);
    }
  }

  changeHover = (isMouseOver) => this.setState({ isMouseOver })

  render() {
    const { stockName, favorites, ...others } = this.props;
    if (favorites) {
      this.favorited = favorites.indexOf(stockName) !== -1;
    }

    return (
      <SVG
        style={{
          margin: '0 10px 3px 0',
          color: this.favorited ? red : darkGrey,
          fill: red,
        }}
        type={this.getType()}
        size="small"
        onClick={this.handleClick}

        // activating the onhover
        onMouseEnter={() => this.changeHover(true)}
        onFocus={() => this.changeHover(true)}

        // activating the onleave
        onMouseLeave={() => this.changeHover(false)}
        onBlur={() => this.changeHover(false)}

        {...others}
      />
    );
  }
}

FavoriteIcon.propTypes = {
  stockName: PropTypes.string,
  favorites: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  setFavorite: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  setFavorite: (stockName, isFavorite) =>
    dispatch(isFavorite
      ? unfavorite(stockName)
      : addFavorite(stockName)),
});
const mapStateToProps = createStructuredSelector({
  favorites: selectFavorites(),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteIcon);