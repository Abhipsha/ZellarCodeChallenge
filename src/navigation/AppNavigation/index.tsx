import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../screen/index';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../types';
const Stack = createStackNavigator<RootStackParamList>();
export const AppNavigation = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};
