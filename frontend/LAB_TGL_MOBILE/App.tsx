import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import store from '@store/index';
import Theme from '@theme/index';
import Routes from '@routes/routes';
import Loading from '@components/UI/Loading';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Theme>
          <StatusBar/>
          <Loading/>
          <Routes/>
        </Theme>
      </Provider>
    </React.Fragment>
  );
}
