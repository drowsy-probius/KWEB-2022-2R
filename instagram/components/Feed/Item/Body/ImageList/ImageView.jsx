import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageView: {

    height: "100%",
    width: "50%",

    alignSelf: "center",
  },
  image: {
    aspectRatio: 1/1,
    height: "100%",
    alignSelf: "center",

    top: 0,
    left: 0,
    right: 0,
    left: 0,
  }
})

function ImageView(props)
{
  const {photo} = props;

  console.log(photo);

  return (
    <View style={styles.imageView}>
      <Image 
        style={styles.image}
        source={`${photo}${Date.now()}`}
      />
    </View>
  )
}

export default ImageView;