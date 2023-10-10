import React  from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import BibleScreen from '../Screens/BibleScreen';
import LibroScreen from '../Screens/LibroScreen';
import CapituloViewScreen from '../Screens/CapituloViewScreen';
const Stack = createStackNavigator();



export default function BibleNavigation(){
 
    return (
        <Stack.Navigator>
        <Stack.Screen
           name="BibleScreen"
           component={BibleScreen}
           options={{
               title:"Biblia",
               headerStyle: {
                backgroundColor: '#DBE2ED', // Cambia el color de fondo de la barra de título
              },
           }}
        />
        <Stack.Screen 
                name="CapitulosView" 
                component={LibroScreen} 
                options={{
                  title:"Capítulos",
                  headerStyle: {
                    backgroundColor: '#DBE2ED', // Cambia el color de fondo de la barra de título
                  },
                      }}
        />
        <Stack.Screen 
                name="ViewCap" 
                component={CapituloViewScreen} 
                options={{
                  title:"Capítulo",
                      }}
        />
       </Stack.Navigator>
    )
  
}

