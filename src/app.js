import React from 'react';
import { ToastContainer } from 'react-toastify';

import { WeatherProvider } from './contexts/Weather';

import Main from './pages/Main';
import GlobalStyles from './styles/global';

function App() {
  return (
    <WeatherProvider>
      <>
        <Main />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </>
    </WeatherProvider>
  );
}

export default App;
