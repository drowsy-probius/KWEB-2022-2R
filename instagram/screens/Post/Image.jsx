import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function PostImage(props) {
  const {post} = props;

  return (
    <View style={styles.imageConatiner}>
      {
        // post.images.map((url, idx) => (
        //   <Image key={idx} source={{uri: url}} style={{height: "100%", resizeMode: "cover"}} />
        // ))
        <Image source={{uri: post.images[0]}} style={{height: "100%", resizeMode: "cover"}} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  imageConatiner: {
    width: "100%",
    height: 400,
  }
})