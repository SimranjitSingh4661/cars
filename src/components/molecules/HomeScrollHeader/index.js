import React, { forwardRef } from "react";
import { FlatList, Dimensions } from "react-native";
import FastImage from "react-native-fast-image";

const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;

const HomeScrollHeader = forwardRef(({ handleScroll, Data }, ref) => {
  if (Data?.length === 0) return null;

  return (
    <FlatList
      horizontal
      ref={ref}
      data={Data}
      pagingEnabled
      bounces={false}
      decelerationRate="fast"
      onScroll={handleScroll}
      scrollEventThrottle={16}
      renderItem={({ item }) => {
        return (
          <FastImage
            source={item}
            style={{ width: WIDTH, height: HEIGHT }}
            resizeMode={FastImage.resizeMode.cover}
          />
        );
      }}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString() + "image"}
    />
  );
});

export default HomeScrollHeader;
