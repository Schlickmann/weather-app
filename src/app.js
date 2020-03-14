import React from 'react'

import loadingDark from './assets/weather-dark.svg';
import loadingLight from './assets/weather-light.svg';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <h1>Hi Ju</h1>
      <img src={loadingDark} alt=""/>
      <img src={loadingLight} alt=""/>
      <GlobalStyles />
    </>
  )
}

export default App;