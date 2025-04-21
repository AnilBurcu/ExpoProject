import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { CarouselData } from "../data/CarouselData";

const Carousel = () => {
  return (
    <Swiper
      autoplay={true}
      showsButtons={false}
      showsPagination={false}
      style={styles.wrapper}
    >
      {CarouselData.map((item, key) => (
        <View>
          <Image source={item.image} key={item.key} style={styles.imgStyle} />
        </View>
      ))}
    </Swiper>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  wrapper: {
    height: 300,
  },
  imgStyle: {
    width: "100%",
    height: 250,
  },
});
