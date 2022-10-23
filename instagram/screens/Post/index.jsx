import { StyleSheet, View } from 'react-native'
import React from 'react'
import PostHeader from './Header';
import PostImage from './Image';
import PostFooter from './Footer';

export default function Post(props) {
  const {post} = props;

  return (
    <View style={styles.postContainer}>
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{marginHorizontal: 15, marginTop: 10, }}>
        <PostFooter post={post} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 30,
  }
})