import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootTabParams} from '../../navigation/tab';

const Explore = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootTabParams>>();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Explore Page</Text>
      <Button
        title="Go To Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default Explore;
