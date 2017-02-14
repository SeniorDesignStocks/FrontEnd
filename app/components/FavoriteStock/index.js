/**
*
* FavoriteStock
*
*/

import React from 'react';

import Wrapper from './elements/Wrapper';
import TitleBar from './elements/TitleBar';
import LoadingBar from './elements/LoadingBar';
import LoadingElement from './elements/LoadingElement';
import StockName from './elements/StockName';
import StockValue from './elements/StockValue';

function FavoriteStock({ info }) {
  const { name, favorited, stockData, plotData } = info;

  return (
    <Wrapper>
      <TitleBar>
        <StockName>{name}</StockName>
        <StockValue up={stockData.up} value={stockData.value} />
      </TitleBar>
      { plotData === false
        ? <LoadingBar><LoadingElement /></LoadingBar>
        : <div>good</div>
      }
    </Wrapper>
  );
}

export default FavoriteStock;
