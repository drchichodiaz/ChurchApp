import React  from 'react' 
import { createStackNavigator } from '@react-navigation/stack' ;
import HimnoViewScreen from '../Screens/HimnoViewScreen';
import HimnosScreen from "../Screens/HimnosScreen";

const Stack = createStackNavigator();

export default function HimnosNavigation() {
  
    return (
       <Stack.Navigator>
         <Stack.Screen
            name="HimnosScreen"
            component={HimnosScreen}
            options={{
                title:"Himnos",
                headerStyle: {
                    backgroundColor: '#DBE2ED', // Cambia el color de fondo de la barra de título
                  },
            }}
        />
        <Stack.Screen 
                name="HimnoView" 
                component={HimnoViewScreen} 
                options={{
                  title:"Himno",
                  
                      }}
        />
        
        </Stack.Navigator>
    )
   
}
