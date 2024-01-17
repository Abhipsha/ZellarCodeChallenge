import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Users} from '../../screen/index';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../types';
const Stack = createStackNavigator<RootStackParamList>();
export const AppNavigation = () => {
  return (
    <SafeAreaProvider style={{backgroundColor: '#fff', flex: 1}}>
      <Stack.Navigator>
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};
