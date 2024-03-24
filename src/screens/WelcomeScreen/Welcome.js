import React, { useState } from "react";
import { View, StatusBar, FlatList } from "react-native";
import { CARS, CARS_GALLERY } from "src/dummyData";
import { width } from "@utils/scaling";
import { HomeListFooter } from "@components/molecules";
import { HomeScrollHeader } from "@components/molecules";
import { COLORS } from "src/styles/themes";

const renderItem = () => {
  return null;
};

const Welcome = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / width);
    if (scrollIndex !== index) {
      setScrollIndex(index);
    }
  };

  return (
    <View
      style={{
        backgroundColor: COLORS.welcomeBG,
      }}
    >
      <StatusBar translucent={true} backgroundColor="transparent" />
      <FlatList
        bounces={false}
        data={CARS_GALLERY}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString() + "home"}
        ListFooterComponent={<HomeListFooter data={CARS_GALLERY[scrollIndex]} />}
        ListHeaderComponent={<HomeScrollHeader handleScroll={handleScroll} Data={CARS} />}
      />
    </View>
  );
};

export default Welcome;
