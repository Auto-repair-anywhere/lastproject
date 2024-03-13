import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
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
     
      <View style={styles.imageContainer} onPress={handleHomePress}>
        <Image
          source={require('../../assets/bring.png')}
          style={styles.image}
          resizeMode="contain"  
        />
        <TouchableOpacity>
        <Text style={styles.buttonText}>contact us</Text>
        </TouchableOpacity>
      </View>

     
      <Text style={{fontSize:25,marginTop:20,marginBottom:15,fontWeight:'bold', marginLeft:20}}>Get Your Service</Text>

      <View style={styles.iconsContainer}>

        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../assets/fuel.png')}
            style={styles.Image}
            resizeMode="contain"  // Set the resizeMode to 'contain'
          />
          <Text style={styles.iconText}>Home </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('tire')}>
          <Image
            source={require('../../assets/tire.png')}
            style={styles.Image}
            resizeMode="contain"  // Set the resizeMode to 'contain'
          />
          <Text style={styles.iconText}>Tire </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Battery')}>
          <Image
            source={require('../../assets/batry.png')}
            style={styles.Image}
            resizeMode="contain"  // Set the resizeMode to 'contain'
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
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonText: {
    backgroundColor: 'rgb(58,159,253)',
    fontSize: 20,
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'white',
    textAlign: 'center',
    marginLeft:10,
    
  },
  Image: {
    width: 100,
    height: 95,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    height: '50%',
    width: '100%',
  },
  icon: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize:15
  },
});

export default Servicee;
