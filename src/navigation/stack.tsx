import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Resturants from '../screen/restaurants';
import Restaurant from '../screen/restaurants/restaurant';

export type RootStackParams = {
  Restaurants: undefined;
  Restaurant: {
    id: string;
  };
};
const Stack = createNativeStackNavigator<RootStackParams>();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Restaurants"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Restaurants" component={Resturants} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
    </Stack.Navigator>
  );
}
