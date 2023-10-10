import 'react-native-gesture-handler';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTabMain from './src/Routes/NavigationTabMain';
import { createTable, dropTablaHimnos, getDbConnection, insertHimnos,loadBibleData } from './src/Database/DbManager';

export default function App() {
  const db  = getDbConnection();
  useEffect(() => {
 
      //dropTablaHimnos(db);
      createTable(db);
      insertHimnos(db);
        
        async function insertDataAsync() {
          try {
            const data = await loadBibleData(db);
            console.log('Datos Cargados:', data);
          } catch (error) {
            console.error('Error al Cargar datos:', error);
          }
        }
    
        insertDataAsync();
  
  },[]);

  return (
    <NavigationContainer> 
    <NavigationTabMain/>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    margin: 8
  }
});
