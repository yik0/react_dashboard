import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { Preloader2 } from './components';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
          {/* <Preloader2 /> */}
          <App />
          {/* <AccountBox /> */}
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
