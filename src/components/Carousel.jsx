import { Image, StyleSheet, View } from "react-native";
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
      {CarouselData.map((item) => (
        <View key={item.id}>
          <Image source={item.image} style={styles.imgStyle} />
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
