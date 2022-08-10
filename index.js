import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './src/frontend/App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';
import AppLovinMAX from 'react-native-applovin-max';

AppLovinMAX.initialize(
  'hashString',
  configuration => {},
);

PushNotification.configure({
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },
});

AppRegistry.registerComponent(appName, () => App);
