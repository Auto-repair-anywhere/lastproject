import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ServiceePro = () => {
  const route = useRoute();
  const { type, carData } = route.params;
  const navigation = useNavigation();

  let services = [
    { imageSource: require('../../assets/fuel.png'), buttonText: 'Fuel', screenName: 'Home' },
    { imageSource: require('../../assets/tire.png'), buttonText: 'Tire', screenName: 'tire' },
    { imageSource: require('../../assets/batry.png'), buttonText: 'Battery', screenName: 'Battery' },
    { imageSource: require('../../assets/whinch.png'), buttonText: 'Whinch', screenName: 'Battery' },
    { imageSource: require('../../assets/whinch.png'), buttonText: 'LockOut', screenName: 'Battery' },
    { imageSource: require('../../assets/TOW.png'), buttonText: 'Tow', screenName: 'Battery' },
  ];

  // Filter services based on type
  if (type === 1) {
    services = services.filter(service => service.buttonText === 'Fuel' || service.buttonText === 'Tire' || service.buttonText === 'Battery');
  }

  const renderServiceItem = ({ item }) => (
    <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate("tire", { problem: item?.buttonText, type: type, carData: carData })}>
      <Image source={item.imageSource} style={styles.Image} />
      <Text style={styles.iconText}>{item.buttonText}</Text>
    </TouchableOpacity>
  );
  

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/bring.png')} style={styles.slideImage} />
      <Text style={styles.iconTextt}>Get Your Service</Text>
      <FlatList
        data={services}
        renderItem={renderServiceItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={styles.iconsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  swiperContainer: {
    
  },
  slideImage: {
    width: '100%',
    resizeMode:'stretch',
    height:250,
    marginBottom:10
  },
  Image: {
    width: 100,
    height: 95,
    marginLeft: 25,
    marginTop: 10
  },
  iconsContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
    paddingBottom: 20,
  },
  icon: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 10,
    fontWeight: 'bold',
    marginLeft: 28,
    fontSize: 15
  },
  iconTextt: {
    fontWeight: 'bold',
    marginLeft: 28,
    fontSize: 25
  },
});

export default ServiceePro;
