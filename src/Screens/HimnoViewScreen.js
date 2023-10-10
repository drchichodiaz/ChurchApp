import React, { Component } from 'react'
import { Text, SafeAreaView,StyleSheet,useWindowDimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import HTML  from 'react-native-render-html';
 
export default function HimnoViewScreen({route}) {
    const { title, himno } = route.params;
    const {width} = useWindowDimensions();

    const mixedStyle = {
        body: {
          whiteSpace: 'normal',
          color: '#000000',
          textAlign: 'center',
          paddingRight: 10,
          fontSize: 20,
        },
        p: {
            whiteSpace: 'normal',
            color: '#ffff',
          
        }
      }


    return (
      <SafeAreaView  style= {styles.container}>
        <Text style={styles.Titulo}>{title}</Text>
        <ScrollView>
        <HTML  contentWidth={width}
            source={{html:himno}}
            tagsStyles={mixedStyle}
        />
        </ScrollView>
      </SafeAreaView>
    )
  
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Titulo: {
      textAlign: 'center',  
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
     
  });