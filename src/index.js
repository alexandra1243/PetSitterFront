import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { Provider } from 'react-redux';

import './index.css';
import axios from 'axios';
import store from 'store';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher: (resource, init) => axios.get(resource, init).then(res => res.data) }}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root')
);
