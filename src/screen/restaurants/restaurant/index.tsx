import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/stack';
import Header from '../../../ui/molecules/Header';

type Props = NativeStackScreenProps<RootStackParams, 'Restaurant'>;

const Restaurant: React.FC<Props> = ({route}) => {
  return (
    <SafeAreaView style={{marginHorizontal: 10}}>
      <Header />
      <Text>Restaurant {route.params.id}</Text>
    </SafeAreaView>
  );
};

export default Restaurant;
