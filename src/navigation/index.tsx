import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './tab';
import DrawerNavigation from './drawer';

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabNavigation />
      {/* <DrawerNavigation /> */}
    </NavigationContainer>
  );
}
