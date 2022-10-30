import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation';

type Props = NativeStackScreenProps<RootStackParams, 'Restaurant'>;

const Restaurant: React.FC<Props> = ({route}) => {
  return (
    <View>
      <Text>Restaurant {route.params.id}</Text>
    </View>
  );
};

export default Restaurant;
