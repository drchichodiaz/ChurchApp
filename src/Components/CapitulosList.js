import React,{useEffect, useState} from "react";
import { Text,View,   StyleSheet ,FlatList, TouchableOpacity} from "react-native";
import { getDbConnection } from "../Database/DbManager";  
import { useNavigation } from "@react-navigation/native"; 


export default function CapitulosList( props ) {
    const db  = getDbConnection(); 
    const [data, setData] = useState([]);
   const navigation =  useNavigation();
   const {Libro} = props ;
 
   
      // Función para obtener datos de la base de datos
        const fetchData = () => {
          console.log({Libro});
          db.transaction((tx) => {
            tx.executeSql(
              'SELECT distinct libro,Capitulo FROM biblia where  libro =?  ORDER BY CAST(Capitulo AS INTEGER)',
                 [Libro] ,
              (_, { rows }) => {
                setData(rows._array);
              }
            );
          });
        };
      
        // Llama a fetchData cuando cambia el texto de búsqueda
        useEffect(() => {
          fetchData();
        }, []);
  
    //individual items in the flatlist
    const Item = ({ text }) => (
      <View style={styles.item}>
        <Text style={styles.itemText}>{text}</Text>
      </View>
    );
      //Funcion que nos lleva al Himno para poder Verlo.
   const gotToCapitulo = (item) => {
     console.log(item.libro);
     navigation.navigate('ViewCap',{Libro:item.Libro,Capitulo:item.Capitulo,} );
      
    };
       
    
    return (
      <View style={styles.container}> 
 
      <FlatList
        data={data}
        keyExtractor={(item) => item.Capitulo.toString()}
        numColumns={5}
        renderItem={({ item }) =>  
        <TouchableOpacity   onPress={() => gotToCapitulo(item)}>
         
        <Item text={item.Capitulo.toUpperCase()} />
         
      </TouchableOpacity>
      
      }


      /> 
               </View>
               
    )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',
    backgroundColor: '#DBE2ED',  
    justifyContent: 'center',
  },
  item: { 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'white', 
    marginVertical: 3,
    marginHorizontal: 3,
    borderRadius: 6,
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 75,
    height: 75,
    
  },
  itemText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    
  } , 
  listContainer:{

    backgroundColor: '#DBE2ED',
  },
});