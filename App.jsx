import React from 'react';

import {  
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function HomeScreen() {
  return (
    <View className='flex flex-1 bg-red-300'>
      <Text>Home Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();


function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
