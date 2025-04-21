import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
const SubHeader = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#88dae0", "#98e1d6", "#9ee4d4"]}
    >
      <Feather name="map-pin" size={20} color={"black"} />
      <Text style={styles.deliver}>Delivered to Türkiye! - 232425</Text>
      <SimpleLineIcons name="arrow-down" size={16} color={"black"} />
    </LinearGradient>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
  },
  deliver: {
    fontSize: 13,
    color: "#2c4341",
    paddingHorizontal: 6,
  },
});
