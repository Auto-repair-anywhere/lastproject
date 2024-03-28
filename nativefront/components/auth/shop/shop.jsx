import React, { useEffect,useState } from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { SliderBox } from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navv from "./nav.jsx";
import axios from "axios";




const Shop = () => {

  const [data,Data]=useState([])


  const slides = [
    'https://cdn.shopify.com/s/files/1/0012/8063/9049/files/3_6d940cf4-6cd3-4e20-8691-0220b5843ba3.jpg?v=1693816696',
    'https://i0.wp.com/bestsellingcarsblog.com/wp-content/uploads/2023/03/Used-car-parts.jpeg?resize=596%2C400',
    'https://di-uploads-pod7.dealerinspire.com/acuraoflimerick/uploads/2018/04/Car_Outlined_With_Car_Parts.jpg',
  ];


useEffect(
  async()=>{
    await axios.get()
  },[]
)


  return (
    <View style={styles.container}>
      <ScrollView 
       contentContainerStyle={{ paddingHorizontal: 5 }}
          >
      <View style={styles.header}>
        <Text style={styles.textStyle}>
          Welcome To Our Shop! Here you can find all what you need with the best price.
        </Text>
      </View>

      <View style={styles.sliderContainer}>
        <SliderBox
          images={slides}
          dotColor='black'
          inactiveDotColor='white'
          autoplay
          circleLoop
        />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="What are you looking for ?"
        />
        <Icon name="search" size={24} color="black" style={styles.icon} />
      </View>

      

      <View style={styles.categoryContainer}>
          <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15 }}
          >
            <View style={styles.cI}>
            <TouchableOpacity>
              <Image
              style={styles.imageC}
              source={{uri:'https://t4.ftcdn.net/jpg/00/51/96/31/360_F_51963161_ZIsqaaYu2lj7Tv7EU1cAKxdoHnAbMvBl.jpg'}}/>
              <Text style={styles.iconText}>TIRE</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.cI}>
            <TouchableOpacity>
              <Image
              style={styles.imageC}
              source={{uri:'https://images-cdn.newscred.com/Zz1lNGRjZTZmYzI2NDk0MzdlODM3NDcyOWI4MDNlZmU2Yw=='}}/>
              <Text style={styles.iconText}>Engine</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.cI}>
            <TouchableOpacity>
              <Image
              style={styles.imageC}
              source={{uri:'https://chibane-auto.com/wp-content/uploads/2022/02/choisir-accessoires-auto.png'}}/>
              <Text style={styles.iconText}>Accessoires</Text>
            </TouchableOpacity>
            </View>


            <View style={styles.cI}>
            <TouchableOpacity>
              <Image
              style={styles.imageC}
              source={{uri:'https://www.nerdwallet.com/assets/blog/wp-content/uploads/2022/10/GettyImages-1157181664-2400x1440.jpg'}}/>
              <Text style={styles.iconText}>Oil</Text>
            </TouchableOpacity>
            </View>
            
            
           
          </ScrollView>
        </View>

      <View style={styles.productContainer}>
      
      <View
      style={{
        
        backgroundColor:'rgb(58,159,253)',
        height:40,
        padding:5,
        borderRadius:20,
        marginBottom:10
        
        }}
      >

      <Text
      style={{
        fontWeight:'bold',
        fontSize:20,
        color:'white',
        textAlign:'center',
        marginBottom:10
      }} >Check Our New Products</Text>
      </View>


        <ScrollView 
           horizontal={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          >
          <TouchableOpacity  >
            <View style={styles.productItem}>
            <Image
                source={{ uri: 'https://cdn1.or24.de/item/images/32770/full/32770-Adelaide-VW-19-Zoll-Felgen-Golf-8-Adelaide-Sommerreifen-Sommerraeder-5H0601025R_4.jpg' }} 
                style={styles.productImage}
              />
              <Text style={styles.productName}>Product Name</Text>
              <Text style={styles.productPrice}>$10.00</Text>
             <View style={{flexDirection:'row',gap:60}}>
              
             <TouchableOpacity
             style={styles.productDescription}>
              <Text style={{
                fontSize:18,
                color:'white',
                textAlign:'center'
              }} >View</Text>
              </TouchableOpacity>
              <Icon name="heart" size={24} color="red"  />

              
             </View>
            </View>
          </TouchableOpacity>



          <TouchableOpacity>
            <View style={styles.productItem}>
            <Image
                source={{ uri: 'https://premiumwheels.de/media/0a/8e/c1/1702397498/200223109.jpg' }} 
                style={styles.productImage}
              />
              <Text style={styles.productName}>Product Name</Text>
              <Text style={styles.productPrice}>$10.00</Text>
             <View style={{flexDirection:'row',gap:60}}>
              
             <TouchableOpacity
             style={styles.productDescription}>
              <Text style={{
                fontSize:18,
                color:'white',
                textAlign:'center'
              }} >View</Text>
              </TouchableOpacity>
              <Icon name="heart" size={24} color="red"  />

              
             </View>
            </View>
          </TouchableOpacity>


          <TouchableOpacity>
            <View style={styles.productItem}>
            <Image
                source={{ uri: 'https://i0.wp.com/bestsellingcarsblog.com/wp-content/uploads/2023/03/Used-car-parts.jpeg?resize=596%2C400' }} 
                style={styles.productImage}
              />
              <Text style={styles.productName}>Product Name</Text>
              <Text style={styles.productPrice}>$10.00</Text>
             <View style={{flexDirection:'row',gap:60}}>
              
             <TouchableOpacity
             style={styles.productDescription}>
              <Text style={{
                fontSize:18,
                color:'white',
                textAlign:'center'
              }} >View</Text>
              </TouchableOpacity>
              <Icon name="heart" size={24} color="red"  />

              
             </View>
            </View>
          </TouchableOpacity>


          

         
         
        </ScrollView>
      </View>






      <View style={styles.productContainer}>
      <View
      style={{
        
        backgroundColor:'rgb(58,159,253)',
        height:40,
        padding:5,
        borderRadius:20,
        marginBottom:10
        
        }}
      >
      <Text style={{fontWeight:'bold',fontSize:20,color:'white', textAlign:'center'}}>Check Out our Promtion </Text>
</View>
        <ScrollView 
           horizontal={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          >
            <TouchableOpacity>
            <View style={styles.productItem}>
            <Image
                source={{ uri: 'https://www.techno-plus.eu/image/article/TEC/1311483_2_1/frein--main-pro.jpg' }} 
                style={styles.productImage}
              />
              <Text style={styles.productName}>Product Name</Text>
              <Text style={styles.productPrice}>$10.00</Text>
              <View style={styles.promotionContainer}>
          <Text style={styles.promotionText}>Promotion Price: $8.00 (-20%)</Text>
        </View>
             <View style={{flexDirection:'row',gap:60}}>
              
             <TouchableOpacity
             style={styles.productDescription}>
              <Text style={{
                fontSize:18,
                color:'white',
                textAlign:'center'
              }} >View</Text>
              </TouchableOpacity>
              <Icon name="heart" size={24} color="red"  />

              
             </View>
            </View>
          </TouchableOpacity>




          <TouchableOpacity>
            <View style={styles.productItem}>
            <Image
                source={{ uri: 'https://cdn.motor1.com/images/mgl/eob0vK/s3/shop-product2.jpg' }} 
                style={styles.productImage}
              />
              <Text style={styles.productName}>Product Name</Text>
              <Text style={styles.productPrice}>$10.00</Text>
              <View style={styles.promotionContainer}>
          <Text style={styles.promotionText}>Promotion Price: $8.00 (-20%)</Text>
        </View>
             <View style={{flexDirection:'row',gap:60}}>
              
             <TouchableOpacity
             style={styles.productDescription}>
              <Text style={{
                fontSize:18,
                color:'white',
                textAlign:'center'
              }} >View</Text>
              </TouchableOpacity>
              <Icon name="heart" size={24} color="red"  />

              
             </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.productItem}>
            <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Y1l_ZWlFWnd89rxqX4RTce1xUVUPAhGpR_XMPJg4Yg&s' }} 
                style={styles.productImage}
              />
              <Text style={styles.productName}>Product Name</Text>
              <Text style={styles.productPrice}>$10.00</Text>
              <View style={styles.promotionContainer}>
          <Text style={styles.promotionText}>Promotion Price: $8.00 (-20%)</Text>
        </View>
             <View style={{flexDirection:'row',gap:60}}>
              
             <TouchableOpacity
             style={styles.productDescription}>
              <Text style={{
                fontSize:18,
                color:'white',
                textAlign:'center'
              }} >View</Text>
              </TouchableOpacity>
              <Icon name="heart" size={24} color="red"  />

              
             </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.productItem}>
            <Image
                source={{ uri: 'https://www.driftshop.fr/blog/wp-content/uploads/2021/06/echappement2-intro.jpg' }} 
                style={styles.productImage}
              />
              <Text style={styles.productName}>Product Name</Text>
              <Text style={styles.productPrice}>$10.00</Text>
              
              <View style={styles.promotionContainer}>
          <Text style={styles.promotionText}>Promotion Price: $8.00 (-20%)</Text>
        </View>

             <View style={{flexDirection:'row',gap:60}}>
              
             <TouchableOpacity
             style={styles.productDescription}>
              <Text style={{
                fontSize:18,
                color:'white',
                textAlign:'center'
              }} >View 
              </Text>
              </TouchableOpacity>
              <Icon name="heart" size={24} color="red"  />

              
             </View>
            </View>
          </TouchableOpacity>


          

         
         
        </ScrollView>
      </View>


      

      </ScrollView>
      <Navv/>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:'white'
  },
 
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    marginLeft: 10,
  },
  sliderContainer: {
    height: 150,
    marginBottom: 10,
  },
  categoryContainer: {
    marginBottom: 10,
  },
 
  imageC: {
    resizeMode:'contain',
    width: 120, // Adjust width of the image as needed
    height: 120, // Adjust height of the image as needed
    borderRadius: 50
  },

  cI:{
    width:100,
    marginRight:30,
    height:100,
    marginBottom:40
  },
  productContainer: {
    flex: 1,
    marginTop:20,
    height:320,
    width:'100%',
    marginBottom:10,
    

    
  },
  productItem: {
    marginRight: 20,
    width:200,
    borderRadius:10,
    padding:5,
    border:2,
    borderColor:'black',
    border:2,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
    
  },
  productImage: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    resizeMode:"contain"
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
   
    backgroundColor:'rgb(58,159,253)',
    width:80,
    padding:5,
    borderRadius:10,
    justifyContent:'center',
    color:'white'
   
    
  },
  iconText: {
    textAlign: 'center',
    color: 'black',
    fontFamily:'system'
   
  },
  promotionContainer: {
    backgroundColor: 'yellow',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom:3
  }
});

export default Shop;
