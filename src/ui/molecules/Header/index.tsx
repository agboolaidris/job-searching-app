import {View, Pressable} from 'react-native';
import React from 'react';
import BackIcon from '../../../icons/back';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/stack';
import DrawerMenuIcon from '../../../icons/menu';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RootDrawerParams} from '../../../navigation/drawer';

const Header = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={{paddingBottom: 10}}>
      <Pressable onPress={() => navigation.goBack()} style={{width: 50}}>
        <BackIcon size={20} color="grey" />
      </Pressable>
    </View>
  );
};

export default Header;

export const TopHeader = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParams>>();
  return (
    <View style={{padding: 10, paddingTop: 0}}>
      <Pressable onPress={() => navigation.openDrawer()} style={{width: 50}}>
        <DrawerMenuIcon size={30} color="black" />
      </Pressable>
    </View>
  );
};
