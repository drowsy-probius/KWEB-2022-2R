import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
import CameraStackScreen from "./CameraScreen";
import HomeScreen from "./HomeScreen";
import MyScreen from "./MyScreen";

const Tab = createBottomTabNavigator();

const footer_icons = [
  {
    name: "Camera",
    activated: require("./assets/footer_camera_activated.png"),
    deactivated: require("./assets/footer_camera_deactivated.png"),
  },
  {
    name: "Home",
    activated: require("./assets/footer_home_activated.png"),
    deactivated: require("./assets/footer_home_deactivated.png"),
  },
  {
    name: "My",
    activated: require("./assets/footer_my_activated.png"),
    deactivated: require("./assets/footer_my_deactivated.png"),
  },
];

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Camera"
        
        screenOptions={({ route }) => ({
          headerShown: false,
          
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? footer_icons[1].activated
                : footer_icons[1].deactivated;
            } else if (route.name === "My") {
              iconName = focused
                ? footer_icons[2].activated
                : footer_icons[2].deactivated;
            } else if (route.name === "Camera") {
              iconName = focused
                ? footer_icons[0].activated
                : footer_icons[0].deactivated;
            }


            // You can return any component that you like here!
            return (
              <Image source={iconName} style={{ width: 25, height: 25 }} />
            );
          },
          tabBarActiveTintColor: "#6763CE",
          tabBarInactiveTintColor: "#787878",
          tabBarStyle: {
            height: 72,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 10,

          },
          tabBarItemStyle:{
            margin: 8,
            borderRadius:10,
          },
          

        })}
      >
        <Tab.Screen 
          name="Camera" 
          component={CameraStackScreen} 
          options={{ 
            headerTransparent: true,
            animationTypeForReplace: 'pop',
          }}          
          />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My" component={MyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
