import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, requireNativeComponent, Button } from 'react-native';
import { LinearGradient } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Data from './Data';

import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import Blood from './Blood';
import City from './City';


//import MultipleCheckBox from './MultipleCheckBox';
import { ReactComponentElement } from 'react';


//<Stack.Screen name = "MultipleCheckBox" component={MultipleCheckBox} />

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>

        
        <Stack.Screen name = "LoginScreen" component={LoginScreen} />
        <Stack.Screen name = "Home" component={HomeScreen} />
        <Stack.Screen name = "Blood" component={Blood} />
        <Stack.Screen name = "City" component={City} />
        <Stack.Screen name = "Data" component={Data} />
        

      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

