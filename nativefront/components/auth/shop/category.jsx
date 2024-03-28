import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Category = () => {
  return (
    <ScrollView>

   
    <View style={styles.container}>
      {/* Container 1 */}
      <View style={styles.categoryContainer}>
       
       <Image
          source={{uri:'https://i.pinimg.com/564x/9d/93/86/9d9386e66b4fac2cbd58e347222da945.jpg'}}
          style={styles.image}
        />
       
        <Text style={styles.title}>Brand </Text>
      </View>
      {/* Container 2 */}
      <View style={styles.categoryContainer}>
        <Image
          source={{uri:'https://i.pinimg.com/564x/26/35/45/263545e8591359c03a5fb0523d6a0626.jpg'}}
          style={styles.image}
        />
        <Text style={styles.title}>Camper Tools</Text>
      </View>
      {/* Container 3 */}
      <View style={styles.categoryContainer}>
        <Image
          source={{uri:'https://i.pinimg.com/564x/38/10/27/381027c26aa8585cc8c321ee00feff6a.jpg'}}
          style={styles.image}
        />
        <Text style={styles.title}>Snow Mode</Text>
      </View>
      {/* Container 4 */}
      <View style={styles.categoryContainer}>
        <Image
          source={{uri:'https://i.pinimg.com/564x/f2/7b/c9/f27bc950f392b09fd23aab0b554c374b.jpg'}}
          style={styles.image}
        />
        <Text style={styles.title}>Others</Text>
      </View>
     
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor:"white"
  },
  categoryContainer: {
    alignItems: 'center',
    width:'100%',
    height:200
  },
  image: {
  width:350,
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
    resizeMode:'cover',
    height:150
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'rgb(58,159,253)'
  },
});

export default Category;
