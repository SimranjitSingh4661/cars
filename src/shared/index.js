import { StyleSheet } from "react-native";

export const SharedStyles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  fullFlex: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  flexOneCenter: {
    flex: 1,
    alignItems: "center",
  },
  shadow: {
    shadowColor: "black",
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.19,
  },
});
