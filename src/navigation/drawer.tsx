import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigatorScreenParams} from '@react-navigation/native';
import ExploreIcon from '../icons/explore';
import ProfileIcon from '../icons/profile';
import RestaurantIcon from '../icons/rectaurant';
import Explore from '../screen/explore';
import Profile from '../screen/profile';
import StackNavigation, {RootStackParams} from './stack';

export type RootDrawerParams = {
  RestaurantStack: NavigatorScreenParams<RootStackParams>;
  Explores: undefined;
  Profile: undefined;
};
const Drawer = createDrawerNavigator<RootDrawerParams>();
function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: 'white',
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: 'white',
        drawerStyle: {
          backgroundColor: 'black',
        },
      }}>
      <Drawer.Screen
        name="Explores"
        component={Explore}
        options={{
          drawerIcon: props => <ExploreIcon {...props} />,
          drawerLabel: 'Explore',
        }}
      />
      <Drawer.Screen
        name="RestaurantStack"
        component={StackNavigation}
        options={{
          drawerIcon: props => <RestaurantIcon {...props} />,
          drawerLabel: 'Restaurant',
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: props => <ProfileIcon {...props} />,
          drawerLabel: 'Profile',
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
