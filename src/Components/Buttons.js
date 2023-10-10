import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5"

export function ButtonBasic(props) {
    const { caption, icon }=props;
  return (
    <TouchableOpacity
        style = {{
            ...styles.button,
            backgroundColor: '#4F7DAF'
        }}>
      <Text
        style = {{...styles.buttonText,
        color: 'white',}}>{caption}</Text>
       
    </TouchableOpacity>
  )
}

export function ButtonCircleIcon(props) {
    const {   fill, icon }=props;
  return (
    <TouchableOpacity
        style = {{
            ...styles.circleButton,
            backgroundColor: fill,
        }}>
    <Icon name={icon}  color='white'/>
       
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        alignSelf: 'center',
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
    },circleButton: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        width: 35,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    buttonText: {
        textAlign:'center',


    }


});