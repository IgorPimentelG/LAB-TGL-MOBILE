import 'react-native-gesture-handler';
import React from 'react';
import store from '@store/index';
import Theme from '@theme/index';
import Routes from '@routes/routes';
import { Provider } from 'react-redux';

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
