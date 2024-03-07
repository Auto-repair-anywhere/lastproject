import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';


const ServiceePro = () => {
    const navigation = useNavigation();

  
    return (
      <View style={styles.container}>
        <Swiper style={styles.swiperContainer} showsButtons={false} autoplay={true}>
          <View style={styles.slide}>
            
              <Image
                source={require('../../assets/bring.png')}
                style={styles.slideImage}
              />
          
          </View>
  
          <View style={styles.slide}>
           
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                style={styles.slideImage}
              />
           
          </View>
  
          <View style={styles.slide}>
            <Image
                source={{ uri: 'https://as2.ftcdn.net/v2/jpg/04/28/08/29/1000_F_428082937_ggRPhYMGv4ljGKOpzW9G1LPQQm6EGFum.jpg' }}
                style={styles.slideImage}
              />
            
          </View>
        </Swiper>

      {/* Icons */}
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
    marginTop: 20,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    
  },
  Image: {
    width: 100,
    height:100,
    marginLeft:28,
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
});

export default ServiceePro
