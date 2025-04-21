import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Category } from "../data/Categories";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../utils/rooter";

const Categories = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {Category.map((item, key) => (
        <TouchableOpacity
          key={item.id}
          style={styles.category}
          onPress={() => navigation.navigate(SCREENS.PRODUCTSCREEN)}
        >
          <Image style={styles.imgStyle} source={item.image} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  category: {
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: { width: 50, height: 50 },
  title: { color: "#2c4341" },
});
