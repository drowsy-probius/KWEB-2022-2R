import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { AddNewPost } from "./AddNewPost";


export const NewPostScreen = ({ icons }) => {
  
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <AddNewPost/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});
