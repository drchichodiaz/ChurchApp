import React from "react";
import {  StyleSheet  } from "react-native";
import HimnosList from  "../Components/HimnosList";


export default function HimnosScreen(props) {
     

    return ( 
      <HimnosList/>
               
    )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});