import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/navigation';

const App = () => {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return <Navigation />;
};

export default App;
