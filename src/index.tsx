import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { GlobalContextProvider } from './contexts/globalContext';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <Routes />
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);