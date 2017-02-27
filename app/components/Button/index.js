import React, { PropTypes, PureComponent } from 'react';
import { isString } from 'lodash';

import Wrapper from './elements/Wrapper';
import ButtonLink from './elements/ButtonLink';

class Button extends PureComponent {
  createLoading() {
    return;
  }

  createLink(to, color, props) {
    return (
      <Wrapper color={color}>
        <ButtonLink {...props} to={to} />
      </Wrapper>
    );
  }

  defaultButton(color, props) {
    return <Wrapper color={color} {...props} />;
  }

  render() {
    const { to, loading, color, ...props } = this.props;

    if (loading) {
      return this.createLoading();
    } else if (isString(to)) {
      return this.createLink(to, color, props);
    }

    return this.defaultButton(color, props);
  }
}

Button.propTypes = {
  to: PropTypes.string,
  loading: PropTypes.bool,
  color: PropTypes.string,
};

export default Button;
