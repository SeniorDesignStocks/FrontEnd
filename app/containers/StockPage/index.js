/*
 *
 * StockPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectStockPage from './selectors';

import Wrapper from './elements/Wrapper';

export class StockPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Helmet
          title="StockPage"
          meta={[
            { name: 'description', content: 'Description of StockPage' },
          ]}
        />
        
      </Wrapper>
    );
  }
}

const mapStateToProps = selectStockPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StockPage);
