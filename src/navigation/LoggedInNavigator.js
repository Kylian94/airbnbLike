import { createBottomTabNavigator } from 'react-navigation-tabs';
import ExploreContainer from '../screens/ExploreContainer';
import SavedContainer from '../screens/SavedContainer';
import TripsContainer from '../screens/TripsContainer';
import InboxContainer from '../screens/InboxContainer';
import ProfileContainer from '../screens/ProfileContainer';
export default createBottomTabNavigator(
    {
        Explore: {
            screen: ExploreContainer,
            navigationOptions: {
                // A compléter
            }
        },
        Saved: {
            screen: SavedContainer,
        },
        Trips: {
            screen: TripsContainer,
        },
        Inbox: {
            screen: InboxContainer,
        },
        Profile: {
            screen: ProfileContainer,
        },
    }
);