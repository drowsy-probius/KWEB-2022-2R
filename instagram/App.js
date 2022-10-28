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
        <SignedInStack/>
      </Provider>
    </SafeAreaProvider>
  );
}
