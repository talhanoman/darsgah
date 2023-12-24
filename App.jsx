import React from 'react';

import {  
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Typography } from './src/styles/Typography';
function HomeScreen() {
  return (
    <View className='flex'>
      <Text style={Typography.HeadingLargeBold}>Home Screen</Text>      
    </View>
  );
}
const Stack = createNativeStackNavigator();


function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
