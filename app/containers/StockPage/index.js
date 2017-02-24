/*
 *
 * StockPage
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectStockPage from './selectors';

import Wrapper from './elements/Wrapper';
import Panel from './elements/Panel';
import TitleSection from './elements/TitleSection';
import TitleElement from './elements/TitleElement';
import TitleSectionWhiteSpace from './elements/TitleSectionWhiteSpace';
import FavoriteIcon from 'components/FavoriteIcon';
import StockGraph from 'components/StockGraph';
import DateFilter from './elements/DateFilter';
import SectionTitle from './elements/SectionTitle';
import NewsList from './elements/NewsList';
import NewsElement from './elements/NewsElement';
import NewsLink from './elements/NewsLink';
import H2 from 'components/H2';
import P from 'components/P';

export class StockPage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { stockName } = this.props.params;
    const tempStockData = [
      { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
      { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
      { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
      { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
      { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
      { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
    ];

    return (
      <Wrapper>
        <Helmet
          title="StockPage"
          meta={[
            { name: 'description', content: 'Description of StockPage' },
          ]}
        />
        <Panel>
          <TitleSection>
            <FavoriteIcon favorited />
            <TitleElement>{stockName}</TitleElement>
            <TitleSectionWhiteSpace></TitleSectionWhiteSpace>
            <TitleElement>300</TitleElement>
          </TitleSection>
          <DateFilter>
            <input type="date" />
            <input type="date" />
          </DateFilter>
          <StockGraph data={tempStockData} />
          <SectionTitle>Predicitons</SectionTitle>
          <SectionTitle>News</SectionTitle>
          <NewsList>
            <NewsElement>
              <H2>Test <NewsLink to="https://www.wsj.com/">The Wall Street Journal</NewsLink></H2>
              <P>Welp, this is a thing.</P>
            </NewsElement>
            <NewsElement>
              <H2>Test <NewsLink to="https://www.wsj.com/">The Wall Street Journal</NewsLink></H2>
              <P>Welp, this is a thing.</P>
            </NewsElement>
            <NewsElement>
              <H2>Test <NewsLink to="https://www.wsj.com/">The Wall Street Journal</NewsLink></H2>
              <P>Welp, this is a thing.</P>
            </NewsElement>
            <NewsElement>
              <H2>Test <NewsLink to="https://www.wsj.com/">The Wall Street Journal</NewsLink></H2>
              <P>Welp, this is a thing.</P>
            </NewsElement>
            <NewsElement>
              <H2>Test <NewsLink to="https://www.wsj.com/">The Wall Street Journal</NewsLink></H2>
              <P>Welp, this is a thing.</P>
            </NewsElement>
          </NewsList>
        </Panel>
      </Wrapper>
    );
  }
}

StockPage.propTypes = {
  params: PropTypes.shape({
    stockName: PropTypes.string,
  }),
};

const mapStateToProps = selectStockPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StockPage);
