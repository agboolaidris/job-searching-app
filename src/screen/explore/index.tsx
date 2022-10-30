import {View, Text, Button, SafeAreaView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootTabParams} from '../../navigation/tab';
import {TopHeader} from '../../ui/molecules/Header';

const Explore = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootTabParams>>();
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopHeader />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Explore Page</Text>
        <Button
          title="Go To Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Explore;
