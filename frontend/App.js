import { StatusBar as Status } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RestroScreen from './source/functions/restro/screens/restro-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function App() {

  // const Stack = createNativeStackNavigator();
  const tab = createBottomTabNavigator(); 
  return (
    <>
 <NavigationContainer>
      <tab.Navigator 
       screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Restaurants') {
            iconName ="md-restaurant";
          } else if (route.name === 'settings') {
            iconName = "settings";
          }else if(route.name==="Map"){iconName="md-map";}

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      
      
      
      >
        <tab.Screen name="Restaurants" component={RestroScreen} />
        <tab.Screen name="Map" component={RestroScreen} />
        <tab.Screen name="settings" component={RestroScreen} />
      </tab.Navigator>
    </NavigationContainer>
    
      <Status style="dark" />
    </>
  );
}

