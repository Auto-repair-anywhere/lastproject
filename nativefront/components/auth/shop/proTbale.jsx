import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Button, Image } from "react-native";

const ProductTable = ({ data }) => {
  const [cartItems, setCartItems] = useState({});

  const renderItem = ({ item }) => {
    const addToCart = () => {
      setCartItems((prevCartItems) => ({
        ...prevCartItems,
        [item.id]: {
          ...item,
          quantity: (prevCartItems[item.id]?.quantity || 0) + 1,
        },
      }));
    };

    const removeFromCart = () => {
      if (cartItems[item.id]?.quantity > 0) {
        setCartItems((prevCartItems) => {
          const updatedCartItems = { ...prevCartItems };
          updatedCartItems[item.id].quantity -= 1;
          if (updatedCartItems[item.id].quantity === 0) {
            delete updatedCartItems[item.id];
          }
          return updatedCartItems;
        });
      }
    };

    return (
      <View style={styles.row}>
        <Image source={{ uri: 'https://i0.wp.com/bestsellingcarsblog.com/wp-content/uploads/2023/03/Used-car-parts.jpeg?resize=596%2C400' }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.cell}>{item.name}</Text>
          <Text style={styles.cell}>${item.price}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <Button title="-" onPress={removeFromCart} />
          <Text style={styles.quantityText}>
            {cartItems[item.id]?.quantity || 0}
          </Text>
          <Button title="+" onPress={addToCart} />
        </View>
      </View>
    );
  };

  const calculateTotal = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const item = cartItems[itemId];
      const price = parseFloat(item.price);
      const quantity = item.quantity || 0;
      total += price * quantity;
    }
    return total.toFixed(2); 
  };

  const handleBuy = () => {
    console.log("Cart Items:", cartItems);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}></Text>
        <Text style={styles.headerText}>Product Name</Text>
        <Text style={styles.headerText}>Quantity</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
      </View>
     <View style={{
      backgroundColor:'rgb(58,159,253)',
      borderRadius:20,
      padding:5,
     }} >
     <Button title="Buy" color={'white'} fontSize={28} onPress={handleBuy} 
      
      />
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom:20,
    backgroundColor:'white'
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cell: {
    flex: 1,
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom:20
  },
});

export default ProductTable;
