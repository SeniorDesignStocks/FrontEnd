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
import DateFilterForm from 'components/DateFilterForm';
import SectionTitle from './elements/SectionTitle';
import NewsList from './elements/NewsList';
import NewsElement from './elements/NewsElement';
import NewsLink from './elements/NewsLink';
import LoadingBar from 'components/LoadingBar';
import H2 from 'components/H2';
import P from 'components/P';

import {
  loadPlotData,
  loadPredictions,
  loadNews,
} from './actions';

export class StockPage extends Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { stockName } = this.props.params;
    const { plotData, news, predictions } = this.props;
    const { getPlotData, getNews, getPredictions } = this.props;
    const load = (data, getter) => data || getter(stockName);

    load(plotData, getPlotData);
    load(predictions, getPredictions);
    load(news, getNews);
  }

  render() {
    const { stockName } = this.props.params;
    const { plotData, news, predictions } = this.props;

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
          <DateFilterForm />
          { plotData
            ? <StockGraph data={plotData} />
            : <LoadingBar /> }
          <SectionTitle>Predicitons</SectionTitle>
          {predictions ? '' : ''}

          <SectionTitle>News</SectionTitle>
          { news
            ? <NewsList>
              {news.map(({ title, link, source, disc }, key) => (
                <NewsElement key={key}>
                  <H2>{title}<NewsLink href={link} >{source}</NewsLink></H2>
                  <P>{disc}</P>
                </NewsElement>
              ))}</NewsList>
            : <LoadingBar /> }
        </Panel>
      </Wrapper>
    );
  }
}

const { shape, string, oneOfType, object, array, bool, func } = PropTypes;
StockPage.propTypes = {
  params: shape({
    stockName: string,
  }),
  news: oneOfType([array, bool]),
  predictions: oneOfType([object, bool]),
  plotData: oneOfType([array, bool]),
  getPlotData: func,
  getPredictions: func,
  getNews: func,
};

const mapStateToProps = selectStockPage();

function mapDispatchToProps(dispatch) {
  return {
    getPlotData: (stockName) => dispatch(loadPlotData(stockName)),
    getPredictions: (stockName) => dispatch(loadPredictions(stockName)),
    getNews: (stockName) => dispatch(loadNews(stockName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StockPage);
