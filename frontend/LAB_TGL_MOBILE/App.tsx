import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import reactotron from './src/config/reactotron';
import React, { useEffect } from 'react';
import store from '@store/index';
import Theme from '@theme/index';
import Routes from '@routes/routes';
import Loading from '@components/UI/Loading';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';


export default function App() {
  
  useEffect(() => {
      if(__DEV__) {
        reactotron.connect();
      }  
  
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

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
