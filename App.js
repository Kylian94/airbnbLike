import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';



import styles from './src/style/Style';
import LoggedOut from './src/screens/LoggedOut';
import Login from './src/screens/Login'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ForgetPassword from './src/screens/ForgetPassword'


const MainStackNavigator = createStackNavigator({

  LoggedOut: { screen: LoggedOut },
  Login: { screen: Login },
  ForgetPassword: { screen: ForgetPassword },

},
  {
    headerMode: 'screen'
  }
)

const App = createAppContainer(MainStackNavigator);



export default App;
