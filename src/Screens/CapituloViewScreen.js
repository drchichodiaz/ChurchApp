import React,{useEffect, useState} from "react";
import { Text,View,   StyleSheet ,FlatList, TouchableOpacity,SafeAreaView,useWindowDimensions} from "react-native";
import { getDbConnection } from "../Database/DbManager";  
 
 
export default function CapituloViewScreen({route}) {
const { Libro, Capitulo } = route.params;
const db  = getDbConnection(); 
const [data, setData] = useState([]); 

  // Función para obtener datos de la base de datos
    const fetchData = () => {
      console.log({Libro});
      console.log({Capitulo});
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT VersoN,Verso  FROM biblia where  Libro =?  and Capitulo =? ORDER BY CAST(VersoN AS INTEGER)',
             [Libro,Capitulo] ,
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
    <Text style={styles.itemTextCap}>{text.VersoN}</Text>
    <Text style={styles.itemText}>{text.Verso.replace(/\/n/g, ' ')}</Text>
  </View>
);
  return (
    <View  style= {styles.container}>
  
            <FlatList
            data={data}
            keyExtractor={(item) => item.VersoN.toString()}
            contentContainerStyle={{ paddingBottom: 30 }}
            renderItem={({ item }) =>  
                <TouchableOpacity   >           
                <Item text= {item} />
                </TouchableOpacity>
                }
            /> 
     
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1, 
        
    } ,
    item: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 5,
        borderColor: 'white',
        borderWidth: 1, 
        
    },
    itemText: {
      fontSize: 24, 
      maxWidth: '95%',
      textAlign: 'left',
      maxHeight: '100%',
    } ,
    itemTextCap: {
      color: '#4F7DAF',
      fontSize: 15, 
      fontWeight: 'bold',  
      maxWidth: '5%',
    }  ,
  });