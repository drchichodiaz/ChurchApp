import React, { Component } from 'react'
import { Text,SafeAreaView, View,StyleSheet } from 'react-native' 
import { FlatList,ScrollView } from "react-native-gesture-handler";
import AccordionItem from '../Components/AccordionItem';

const carouselItem =require('../../assets/doctrina.json'); 



export default function DoctrinaScreen() {
   
    return (
      <SafeAreaView style={styles.container}> 
       
          <FlatList
          data={carouselItem}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item})=> (
            <AccordionItem title={item.title} bodyText={item.body}/>

          )}>



          </FlatList>

 
      </SafeAreaView> 
    )
   
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    height: '100%',
    backgroundColor: '#DBE2ED',
  } 


});