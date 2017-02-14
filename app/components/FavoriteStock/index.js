/**
*
* FavoriteStock
*
*/

import React from 'react';

import Wrapper from './elements/Wrapper';
import TitleBar from './elements/TitleBar';
import LoadingBar from './elements/LoadingBar';

function FavoriteStock({ info }) {
  const { name, favorited, stockData, plotData } = info;

  return (
    <Wrapper>
      <TitleBar>{name}</TitleBar>
      { plotData === false
        ? <LoadingBar>Loading</LoadingBar>
        : <div>good</div>
      }
    </Wrapper>
  );
}

export default FavoriteStock;
