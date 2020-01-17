import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ForgetPassword from './src/screens/ForgetPassword'
import LoggedOut from './src/screens/LoggedOut';
import Login from './src/screens/Login';
import ExploreContainer from './src/screens/ExploreContainer'


const MainStackNavigator = createStackNavigator({

  LoggedOut: { screen: LoggedOut },
  Login: { screen: Login },
  ForgetPassword: { screen: ForgetPassword },
  ExploreContainer: { screen: ExploreContainer },

},
  {
    headerMode: 'screen'
  }
)

const App = createAppContainer(MainStackNavigator);



export default App;
