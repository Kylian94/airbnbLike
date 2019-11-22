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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styles from './src/style/Style';
import LoggedOut from './src/screens/LoggedOut';



const App: () => React$Node = () => {

  return (
    <LoggedOut />
  );
};



export default App;
