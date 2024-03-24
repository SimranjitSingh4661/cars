import "./src/styles/unistyles";
import React, { Fragment } from "react";
import { Platform, UIManager } from "react-native";
import Routes from "@navigations/Routes";
import { LoaderService, NavigationService } from "./src/services";
import LoadingScreen from "@screens/LoadingScreen";

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  return (
    <Fragment>
      <Routes ref={(navRef) => NavigationService.setNavigatorRef(navRef)} />
      <LoadingScreen ref={(ref) => LoaderService.setRef(ref)} />
    </Fragment>
  );
};

export default App;
