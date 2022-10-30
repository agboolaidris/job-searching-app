import {View, Pressable} from 'react-native';
import React from 'react';
import BackIcon from '../../../icons/back';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/stack';

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
