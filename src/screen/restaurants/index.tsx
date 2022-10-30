import {View, Text, Pressable, SafeAreaView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Resturant = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <SafeAreaView>
      <View style={{}}>
        <Pressable
          onPress={() => navigation.navigate('Restaurant', {id: 'Idris'})}>
          <View style={{padding: 20, backgroundColor: 'grey'}}>
            <Text>Resturant Screen !!!</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Resturant;
