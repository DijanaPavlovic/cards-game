import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'App';
import Theme from 'theme';
import { Spinner } from 'components';
import store from 'store/store';
import ThemeProvider from './contexts/ThemeContext/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <Theme>
          <Suspense fallback={<Spinner />}>
            <App />
          </Suspense>
        </Theme>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
