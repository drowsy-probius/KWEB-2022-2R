import { SafeAreaView, Text, StyleSheet, Platform, StatusBar, View } from "react-native";
import Constants from "expo-constants";
import Header from "./Header";
import Stories from "./Stories";

import { useDispatch } from "react-redux";
import { setFriendsValue } from "../redux/friends";
import { useEffect } from "react";

import { randomImageUrl, randomUserData } from "../data";

import { bottomTabIcons, BottomTab } from "./BottomTab/index.jsx";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // paddingTop: Constants.statusBarHeight,
  },
  statusbar: {
    backgroundColor: "black",
  },
  
});


function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function createFriends()
    {
      const rand = Math.floor(Math.random() * 20) + 1;
      const friends = await randomUserData(rand);
      // console.log(friends);
      dispatch(setFriendsValue(friends));
    }

    createFriends();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={styles.statusbar} />
      <Header />
      {/* <View style={{ 
        borderBottomWidth: StyleSheet.hairlineWidth, 
        borderBottomColor: "rgba(255, 255, 255, 0.3)",
        marginBottom: 10,
      }}/> */}
      <Stories />
      <View style={{ 
        borderBottomWidth: StyleSheet.hairlineWidth, 
        borderBottomColor: "rgba(255, 255, 255, 0.2)",
        marginTop: -10,
        marginBottom: 10,
      }}/>
      <BottomTab icons = {bottomTabIcons}></BottomTab>
    </SafeAreaView>
  )
}

export default HomeScreen;