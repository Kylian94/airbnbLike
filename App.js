// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import ForgetPassword from './src/screens/ForgetPassword'
// import LoggedOut from './src/screens/LoggedOut';
// import Login from './src/screens/Login';
// import ExploreContainer from './src/screens/ExploreContainer'


// const MainStackNavigator = createStackNavigator({

//   LoggedOut: { screen: LoggedOut },
//   Login: { screen: Login },
//   ForgetPassword: { screen: ForgetPassword },
//   ExploreContainer: { screen: ExploreContainer },

// },
//   {
//     headerMode: 'screen'
//   }
// )

// const App = createAppContainer(MainStackNavigator);



// export default App;

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import React, { Component } from 'react'
import Navigation from "./src/navigation"
import reducers from "./src/reducers"
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducers, composeWithDevTools())
class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Navigation />
      </Provider>
    );
  }
}

export default App;
