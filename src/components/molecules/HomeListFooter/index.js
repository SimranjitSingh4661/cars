import React, { Fragment } from "react";
import { View, Text } from "react-native";
import { COLORS } from "src/styles/themes";
import { UnistylesRuntime, createStyleSheet, useStyles } from "react-native-unistyles";
import { moderateScale, SCREEN_PADDING } from "@utils/scaling";
import { HorsepowerIcon, TransmissionIcon } from "@assets/SVGs";
import { Divider } from "@components/atoms";
import { SharedStyles } from "src/shared";
import { Button } from "@components/atoms";
import { CarGalleryList } from "..";

const stylesheet = createStyleSheet((theme) => ({
  container: {
    paddingHorizontal: SCREEN_PADDING,
  },
  titleText: {
    color: COLORS.white,
    fontSize: moderateScale(25),
  },
  priceContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  priceText: {
    paddingTop: 7,
    borderWidth: 2,
    paddingBottom: 5,
    paddingLeft: 16,
    paddingRight: 14,
    borderRadius: 20,
    color: COLORS.white,
    fontSize: moderateScale(12),
    borderColor: COLORS.buttonBlue,
  },
  desText: {
    marginTop: 20,
    color: COLORS.white,
    fontSize: moderateScale(12),
  },
  specText: {
    color: COLORS.white,
    fontSize: moderateScale(16.6),
  },
  footerContainer: {
    flex: 1,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
  icon: {
    width: 50,
    height: 50,
    borderWidth: 0.4,
    marginRight: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.borderLightGrey,
  },
  iconTitleText: {
    color: COLORS.textGreyLight,
    fontSize: moderateScale(12.9),
  },
  iconDesText: {
    color: COLORS.white,
    fontSize: moderateScale(16.6),
  },
  button: {
    marginTop: 50,
    marginBottom: 40,
  },
}));

const HomeListFooter = ({ data }) => {
  const { styles, theme } = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === "dark";

  return (
    <Fragment>
      <CarGalleryList Data={data?.carGallery} />
      <View style={styles.container}>
        <View style={SharedStyles.row}>
          <View style={SharedStyles.fullFlex}>
            <Text style={styles.titleText}>{data?.title}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>{data?.price}</Text>
          </View>
        </View>
        <Text style={styles.desText}>{data?.description}</Text>
        <Divider containerStyles={{ marginVertical: 25 }} />
        <Text style={styles.specText}>{"Specifications"}</Text>
        <View style={SharedStyles.row}>
          {data?.specifications?.map((item, index) => {
            return (
              <View style={styles.footerContainer}>
                <View style={styles.icon}>
                  {index == 0 ? <HorsepowerIcon /> : <TransmissionIcon />}
                </View>
                <View>
                  <Text style={styles.iconTitleText}>
                    {index == 0 ? "Horsepower" : "Transmission"}
                  </Text>
                  <Text style={styles.iconDesText}>
                    {index == 0 ? item?.horsepower : item?.transmission}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        <Button
          containerStyle={styles.button}
          title={"BOOK_NOW"}
          isDisabled={data?.isBtnDisabled}
        />
      </View>
    </Fragment>
  );
};

export default HomeListFooter;
