import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Brand1 from "../assets/brand1.jpeg";
import Brand2 from "../assets/brand2.jpeg";
import Brand3 from "../assets/brand3.jpeg";
import Brand4 from "../assets/brand4.jpeg";

const Brands = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Brands of Day</Text>

        <View style={styles.row}>
          <View style={styles.brands}>
            <Image source={Brand1} style={styles.imageStyle} />
            <Text style={styles.brandTitle}>
              Min. 20% off | Fossil, Titan, Smart and more
            </Text>
          </View>
          <View style={styles.brands}>
            <Image source={Brand2} style={styles.imageStyle} />
            <Text style={styles.brandTitle}>
              Min. 20% off | Fossil, Titan, Smart and more
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.brands}>
            <Image source={Brand3} style={styles.imageStyle} />
            <Text style={styles.brandTitle}>
              Min. 20% off | Fossil, Titan, Smart and more
            </Text>
          </View>
          <View style={styles.brands}>
            <Image source={Brand4} style={styles.imageStyle} />
            <Text style={styles.brandTitle}>
              Min. 20% off | Fossil, Titan, Smart and more
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: "#dddddd",
  },
  innerContainer: {},
  title: {
    fontSize: 18,
    color: "#000000",
    padding: 10,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
  },
  brands: {
    width: "50%",
    padding: 4,
  },
  imageStyle: {
    height: 150,
    width: "100%",
    borderRadius: 10,
  },
  brandTitle: {
    color: "#000000",
    fontSize: 12,
    marginTop: 5,
  },
});
