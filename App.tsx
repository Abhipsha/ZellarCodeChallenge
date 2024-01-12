/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppNavigation} from './src/navigation/AppNavigation';
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}

export default App;
