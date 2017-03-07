import React, { PropTypes, PureComponent } from 'react';
import { isString } from 'lodash';

import Wrapper from './elements/Wrapper';
import ButtonLink from './elements/ButtonLink';

class Button extends PureComponent {
  createLoading() {
    return;
  }

  createLink(to, primary, props) {
    return (
      <Wrapper primary={primary}>
        <ButtonLink {...props} to={to} />
      </Wrapper>
    );
  }

  defaultButton(primary, props) {
    return <Wrapper primary={primary} {...props} />;
  }

  render() {
    const { to, loading, primary = true, ...props } = this.props;

    if (loading) {
      return this.createLoading();
    } else if (isString(to)) {
      return this.createLink(to, primary, props);
    }

    return this.defaultButton(primary, props);
  }
}

Button.propTypes = {
  to: PropTypes.string,
  loading: PropTypes.bool,
  primary: PropTypes.bool,
};

export default Button;
