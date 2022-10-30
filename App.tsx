import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/navigation';

const App = () => {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return <Navigation />;
};

export default App;
