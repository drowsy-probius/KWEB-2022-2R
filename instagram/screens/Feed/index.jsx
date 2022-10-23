import { StyleSheet, View } from 'react-native'
import React from 'react'
import Post from '../Post'

import { useSelector } from "react-redux";
import { selectPosts } from "../../redux/posts";

export default function Feed() {
  const posts = useSelector(selectPosts);

  return (
    <View>
      {
        posts.map((post, idx) => (
          <Post key={post.id} post={post} />
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({})