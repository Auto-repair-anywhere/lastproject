import React from "react";
import { View, StyleSheet,Text } from "react-native";
import ProductTable from "./proTbale.jsx";
import Navv from "./nav.jsx";

const Cart = () => {
  const wishlist = [
    { id: 1, name: "Product 1", price: 10.00 },
    { id: 2, name: "Product 2", price: 20.00 },
    { id: 3, name: "Product 3", price: 30.00 },
    { id: 4, name: "Product 1", price: 10.00 },
    { id: 5, name: "Product 1", price: 10.00 },
    { id: 6, name: "Product 1", price: 10.00 },
    { id: 7, name: "Product 1", price: 10.00 },
    { id: 8, name: "Product 1", price: 10.00 },
    { id: 9, name: "Product 1", price: 10.00 },
    { id: 10, name: "Product 1", price: 10.00 },
    { id: 11, name: "Product 1", price: 10.00 }
  ];

  return (
    <View style={styles.container}>
      <ProductTable data={wishlist} />
      
      <Navv/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Cart;
