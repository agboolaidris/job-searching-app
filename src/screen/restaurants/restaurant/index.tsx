import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/stack';
import Header from '../../../ui/molecules/Header';

type Props = NativeStackScreenProps<RootStackParams, 'Restaurant'>;

const Restaurant: React.FC<Props> = ({route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Restaurant {route.params.id}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Restaurant;
