import { View, StyleSheet } from "react-native";

import ImageList from "./ImageList";
import Comments from "./Comments";

const styles = StyleSheet.create({
  body: {
    flex: 24,
  },
  photos: {
    flex: 7,
    backgroundColor: "black",

  },
  comments: {
    flex: 3,
  }
})

function Body(props){
  const {user, photos} = props;

  return (
    <View style={styles.body}>
      <View style={styles.photos}>
        <ImageList photos={photos} />
      </View>
      <hr style={{width: "99%", margin: 4}}/>
      <View style={styles.comments}>
        <Comments user={user}/>
      </View>
    </View>
  )
}

export default Body;