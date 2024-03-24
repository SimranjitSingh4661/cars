import Reactotron from "reactotron-react-native";
import mmkvPlugin from "reactotron-react-native-mmkv";
import { storage } from "src/syncStorage";

Reactotron.configure() // controls connection & communication settings
  .use(
    mmkvPlugin({
      storage,
      ignore: ["secret"], //keys to be ignored
    }),
  )
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
