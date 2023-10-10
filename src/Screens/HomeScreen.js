import React, { useRef, useState } from "react";
import { View } from "react-native";
import { Dimensions } from "react-native";
import { StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { Text, SafeAreaView,Image  } from "react-native";
import { FlatList,ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
 
const carouselItem =require('../../assets/carousel.json'); 
 
const { width, height} = Dimensions.get('window');

const localImages = {
  camino: require('../../assets/images/camino.jpg'),
  cordero: require('../../assets/images/cordero.jpg'), 
  cruz: require('../../assets/images/cruz.jpg'), 
  luz: require('../../assets/images/luz.jpg'),
  irioabajo: require('../../assets/images/irioabajo.png'),
  bibliacruz: require('../../assets/images/bibliacruz.jpg'),  
};

export default function HomeScreen(props) {
  const navigation =  useNavigation();
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

       
  const gotToIglesia = (item) => { 
          navigation.navigate('IglesiaScreen' );     
  };

  const gotToDoctrina = (item) => { 
    navigation.navigate('DoctrinaScreen' );     
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
       <TouchableOpacity 
            onPress={() => gotToIglesia()}
            
            activeOpacity={1}
            >
              <View style = {styles.Card}>
                <Image source={localImages['irioabajo']} style={styles.CardImage} /> 
                <Text style={styles.CartText}>¿Quienes Somos?</Text>
              </View>
       </TouchableOpacity>
       <TouchableOpacity 
             onPress={() => gotToDoctrina()}
            activeOpacity={1}
        >
          <View style = {styles.Card}> 
           <Image source={localImages['bibliacruz']} style={styles.CardImage} /> 
           <Text style={styles.CartText}>¿En que creemos?</Text>
          </View>
       </TouchableOpacity>
        
       </ScrollView>
      </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBE2ED',  
    alignItems: 'center',
  },
  cImage:{
    width:width-24 ,
    height:250,
    resizeMode: 'cover',
    borderRadius: 6, 
    
  },
  cfooter:{

    position: 'absolute', // Coloca el texto en una posición absoluta
    bottom: 10, // Ajusta la posición vertical del texto
    left: 10, // Ajusta la posición horizontal del texto
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente para que el texto sea legible
    padding: 10, // Espaciado alrededor del texto
    borderRadius: 6,
    
  },
  cfooterText:{
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  }, 
   cfooterText2:{
    fontSize: 10,
    color: 'white', 
  },
  carousel: {
    backgroundColor: 'white',
    marginHorizontal: 12,
    maxHeight: 300, 
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
  Card:{
    flex: 1,
    alignItems: "center",
    flexDirection: 'row',
    backgroundColor: 'white', 
    height: 150,
    width:width-24 ,
    marginHorizontal: 12,
    borderRadius: 6,
    marginVertical: 10,
    elevation:3,
    shadowOffset: {
       width: 1,
       height:1,
    }, 
  },
  CardImage: {
    height: 150,
    width: 150,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  CartText:{ 
    color: '#333333',
    fontSize: 20,
    fontWeight: 'bold', 
    marginLeft: 20,

  }



});