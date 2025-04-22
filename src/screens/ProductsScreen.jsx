import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductData } from "../data/ProductData";
import PrimeLogo from "../assets/prime-logo.png";
import { getRating } from "../utils/helpers";
const ProductsScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Results</Text>
        <Text style={styles.tagline}>
          Price and other details may very based on product aside and color
        </Text>
        {ProductData.map((item) => (
          <View style={styles.productSection}>
            <View style={styles.productImageSection}>
              <Image source={item.image} style={styles.productImage} />
            </View>
            <View style={styles.productDetailSection}>
              <Text style={styles.sponsored}>Sponsored</Text>
              <Text style={styles.productName}>{item.productName}</Text>

              <View style={styles.row}>
                <Text style={styles.rating}>{item.rating}</Text>
                {getRating(item.rating)}
                <Text style={styles.ratingCount}>{item.ratingCount}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.crossOutText}>{item.crossOutText}</Text>
              </View>

              <Text style={styles.cashback}>
                Up to 5% cashback with Amazon Pay Credit Card
              </Text>
              <Image source={PrimeLogo} style={styles.logo} />
              <Text style={styles.deliveryBy}>
                Free delivery by{" "}
                <Text style={styles.deliveryDate}>{item.deliveryBy}</Text>
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tagline: {
    fontSize: 11,
    color: "gray",
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  productSection: {
    borderWidth: 1,
    borderColor: "#dddddd",
    flexDirection: "row",
    marginVertical: 15,
  },
  productImageSection: {
    width: "40%",
    backgroundColor: "#dddddd",
    justifyContent: "center",
  },
  productDetailSection: {
    width: "60%",
    padding: 10,
  },
  sponsored: {
    fontSize: 11,
    color: "#000000",
    fontWeight: "bold",
  },
  productName: {
    fontSize: 11,
    color: "#000000",
    lineHeight: 18,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rating: {
    fontSize: 10,
    color: "#017185",
    marginTop: 5,
  },
  ratingCount: {
    fontSize: 10,
    color: "#017185",
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    color: "#000000",
  },
  crossOutText: {
    fontSize: 10,
    color: "gray",
  },
  cashback: {
    fontSize: 9,
    marginVertical: 3,
  },
  logo: {
    width: 50,
    height: 18,
    marginVertical: 3,
  },
  deliveryBy: {
    fontSize: 10,
  },
  deliveryDate: {
    fontWeight: "bold",
  },
});
