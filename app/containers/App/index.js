import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { selectUserData } from './selectors';
import { createStructuredSelector } from 'reselect';
import { shouldOverlay } from 'routes';

import Navbar from 'components/Navbar';
import SearchBar from 'containers/SearchBar';
import { lightGrey, black } from 'styles/colors';
import { font } from 'styles/text';

const Wrapper = styled.div`
  background-color: ${lightGrey};
  min-height: 100vh;
  font-family: ${font};
  color: ${black};
`;

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    userData: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
    ]),
    location: PropTypes.object,
  };

  componentWillReceiveProps(nextProps) {
    const newPathName = nextProps.location.pathname;
    const curPathName = this.props.location.pathname;

    if (!shouldOverlay(curPathName) && shouldOverlay(newPathName)) {
      this.previousChildren = {
        oldPathName: curPathName,
        children: this.props.children,
      };
    } else if (!shouldOverlay(newPathName)) {
      this.previousChildren = {
        oldPathName: '',
        children: false,
      };
    }
  }
  previousChildren = {
    oldPathName: '',
    children: false,
  }

  render() {
    const { userData, location } = this.props;
    const { children, oldPathName } = this.previousChildren;
    const { pathname } = location;
    const isOverlay = Boolean(children);

    return (
      <Wrapper style={isOverlay ? { overflow: 'hidden', height: '100vh' } : {}}>
        <Helmet
          titleTemplate="%s - Stocks Simplified"
          defaultTitle="Stocks Simplified"
          meta={[
            { name: 'description', content: 'Basically the best website ever made' },
          ]}
        />
        <SearchBar />
        <Navbar pathName={pathname} userData={userData} />

        {React.Children.map(
          this.props.children,
          (child) => React.cloneElement(child, {
            isOverlay,
            oldPathName,
          }))}

        {children
          ? React.Children.toArray(children)
          : '' }
      </Wrapper>
    );
  }
}

export default connect(createStructuredSelector({
  userData: selectUserData(),
}))(App);
