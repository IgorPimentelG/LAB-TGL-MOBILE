import 'react-native-gesture-handler';
import React from 'react';
import store from '@store/index';
import Theme from '@theme/index';
import Routes from '@routes/routes';
import { Provider } from 'react-redux';
import Loading from '@components/UI/Loading';

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
