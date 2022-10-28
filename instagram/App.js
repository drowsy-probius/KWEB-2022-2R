import SignedInStack from "./screens/Navigations";
/**
 * for redux
 */
import { Provider } from "react-redux";
import store from "./redux/store";

/**
 * for react-native-elements
 * ( @rneui/themed @rneui/base )
 */
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>  
      <Provider store={store}>
        {/* 메인 피드 화면 들어가고 싶으면 SignedInStack -> (19번째줄) initialRouteName='HomeScreen' 으로 변경!*/}
        <SignedInStack/>
      </Provider>
    </SafeAreaProvider>
  );
}
