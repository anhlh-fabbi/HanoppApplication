/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FirstOpenAppScreen from './src/app/screens/FirstOpenAppScreen';

AppRegistry.registerComponent(appName, () => FirstOpenAppScreen);
