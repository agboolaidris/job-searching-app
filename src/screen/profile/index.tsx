import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootTabParams} from '../../navigation/tab';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TopHeader} from '../../ui/molecules/Header';

const Profile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootTabParams>>();
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopHeader />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Profile screen</Text>
        <Button
          title="Go to resturant"
          onPress={() => {
            navigation.navigate('RestaurantStack', {
              screen: 'Restaurant',
              params: {id: 'Hello world'},
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
