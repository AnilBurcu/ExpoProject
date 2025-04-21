import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RecentSearchData } from "../data/RecentSearchData";

const ServicesCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Image style={styles.serviceImg} source={item.image} />
    </View>
  );
};

export default ServicesCard;

const styles = StyleSheet.create({
  container: {
    width: 140,
    padding: 5,
    marginLeft: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  title: {
    fontSize: 14,
    marginBottom: 8,
    color: "#000000",
  },
  serviceImg: {
    width: "100%",
    height: 130,
  },
});
