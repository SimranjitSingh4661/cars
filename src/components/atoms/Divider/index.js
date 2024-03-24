import React from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { COLORS } from "src/styles/themes";

const stylesheet = createStyleSheet((theme) => ({
  divider: {
    height: 1.5,
    width: "100%",
    borderRadius: 50,
    backgroundColor: COLORS.dividerColor,
  },
}));

const Divider = ({ containerStyles = {} }) => {
  const { styles } = useStyles(stylesheet);
  return <View style={[styles.divider, containerStyles]} />;
};

export default Divider;
