export const COLORS = {
  appPrimary: "#C171EB",
  danger: "#dc3545",
  error: "#FB4D58",
  grey: "#B0B0B0",
  black: "#000000",
  white: "#ffffff",
  blue: "#001EB9",
  light: "#f8f9fa",
  inputText: "#CFCFCF",
  textGray: "#878997",
  textGreyLight: "#8C8BA7",
  blue: "#1C568C",
  lightBlue: "#F1F5F9",
  buttonBlue: "#314FF6",
  dividerColor: "#3b3f4a",
  borderLightGrey: "rgba(255, 255, 255, 0.15)",
  welcomeBG: "#0e1222",
};

export const FONT_SIZE = {
  xsm: 12,
  sm: 14,
  sm2: 16,
  md: 18,
  lg: 20,
  lg2: 22,
  xl: 24,
};

export const MARGIN = {
  sm: 2,
  md: 4,
  lg: 8,
  xl: 12,
};

export const lightTheme = {
  colors: {
    ...COLORS,
    typography: "#000000",
    background: "#ffffff",
    barStyle: "dark-content",
    opacity50: "rgba(1,1,1,0.5)",
    textInputColor: "rgba(217, 217, 217,0.2)",
    placeholder: "rgba(1,1,1,0.52)",
    darkwhite: "#000000",
  },
  margins: MARGIN,
  fontSize: FONT_SIZE,
};

export const darkTheme = {
  colors: {
    ...COLORS,
    typography: "#ffffff",
    background: "#000000",
    barStyle: "light-content",
    opacity50: "rgba(201, 201, 201,0.5)",
    textInputColor: "#000000",
    placeholder: "#f8f9fa",
    darkwhite: "#ffffff",
  },
  margins: MARGIN,
  fontSize: FONT_SIZE,
};
