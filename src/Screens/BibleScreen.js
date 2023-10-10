import React from "react";
import { Text,View , StyleSheet  } from "react-native";
import LibrosList from "../Components/LibrosList";
 


export default function BibleScreen(props) {
     

    return ( 
      <LibrosList/>
               
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