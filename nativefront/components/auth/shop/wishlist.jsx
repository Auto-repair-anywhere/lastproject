import React, { useEffect,useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import Navv from "./nav.jsx";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

export default WishlistScreen = () => {
  const navigation = useNavigation();
  const [data,Data]=useState([])



useEffect(
  async()=>{
      await axios.get()
  },[]

)



  return (
      <View style={styles.container} >
        <ScrollView style={styles.productRow}>
          <Text style={{ fontWeight: 'bold', fontSize: 20,textAlign:'center' }}>WishList(3)</Text>

          <View style={styles.productContainer}>
            
            <TouchableOpacity onPress={()=>navigation.navigate('details',{id:1})}>
              <View style={styles.productItem}>
                <Image
                  source={{ uri: 'https://premiumwheels.de/media/0a/8e/c1/1702397498/200223109.jpg' }}
                  style={styles.productImage}
                />
                <Text style={styles.productName}>Product Name</Text>
                <Text style={styles.productPrice}>$10.00</Text>
                <View style={{ alignItems: 'center',flexDirection:'row' }}>
                  <TouchableOpacity style={styles.productDescription}>
                    <Text style={{color:'white',fontSize:14}} >Remove</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.productDescription}>
                    <Text style={{color:'white',fontSize:14}}>Add Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('details',{id:1})}>
              <View style={styles.productItem}>
                <Image
                  source={{ uri: 'https://i0.wp.com/bestsellingcarsblog.com/wp-content/uploads/2023/03/Used-car-parts.jpeg?resize=596%2C400' }}
                  style={styles.productImage}
                />
                <Text style={styles.productName}>Product Name</Text>
                <Text style={styles.productPrice}>$10.00</Text>
                <View style={{ alignItems: 'center',flexDirection:'row' }}>
                  <TouchableOpacity style={styles.productDescription}>
                    <Text style={{color:'white',fontSize:14}}>Remove</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.productDescription}>
                    <Text style={{color:'white',fontSize:14}}>Add Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('details',{id:1})}>
              <View style={styles.productItem}>
                <Image
                  source={{ uri: 'https://www.techno-plus.eu/image/article/TEC/1311483_2_1/frein--main-pro.jpg' }}
                  style={styles.productImage}
                />
                <Text style={styles.productName}>Product Name</Text>
                <Text style={styles.productPrice}>$10.00</Text>
                <View style={{ alignItems: 'center',flexDirection:'row' }}>
                  <TouchableOpacity style={styles.productDescription}>
                    <Text style={{color:'white',fontSize:14}}>Remove</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.productDescription}>
                    <Text style={{color:'white',fontSize:14}}>Add Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('details',{id:1})}>
              <View style={styles.productItem}>
                <Image
                  source={{ uri: 'https://www.driftshop.fr/blog/wp-content/uploads/2021/06/echappement2-intro.jpg' }}
                  style={styles.productImage}
                />
                <Text style={styles.productName}>Product Name</Text>
                <Text style={styles.productPrice}>$10.00</Text>
                <View style={{ alignItems: 'center',flexDirection:'row' }}>
                  <TouchableOpacity style={styles.productDescription}>
                    <Text style={{color:'white',fontSize:14}}>Remove</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.productDescription}>
                    <Text style={{color:'white',fontSize:14}}>Add Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('details',{id:1})}>
              <View style={styles.productItem}>
                <Image
                  source={{ uri: 'https://aksatrade.com/img/ferrari%20auto%20spare%20parts.jpg'}}
                  style={styles.productImage}
                />
                <Text style={styles.productName}>Product Name</Text>
                <Text style={styles.productPrice}>$10.00</Text>
                <View style={{ alignItems: 'center',flexDirection:'row' }}>
                  <TouchableOpacity style={styles.productDescription}>
                    <Text style={{color:'white',fontSize:14}}>Remove</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.productDescription}>
                    <Text style={{color:'white',fontSize:14}}>Add Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('details',{id:1})}>
              <View style={styles.productItem}>
                <Image
                  source={{ uri: 'https://cdn.motor1.com/images/mgl/eob0vK/s3/shop-product2.jpg' }}
                  style={styles.productImage}
                />
                <Text style={styles.productName}>Product Name</Text>
                <Text style={styles.productPrice}>$10.00</Text>
                <View style={{ alignItems: 'center',flexDirection:'row' }}>
                  <TouchableOpacity style={styles.productDescription}>
                    <Text style={{color:'white',fontSize:14}}>Remove</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.productDescription}>
                    <Text style={{color:'white',fontSize:14}}>Add Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('details',{id:1})}>
              <View style={styles.productItem}>
                <Image
                  source={{ uri:'https://premiumwheels.de/media/0a/8e/c1/1702397498/200223109.jpg' }}
                  style={styles.productImage}
                />
                <Text style={styles.productName}>Product Name</Text>
                <Text style={styles.productPrice}>$10.00</Text>
                <View style={{ alignItems: 'center',flexDirection:'row' }}>
                  <TouchableOpacity style={styles.productDescription}>
                    <Text style={{color:'white',fontSize:14}}>Remove</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.productDescription}>
                    <Text style={{color:'white',fontSize:14}}>Add Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('details',{id:1})}>
              <View style={styles.productItem}>
                <Image
                  source={{ uri: 'https://i0.wp.com/bestsellingcarsblog.com/wp-content/uploads/2023/03/Used-car-parts.jpeg?resize=596%2C400' }}
                  style={styles.productImage}
                />
                <Text style={styles.productName}>Product Name</Text>
                <Text style={styles.productPrice}>$10.00</Text>
                <View style={{ alignItems: 'center',flexDirection:'row' }}>
                  <TouchableOpacity style={styles.productDescription}>
                    <Text style={{color:'white',fontSize:14}}>Remove</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.productDescription}>
                    <Text style={{color:'white',fontSize:14}}>Add Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
           

             
            
             
            
          </View>
        
        </ScrollView>

      <TouchableOpacity>
      <View  style={{
          backgroundColor: 'rgb(58,159,253)',
          height:50,
          padding:5,
          justifyContent:'center',
          borderRadius:30,
          marginBottom:7,
          marginTop:5
        }}>
        <Text style={{
          color:'white',textAlign:'center',fontSize:24
        }}>Add All To Cart</Text>
      </View>

      </TouchableOpacity>
       <View style={styles.nav} >
       <Navv/>
       </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 5,
    justifyContent: 'space-between', 
    height: '100%', 
  },
  
  productContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
    marginTop: 10,
    width: '100%',
    
  },
  productItem: {
    width: 165, 
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height:210
  },
  productImage: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    resizeMode: "contain"
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 13,
    backgroundColor: 'rgb(58,159,253)',
    width: 70,
    padding: 5,
    textAlign: 'center',
    color: 'white',
    marginRight:15,
    borderRadius:10
  },
  
});
