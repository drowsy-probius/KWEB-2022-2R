import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { AddNewPost } from "./AddNewPost";


export const NewPostScreen = ({ navigation }) => {
  
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <AddNewPost navigation={navigation}/>
    </SafeAreaView>
  );
};

