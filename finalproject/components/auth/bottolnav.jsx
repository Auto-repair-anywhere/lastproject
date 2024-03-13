import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Nav = () => {
  const navigation = useNavigation();
  const [selectedIcon, setSelectedIcon] = useState('Home');

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
        <Icon
          name="home"
          size={30}
          color={getIconColor('Home')}
        />
        <Text style={[styles.iconText, { color: getIconColor('home') }]}>Home </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleIconClick('cogs')}
      >
        <Icon
          name="cogs"
          size={30}
          color={getIconColor('cogs')}
        />
        <Text style={[styles.iconText, { color: getIconColor('cogs') }]}>Spare Parts </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleIconClick('clipboard')}
      >
        <Icon
          name="clipboard"
          size={30}
          color={getIconColor('clipboard')}
        />
        <Text style={[styles.iconText, { color: getIconColor('clipboard') }]}>Request </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleIconClick('wrench')}
      >
        <Icon
          name="wrench"
          size={30}
          color={getIconColor('wrench')}
        />
        <Text style={[styles.iconText, { color: getIconColor('wrench') }]}>Workshop </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleIconClick('Chat')}
      >
        <Icon
          name="comments"
          size={30}
          color={getIconColor('Chat')}
        />
        <Text style={[styles.iconText, { color: getIconColor('comments') }]}>Chat </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomnav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    height: 65,
    marginBottom: 0,
    backgroundColor: "white",
    borderRadius: 30,
    marginBottom: 10
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  iconText: {
    marginTop: 5,
  },
});

export default Nav;
