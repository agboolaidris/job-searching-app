import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation';

const Explore = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View>
      <Text>Explore Page</Text>
      <Button
        title="Go To Restaurant"
        onPress={() => navigation.navigate('Restaurants')}
      />
    </View>
  );
};

export default Explore;
