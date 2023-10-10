import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import CapitulosList from '../Components/CapitulosList'

export default function LibroScreen({route}) {
 
  const { Libro  } = route.params;
  const printProp  = ( ) => {
    // Alert.alert('Elemento Seleccionado', `Has seleccionado: ${item.himno}`);
    console.log(Libro);
     
   };
        useEffect(() => {
          //printProp();
        }, []);

  return (
  
    <CapitulosList  Libro={Libro}/>
   
  )
}