import React, { useRef, useState } from "react";
import { Text,Image, View, Dimensions, StyleSheet,SafeAreaView , TouchableOpacity } from "react-native";
import { FlatList,ScrollView } from "react-native-gesture-handler"; 
import { quienesSomos } from "../Database/InfoText"; 
import { ButtonCircleIcon } from "../Components/Buttons";

const carouselItem =require('../../assets/carouselChurch.json'); 
const { width, height} = Dimensions.get('window');

const localImages = {
  camino: require('../../assets/images/camino.jpg'),
  cordero: require('../../assets/images/cordero.jpg'), 
  cruz: require('../../assets/images/cruz.jpg'), 
  luz: require('../../assets/images/luz.jpg'),
  irioabajo: require('../../assets/images/irioabajo.png'),
  bibliacruz: require('../../assets/images/bibliacruz.jpg'),  
};

export default function IglesiaScreen(props) { 
  let flatListRef= 1;
  const[currentIndex,setCurrentIndex] = useState(0);
 
  const onViewRef = useRef(({ changed }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });
  const scrollToIndex = (index) => {
    if (flatListRef.currentIndex) {
      flatListRef.currentIndex.scrollToIndex({ animated: true, index: index });
    }
  };

  const renderItems = ({ item }) => {
    
    return <TouchableOpacity 
            onPress={()=>console.log(  item.url)}
            activeOpacity={1}
            >
          
           <Image source={localImages[item.url]} style={styles.cImage} />
           <View style={styles.cfooter}>
          <Text style={styles.cfooterText}>{item.title}</Text>
          <Text style={styles.cfooterText2}>{item.text}</Text>
          <Text style={styles.cfooterText3}>{item.text2}</Text>
          <View style = {styles.cfooterButtons} >
          <ButtonCircleIcon  fill = "#649000" icon = "map-marked-alt"/> 
          <ButtonCircleIcon  fill = "#3D85C6" icon = "phone"/> 
          <ButtonCircleIcon  fill = "#c63d85" icon = "calendar-alt"/> 
          </View>
          </View>
    </TouchableOpacity>
  };

    return (
      <SafeAreaView style={styles.container}> 
        <ScrollView>
        <FlatList 
        data={carouselItem} 
        renderItem={renderItems} 
        keyExtractor={(item,index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={(ref) => {
          flatListRef  = ref;
        }}
        style = {styles.carousel} 
        onViewableItemsChanged={onViewRef.current}
        /> 
       <View style = {styles.dotView}> 
       {carouselItem.map((_, index) => (
      <TouchableOpacity 
      key={index.toString()} 
      style={[styles.circle,
        {backgroundColor: index ==currentIndex?'black':'grey'},
      
      ]}
      onPress ={() => scrollToIndex(index)}
      />
        ))}

       </View>
          <Text  
          style={styles.textMain}
          >{quienesSomos()} </Text>
        </ScrollView>  
      </SafeAreaView>
    )
 
}


const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBE2ED',  
    alignItems: 'center', 
  },
  textMain:{   
    fontSize:18,
    color: '#333333',
    paddingHorizontal: 12,
    marginBottom: 20, 
  },
  cImage:{
    width:width-24 ,
    height:250,
    resizeMode: 'cover',
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  cfooter:{  
    width:width-24 ,
    
  },
  cfooterText:{
    fontSize: 22,
    color: '#333333',
    fontWeight: 'bold',
    paddingHorizontal: 8,
  }, 
   cfooterText2:{
    paddingHorizontal: 8,
    fontSize: 14,
    color: '#333333', 
  },
  cfooterText3:{
    paddingHorizontal: 8,
    fontSize: 12,
    color: '#333333', 
  },
  cfooterButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  carousel: {
    width:width-24 ,
    backgroundColor: 'white',
    marginHorizontal: 12,
    maxHeight: 550, 
    borderRadius: 6, 
    elevation:3,
    shadowOffset: {
       width: 1,
       height:1,
    }
  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,

  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: 'gray',
    borderRadius: 50,
    marginHorizontal: 5


  },


});