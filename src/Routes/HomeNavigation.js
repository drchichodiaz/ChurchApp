import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../Screens/HomeScreen';
import IglesiaScreen from '../Screens/IglesiaScreen';
import DoctrinaScreen from '../Screens/DoctrinaScreen';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  
    return (
        <Stack.Navigator>
        <Stack.Screen
           name="HomeScreen"
           component={HomeScreen}
           options={{
               title:"Inicio",
               headerStyle: {
                backgroundColor: '#DBE2ED', // Cambia el color de fondo de la barra de título
              },
           }}
        />
        <Stack.Screen 
                name="IglesiaScreen" 
                component={IglesiaScreen} 
                options={{
                  title:"¿Quienes Somos?",
                  headerStyle: {
                     backgroundColor: '#DBE2ED', // Cambia el color de fondo de la barra de título
                  },
                      }}
        />
        <Stack.Screen 
                name="DoctrinaScreen" 
                component={DoctrinaScreen} 
                options={{
                  title:"¿En que creemos?",
                  headerStyle: {
                    backgroundColor: '#DBE2ED', // Cambia el color de fondo de la barra de título
                  },
                      }}
        />
       </Stack.Navigator>
    )
  
}
