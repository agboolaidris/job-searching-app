import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Resturant = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={{padding: 10}}>
      <Pressable
        onPress={() => navigation.navigate('Restaurant', {id: 'Idris'})}>
        <View style={{padding: 20, backgroundColor: 'grey'}}>
          <Text>Resturant Screen !!!</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Resturant;
