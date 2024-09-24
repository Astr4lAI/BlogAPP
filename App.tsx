import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import React from 'react';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName = "Home"
          screenOptions = {{
            headerStyle: {
              backgroundColor: "#ff6210", 
            },
            headerTintColor: "#FFF", 
            headerTitleStyle: {
              fontWeight: "bold",
            },
            drawerInactiveTintColor: "#FFF", 
            drawerActiveTintColor: "#e91e63", 
            drawerActiveBackgroundColor: "#333", 
            drawerContentContainerStyle: {
              backgroundColor: "#333",
              height: "100%",
            },
          }}>
          <Drawer.Screen name = "Home" component = {Home} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}
