import React from 'react';
import Theme from '@theme/index';
import Routes from '@routes/routes';
import { Provider } from 'react-redux';
import store from '@store/index';

export default function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Theme>
          <Routes/>
        </Theme>
      </Provider>
    </React.Fragment>
  );
}
