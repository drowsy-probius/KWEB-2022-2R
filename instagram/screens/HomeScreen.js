import { SafeAreaView, Text, StyleSheet, Platform, StatusBar, View, ScrollView } from "react-native";
import Constants from "expo-constants";
import Header from "./Header";
import Stories from "./Stories";
import { Divider } from "@rneui/themed";

import { useDispatch } from "react-redux";
import { setFriendsValue } from "../redux/friends";
import { setPostsValue } from "../redux/posts";
import { useEffect, useState } from "react";

import { randomUserData, randomPost } from "../data";
import Feed from "./Feed";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // paddingTop: Constants.statusBarHeight,
  },
  statusbar: {
    backgroundColor: "black",
  }
});


function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function createFriendsAndPosts()
    {
      const rand = Math.floor(Math.random() * 15) + 5;
      const friends = await randomUserData(rand);
      console.log(`${friends.length} friends loaded!`);
      dispatch(setFriendsValue(friends));

      const posts = await Promise.all(Array.apply(null, Array(parseInt(Math.random() * 10) + 5)).map(async (i) => {
        const user = friends[parseInt(Math.random() * friends.length)];
        const post = await randomPost(user);
        return post;
      }));
      console.log(`${posts.length} posts loaded!`);
      dispatch(setPostsValue(posts));
    }

    createFriendsAndPosts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={styles.statusbar} />
      <Header />
      <ScrollView>
        <Stories />
        <Divider width={1} orientation='vertical' />
        <Feed />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;