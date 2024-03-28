import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faShoppingCart, faListAlt, faHeart } from '@fortawesome/free-solid-svg-icons';

const Navv = () => {
  const navigation = useNavigation();
  const [selectedIcon, setSelectedIcon] = useState('shop');

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
    navigation.navigate(iconName) 
  };

  const getIconColor = (iconName) => {
    return selectedIcon === iconName ? 'rgb(58,159,253)' : 'rgb(112,116,119)';
  };

  return (
    <View style={styles.bottomnav}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleIconClick('Home')}
      >
        <FontAwesomeIcon icon={faHome} size={30} color={getIconColor('Home')} />
        <Text style={[styles.iconText, { color: getIconColor('Home') }]}>Home </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleIconClick('shop')}
      >
        <FontAwesomeIcon icon={faShoppingCart} size={30} color={getIconColor('shop')} />
        <Text style={[styles.iconText, { color: getIconColor('shop') }]}>Shop </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleIconClick('category')}
      >
        <FontAwesomeIcon icon={faListAlt} size={30} color={getIconColor('category')} />
        <Text style={[styles.iconText, { color: getIconColor('category') }]}>Category </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleIconClick('cart')}
      >
        <FontAwesomeIcon icon={faShoppingCart} size={30} color={getIconColor('cart')} />
        <Text style={[styles.iconText, { color: getIconColor('cart') }]}>Cart </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleIconClick('WishlistScreen')}
      >
        <FontAwesomeIcon icon={faHeart} size={30} color={getIconColor('WishlistScreen')} />
        <Text style={[styles.iconText, { color: getIconColor('WishlistScreen') }]}>Wishlist </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomnav: {
    padding:5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 65,
    backgroundColor: "white",
    borderRadius: 25,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
    
  
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  iconText: {
    marginTop: 5,
  },
});

export default Navv;
