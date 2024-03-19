import React from "react";
import { View, Text, StyleSheet, Image, useWindowDimensions } from "react-native";

export default function Tips({ item }) {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image source={item.image} style={[styles.image, { width }]} />

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"white"
  },
  image: {
    flex: 0.7,
    resizeMode: 'contain',
  },
  content: {
    flex: 0.3,
    alignItems: 'center',
    paddingTop: 10,
  },
  description: {
    fontWeight: '300',
    color: "#62656b",
    textAlign: "center",
    fontSize:13
    },
  title: {
    fontWeight: '800',
    color: "#62656b",
    textAlign: "center",
    fontSize: 28,
    marginBottom: 10,
  },
});
