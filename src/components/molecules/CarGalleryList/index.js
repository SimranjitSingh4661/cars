import React, { forwardRef, useState, Fragment, useEffect } from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import { UnistylesRuntime, createStyleSheet, useStyles } from "react-native-unistyles";
import { moderateScale, verticalScale } from "@utils/scaling";
import { generateRandomKey } from "@utils/helperFunctions";

const stylesheet = createStyleSheet((theme) => ({
  selectImage: {
    marginTop: 40,
    borderRadius: 20,
    marginBottom: 20,
    alignSelf: "center",
    width: moderateScale(200),
    height: verticalScale(170),
  },
  listContainer: {
    paddingBottom: 20,
  },
  mT40: {
    marginTop: 40,
  },
  listImageContainer: {
    width: moderateScale(80),
    height: verticalScale(80),
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 10,
  },
  listImage: {
    width: moderateScale(100),
    height: verticalScale(100),
    borderRadius: 20,
    marginRight: 20,
  },
}));

const CarGalleryList = forwardRef(({ handleScroll, Data }, ref) => {
  const { styles, theme } = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === "dark";

  if (!Data?.length) return <View style={styles.mT40} />;

  useEffect(() => {
    setActive({ index: 0, image: Data?.[0] });
  }, [Data?.[0]]);

  const [active, setActive] = useState({ index: 0, image: Data?.[0] });

  return (
    <View>
      <FastImage
        source={active.image}
        style={styles.selectImage}
        resizeMode={FastImage.resizeMode.cover}
      />
      <FlatList
        index={0}
        data={Data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        keyExtractor={() => generateRandomKey(8)}
        renderItem={({ item, index }) => {
          return (
            <Fragment>
              <TouchableOpacity
                activeOpacity={0.7}
                style={[
                  styles.listImageContainer,
                  {
                    borderWidth: active.index === index ? 1 : 0,
                    borderColor: active.index === index ? "blue" : "transparent",
                  },
                ]}
                onPress={() => setActive({ index, image: item })}
              >
                <FastImage
                  source={item}
                  style={styles.listImage}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </TouchableOpacity>
            </Fragment>
          );
        }}
      />
    </View>
  );
});

export default CarGalleryList;
