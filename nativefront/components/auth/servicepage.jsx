import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';


const Servicee = () => {
    const navigation = useNavigation();

    const handleHomePress = () => {
      console.log('Home button pressed');
    };
  
    const handleTirePress = () => {
      console.log('Tire button pressed');
    };
  
    const handleBatteryPress = () => {
      console.log('Battery button pressed');
    };
  
    return (
      <View style={styles.container}>
        <Swiper style={styles.swiperContainer} showsButtons={false} autoplay={true}>
          <View style={styles.slide}>
            <TouchableOpacity onPress={handleHomePress}>
              <Image
                source={require('../../assets/bring.png')}
                style={styles.slideImage}
              />
              <Text style={styles.buttonText}>button</Text>
            </TouchableOpacity>
          </View>
  
          <View style={styles.slide}>
            <TouchableOpacity onPress={handleTirePress}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                style={styles.slideImage}
              />
              <Text style={styles.buttonText}>button</Text>
            </TouchableOpacity>
          </View>
  
          <View style={styles.slide}>
            <TouchableOpacity onPress={handleBatteryPress}>
              <Image
                source={{ uri: 'https://as2.ftcdn.net/v2/jpg/04/28/08/29/1000_F_428082937_ggRPhYMGv4ljGKOpzW9G1LPQQm6EGFum.jpg' }}
                style={styles.slideImage}
              />
              <Text style={styles.buttonText}>button</Text>
            </TouchableOpacity>
          </View>
        </Swiper>

      {/* Icons */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Home')}>
        <Image
            source={require('../../assets/fuel.png')}
            style={styles.Image}
          />          
          <Text style={styles.iconText}>Home </Text>
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
    height:95,
    
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    height: '50%',
    width:"100%"
  },
  icon: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 10,
    fontWeight:"bold"
  },
});

export default Servicee;
