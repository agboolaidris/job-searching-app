import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Resturants from '../screen/restaurants';
import Explore from '../screen/explore';
import Profile from '../screen/profile';
import Restaurant from '../screen/restaurants/restaurant';

export type RootStackParams = {
  Restaurants;
  Explores;
  Profile;
  Restaurant: {
    id: string;
  };
};
const Stack = createNativeStackNavigator<RootStackParams>();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Explores">
        <Stack.Screen name="Explores" component={Explore} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Restaurants" component={Resturants} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
