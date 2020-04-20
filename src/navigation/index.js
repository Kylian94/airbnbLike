import LoggedOut from '../screens/LoggedOut';
import Login from '../screens/Login';
import AuthLoadingScreen from '../screens/AuthLoading';
//import ExploreContainer from '../screens/ExploreContainer';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import LoggedInNavigator from './LoggedInNavigator';


// createStackNavigator() crée l'arbre de navigation
// Le premier écran déclaré est l'écran de démarrage par défaut de
//l'application (ici LoginScreen)

const AuthNavigator = createStackNavigator({
    LoggedOut: { screen: LoggedOut },
    Login: { screen: Login }
})
const MainStackNavigator = createSwitchNavigator(
    {
        AuthLoading: { screen: AuthLoadingScreen },
        Auth: { screen: AuthNavigator },
        ExploreContainer: { screen: LoggedInNavigator },
    },
    {
        headerMode: 'screen',
    },
);

export default createAppContainer(MainStackNavigator);