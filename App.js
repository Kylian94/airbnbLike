// Variables non utilisées ne pas hésiter à les supprimer (lisibilité)
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




// (+1)
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ForgetPassword from './src/screens/ForgetPassword'
import LoggedOut from './src/screens/LoggedOut';
import Login from './src/screens/Login'

// (+1)
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
