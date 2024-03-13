import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';


const ServiceePro = () => {
    const navigation = useNavigation();

  
    return (
      <View style={styles.container}>
        <View style={styles.swiperContainer} showsButtons={false} autoplay={true}>
            
              <Image
                source={require('../../assets/bring.png')}
                style={styles.slideImage}
              />
        
          </View>
  
         

          <Text style={styles.iconTextt}>Get Your Service </Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Home')}>
        <Image
            source={require('../../assets/fuel.png')}
            style={styles.Image}
          />          
          <Text style={styles.iconText}>Fuel </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('tire')}>
        <Image
            source={require('../../assets/tire.png')}
            style={styles.Image}
          />          
           <Text style={styles.iconText}>Tire </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Battery')}>
        <Image
            source={require('../../assets/batry.png')}
            style={styles.Image}
          />          
           <Text style={styles.iconText}>Battery </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Battery')}>
        <Image
            source={require('../../assets/batry.png')}
            style={styles.Image}
          />          
           <Text style={styles.iconText}>Whinch </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Battery')}>
        <Image
            source={require('../../assets/whinch.png')}
            style={styles.Image}
          />          
           <Text style={styles.iconText}>LockOut </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Battery')}>
        <Image
            source={require('../../assets/TOW.png')}
            style={styles.Image}
          />          
           <Text style={styles.iconText}>Tow </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  swiperContainer: {
    height: '50%',
    marginTop: 5,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    resizeMode:'contain'
    
  },
  Image: {
    width: 100,
    height: 95,
    marginLeft:25,
    marginTop:10
  },
  iconsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 20,
    height: '50%',
    width: '100%',
    marginLeft:13
  },
  icon: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 10,
    fontWeight:"bold",
    marginLeft:28,
    fontSize:15
    
  },
  iconTextt: {
    marginTop: 10,
    fontWeight:"bold",
    marginLeft:28,
    fontSize:25
    
  },
  
});

export default ServiceePro
