import { View, StyleSheet } from "react-native"

import Item from "./Item";

const styles = StyleSheet.create({
  feed: {
    flex: 1,
  }
})

const Feed = () => {
  const mock = [0, 1, 2, 3, 4];

  return (
    <View style={styles.feed}>
      {
        mock.map(i => (
          <Item key={i} />
        ))
      }
    </View>
  )
}

export default Feed;