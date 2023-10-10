import { StyleSheet,View, Text,Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5" 
import { LayoutAnimation } from 'react-native';
import { toggleAnimation } from './Animations/toggleAnimation';
export default function AccordionItem(props) {

const[showContent, setShowContent] = useState(false);

const animationController = useRef(new Animated.Value(0)).current;

const toggleListItem = () =>{
    const config = {
        duration: 300,
        toValue: showContent ?0:1,
        useNativeDriver: true
    };
    Animated.timing(animationController,config).start();
    LayoutAnimation.configureNext(toggleAnimation)
    setShowContent(!showContent);

};

const arrowTransform = animationController.interpolate({
    inputRange: [0,1],
    outputRange:['0deg','90deg']
});

const {title, bodyText} = props;
  return (
    <View style = {styles.container}>
        <TouchableOpacity onPress={()=>toggleListItem()}> 
            <View style = {styles.titleContainer}>
                <Text  style = {styles.title}>{title}</Text>
                <Animated.View style = {{transform: [{rotateZ: arrowTransform}]}} >
                     <Icon name='chevron-right' size={15} color='black' />
                </Animated.View>
               
            </View>

        </TouchableOpacity>
        {showContent && (
        <View  style = {styles.body}>
        <Text  style = {styles.bodyText}>{bodyText}</Text>
        </View>)}
        
       
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        with: '100%',
        padding: '2%',
        borderRadius: 12,
        backgroundColor: 'white',
        marginBottom: '2%',
        overflow: 'hidden',

    },
    title: {
        fontSize: 20,
        color: '#333333',
        fontWeight: 'bold',

    },
    body: {
         
        paddingHorizontal: '2%',
        paddingVertical: '3%',
    },
    bodyText:{
        fontSize: 18,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    }


});
 