import { View, StyleSheet } from "react-native"

import Item from "./Item";

const styles = StyleSheet.create({
  feed: {
    borderColor: "#black",
  }
})

const Feed = () => {
  const mock = [0, 1, 2, 3, 4];

  return (
    <View style={styles.width}>
      {
        mock.map(i => (
          <Item key={i} />
        ))
      }
    </View>
  )
}

export default Feed;