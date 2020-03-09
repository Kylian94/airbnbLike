import LoggedOut from '../screens/LoggedOut';
import Login from '../screens/Login';
//import ExploreContainer from '../screens/ExploreContainer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoggedInNavigator from './LoggedInNavigator';

// createStackNavigator() crée l'arbre de navigation
// Le premier écran déclaré est l'écran de démarrage par défaut de
//l'application (ici LoginScreen)
const MainStackNavigator = createStackNavigator(
    {
        LoggedOut: { screen: LoggedOut },
        Login: { screen: Login },
        ExploreContainer: { screen: LoggedInNavigator },

    },
    {
        headerMode: 'screen', // Ce paramètre spécifie qu'on va définir des
        //      "header"(en- tête) pour chaque écran
        // grâce à la variable "navigationOptions"
    },
);
export default createAppContainer(MainStackNavigator);