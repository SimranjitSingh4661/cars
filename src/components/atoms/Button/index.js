import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { COLORS } from "src/styles/themes";
import fontFamily from "@constants/fontFamily";
import { UnistylesRuntime, createStyleSheet, useStyles } from "react-native-unistyles";
import { moderateScale, verticalScale } from "@utils/scaling";
import { useTranslation } from "react-i18next";

const stylesheet = createStyleSheet((theme) => ({
  container: {
    borderRadius: 100,
    alignItems: "center",
    backgroundColor: COLORS.buttonBlue,
    paddingHorizontal: moderateScale(40),
  },
  linearGradient: {
    padding: moderateScale(2),
  },
  labelText: {
    color: COLORS.white,
    fontSize: theme.fontSize.sm2,
    lineHeight: theme.fontSize.lg2,
    fontFamily: fontFamily.nunitoBold,
  },
  loader: {
    alignSelf: "center",
    justifyContent: "center",
    ...StyleSheet.absoluteFillObject,
  },
}));

const Button = ({
  title,
  isSolid = true,
  containerStyle,
  textStyle = {},
  onPress,
  isDisabled = false,
  isLoading = false,
  compact = false,
}) => {
  const { styles, theme } = useStyles(stylesheet);
  const { t } = useTranslation();
  const isDarkMode = UnistylesRuntime.themeName === "dark";
  const color = !isSolid ? COLORS.blue : COLORS.white;
  const textColor = isLoading ? color : color;

  const onPressHandler = () => {
    if (isDisabled || isLoading) {
      return;
    }
    onPress?.();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={isDisabled ? null : onPressHandler}
      style={[containerStyle, { opacity: isDisabled ? 0.3 : 1 }]}
    >
      <View
        style={[
          styles.container,
          {
            borderWidth: isDisabled ? 0.9 : 0,
            paddingVertical: compact ? verticalScale(8) : verticalScale(15),
            borderColor: isDisabled ? "rgba(255, 255, 255, 0.5)" : COLORS.buttonBlue,
            backgroundColor: isDisabled ? "rgba(49, 79, 246, 0.2)" : COLORS.buttonBlue,
          },
        ]}
      >
        <Text style={[styles.labelText, { color: COLORS.white }, textStyle]}>{t(title)}</Text>
        <View style={[styles.loader, { opacity: isLoading ? 1 : 0 }]}>
          <ActivityIndicator color={COLORS.white} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
