/*
 *
 * StockPage
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectStockPage from './selectors';

import Wrapper from 'components/defaultWrapper';
import Overlay from 'components/Overlay';
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
  requestPlotData,
  requestPredictions,
  requestNews,
  requestStockData,
} from './actions';

export class StockPage extends Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { stockName } = this.props.params;
    const { plotData, news, predictions, stockData } = this.props;
    const { getPlotData, getNews, getPredictions, getStockData } = this.props;
    const load = (data, getter) => data || getter(stockName);

    load(plotData, getPlotData);
    load(predictions, getPredictions);
    load(news, getNews);
    load(stockData, getStockData);
  }

  render() {
    const { stockName } = this.props.params;
    const { plotData, news, predictions, stockData, isOverlay, oldPathName } = this.props;
    const ElemWrapper = isOverlay ? Overlay : Wrapper;

    return (
      <ElemWrapper oldPathName={oldPathName} >
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
            <TitleElement>{stockData ? stockData.value : '~'}</TitleElement>
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
      </ElemWrapper>
    );
  }
}

const { shape, string, oneOfType, object, array, bool, func } = PropTypes;
StockPage.propTypes = {
  // stock name from route
  params: shape({
    stockName: string,
  }),
  isOverlay: bool,
  oldPathName: string,

  // data to be loaded
  news: oneOfType([array, bool]),
  predictions: oneOfType([object, bool]),
  plotData: oneOfType([array, bool]),
  stockData: oneOfType([object, bool]),

  // dispatchers
  getPlotData: func,
  getPredictions: func,
  getNews: func,
  getStockData: func,
};

const mapStateToProps = selectStockPage();

function mapDispatchToProps(dispatch) {
  return {
    getPlotData: (stockName) => dispatch(requestPlotData(stockName)),
    getPredictions: (stockName) => dispatch(requestPredictions(stockName)),
    getNews: (stockName) => dispatch(requestNews(stockName)),
    getStockData: (stockName) => dispatch(requestStockData(stockName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StockPage);
