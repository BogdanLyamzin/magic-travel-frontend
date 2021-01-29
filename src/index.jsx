import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './service-worker';
import reportWebVitals from './report-web-vitals';
import { App } from './app/componets/App';
import store from './app/store/store';

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
reportWebVitals();
