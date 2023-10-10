import React,{useEffect, useState} from "react";
import { Text,View, SafeAreaView,TextInput,Button, StyleSheet ,FlatList, TouchableOpacity, Alert} from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome5";
import { getDbConnection } from "../Database/DbManager";  
import { useNavigation } from "@react-navigation/native"; 


export default function HimnosScreen(props) {
    const db  = getDbConnection();
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([]);
   const navigation =  useNavigation();
 
   
      // Función para obtener datos de la base de datos
        const fetchData = () => {
          db.transaction((tx) => {
            tx.executeSql(
              'SELECT * FROM HIMNOS WHERE title LIKE ?',
              ['%' + searchText + '%'],
              (_, { rows }) => {
                setData(rows._array);
              }
            );
          });
        };
      
        // Llama a fetchData cuando cambia el texto de búsqueda
        useEffect(() => {
          fetchData();
        }, [searchText]);
  
    //individual items in the flatlist
    const Item = ({ text }) => (
      <View style={styles.item}>
        <Text style={styles.itemText}>{text}</Text>
      </View>
    );
      //Funcion que nos lleva al Himno para poder Verlo.
    const gotToHimno = (item) => {
     // Alert.alert('Elemento Seleccionado', `Has seleccionado: ${item.himno}`);
     navigation.navigate('HimnoView',{title:item.title,himno:item.himno,} );
      
    };
       
    
    return (
      <View style={styles.container}> 
         <View style={styles.inputContainer}>
        <Icon name="search" size={20} color="#888" style={styles.icon} /> 
        <TextInput
          style={styles.input}
          placeholder="buscar himno..."
          placeholderTextColor="#888"
          onChangeText={(text) => setSearchText(text)}
         
         
        />
       
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>  
        <TouchableOpacity onPress={() => gotToHimno(item)}>
         
        <Item text={item.HNEW+". "+item.title} />
         
      </TouchableOpacity>
      
      }


      /> 
               </View>
               
    )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBE2ED',  
    justifyContent: 'center',
  },
  item: {
    backgroundColor: 'white',
    padding: 7,
    marginVertical: 3,
    marginHorizontal: 10,
    borderRadius: 2,
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemText: {
    fontSize: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#4F7DAF',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginVertical: 3,
    marginHorizontal: 10,
    backgroundColor:"#DBE2ED",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1, // Para que el TextInput ocupe todo el espacio restante en el contenedor
    fontSize: 16,
    color: 'black',
    marginVertical: 3,
    marginHorizontal: 16,
  },listContainer:{

    backgroundColor: '#DBE2ED',
  },
});