import React from 'react';
import { ToastContainer } from 'react-toastify';

import { WeatherProvider } from './contexts/Weather';
import { ThemeProvider } from './contexts/Theme';

import Main from './pages/Main';
import GlobalStyles from './styles/global';

function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <>
          <Main />
          <GlobalStyles />
          <ToastContainer autoClose={3000} />
        </>
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
