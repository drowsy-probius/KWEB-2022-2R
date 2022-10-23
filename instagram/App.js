import HomeScreen from "./screens/HomeScreen"
import { Provider } from "react-redux";
import store from "./redux/store";
import { NewPostScreen } from "./screens/NewPost/NewPostScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";

export default function App() {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
}
