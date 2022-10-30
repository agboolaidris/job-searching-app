import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from '../screen/explore';
import Profile from '../screen/profile';
import {RootStackParams} from './stack';
import StackNavigation from './stack';
import {NavigatorScreenParams} from '@react-navigation/native';
import ExploreIcon from '../icons/explore';
import ProfileIcon from '../icons/profile';
import RestaurantIcon from '../icons/rectaurant';

export type RootTabParams = {
  RestaurantStack: NavigatorScreenParams<RootStackParams>;
  Explores: undefined;
  Profile: undefined;
};
const Tab = createBottomTabNavigator<RootTabParams>();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Explores"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#090',
        tabBarInactiveTintColor: 'red',
      }}>
      <Tab.Screen
        name="Explores"
        component={Explore}
        options={{
          tabBarIcon: props => <ExploreIcon {...props} />,
          tabBarLabel: 'Explore',
        }}
      />

      <Tab.Screen
        name="RestaurantStack"
        component={StackNavigation}
        options={{
          tabBarIcon: props => <RestaurantIcon {...props} />,
          tabBarLabel: 'Restaurant',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: props => <ProfileIcon {...props} />,
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}
