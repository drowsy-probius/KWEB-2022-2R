import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import  HomeScreen  from "../HomeScreen";
import  {NewPostScreen}  from "../NewPost/NewPostScreen";
import LoginScreen from "../LoginScreen/LoginScreen";
import SignUpScreen from "../SignUp/SignUpScreen";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false
}

const SignedInStack = () => {

  return(
      <NavigationContainer>
      <Stack.Navigator
        initialRouteName='LogInScreen'
        screenOptions={screenOptions}
      >
        <Stack.Screen name='HomeScreen' component={ HomeScreen } />
        <Stack.Screen name='NewPostScreen' component={ NewPostScreen } />
        <Stack.Screen name='LogInScreen' component={ LoginScreen } />
        <Stack.Screen name='SignUpScreen' component={ SignUpScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
};

export default SignedInStack;
