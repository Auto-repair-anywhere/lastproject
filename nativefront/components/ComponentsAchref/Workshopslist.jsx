import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Workshoplist = () => {
  const workshops = [
    { name: 'Auto King Workshop', location: 'Ariana, Tunis (3.8 km)' },
    { name: 'Adonz Automotive', location: 'Ben arous, Tunis (4.1 km)' },
    { name: 'Mecanique auto', location: 'El kram, Tunis (7.6 km)' },
    { name: 'Vitres auto tunisie', location: 'Menzah, Ariana (2.5 km)' },
    { name: 'Electrique auto', location: 'Ariana, Tunis (4.1 km)' },
    { name: 'Climatisation auto tunisie', location: 'El Marsa, Tunis (5.2 km)' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {workshops.map((workshop, index) => (
        <View key={index} style={index % 2 === 0 ? styles.rowContainer : styles.rowContainerEven}>
          <View style={styles.box}>
            <Image
              source={{ uri: 'https://www.menzili.tn/upload/photos/2020/11/28/10/34/s2psq9d58v.jpg' }}
              style={[styles.image, index % 2 === 0 ? null : styles.imageEven]}
            />
            <View style={styles.textContainer}>
              <Text style={[styles.text, styles.title]}>{workshop.name}</Text>
              <Text style={[styles.text, styles.location]}>{workshop.location}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    width: '50%',
    marginBottom: 20, 
  },
  rowContainerEven: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-end',
    marginBottom: 20, 
  },
  box: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10, 
    borderRadius: 1, 
    backgroundColor: 'white', 
    backgroundColor: 'rgb(58,159,253)',
    marginHorizontal:3,
  },
  image: {
    width: 192,
    height: 190,
    resizeMode: 'cover',
    marginBottom: 8,
    borderTopLeftRadius: 5, 
    borderTopRightRadius: 5,
  },
  imageEven: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  textContainer: {
    width: '100%',
    padding: 8, 
  },
  text: {
    textAlign: 'center',
    fontSize:15
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  location: {
    color: 'white', 
    fontSize:12

  },
});

export default Workshoplist;
