import React  from 'react' 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from "react-native-vector-icons/FontAwesome5"
 
import HimnosNavigation from './HimnosNavigation'
import BibleNavigation from './BibleNavigation'
import HomeNavigation from './HomeNavigation'
const Tab = createBottomTabNavigator();


export default function NavigationTabMain() {
  
    return (
        <Tab.Navigator  screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === 'Inicio') {
                iconName = focused
                  ? 'church'
                  : 'church';
              } else if (route.name === 'Himnos') {
                iconName = focused ? 'book-reader' : 'book-reader';
              }else if (route.name === 'Biblia') {
                iconName = focused ? 'bible' : 'bible';
              }
    
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#4F7DAF',
            tabBarInactiveTintColor: '#8DB1DA',
          })}>
            <Tab.Screen 
            name="Inicio" 
            component={HomeNavigation} 
            options={{
              headerShown: false,
              }}/>
            <Tab.Screen 
            name="Himnos" 
            component={HimnosNavigation}  
            options={{
              headerShown: false,
              
              }}/>
            <Tab.Screen 
            name="Biblia" 
            component={BibleNavigation}  
            options={{
              headerShown: false,
              
              }}/>
          </Tab.Navigator>
    )
  
}
