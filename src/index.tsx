import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'App';
import GlobalStyles from 'globalStyles';
import { Spinner } from 'components';

import store from 'store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
