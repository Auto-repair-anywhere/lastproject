import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screenn = () => {
  const navigation = useNavigation();

  const handleNavigation = (screenName, type) => {
    navigation.navigate(screenName, { type });
  };

  const renderButton = (imageSource, buttonText, screenName, type) => (
    <View style={styles.box}>
      <Image
        source={imageSource}
        style={styles.centeredImage}
      />
      <TouchableOpacity
        style={styles.centeredButton}
        onPress={() => handleNavigation(screenName, type)}
      >
        <Text style={styles.centeredButtonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderButton(
        require('../../assets/helpc.png'),
        'Community Assistance',
        'proServ',
        1
      )}
      {renderButton(
        require('../../assets/helpp.png'),
        'Professional Assistance',
        'proServ',
        2
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  centeredButton: {
    backgroundColor: 'rgb(58,159,253)',
    padding: 10,
    width: '80%',
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  centeredButtonText: {
    color: 'white',
    fontSize: 20,
  },
  box: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    marginTop: 9,
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 2,
    borderWidth: 1,
    borderColor: 'black',
  },
  centeredImage: {
    width: 290,
    height: 200,
    marginBottom: 20,
    borderRadius: 20,
    margin: 'auto',
    marginTop: 15,
    resizeMode: 'contain',
  },
});

export default Screenn;
