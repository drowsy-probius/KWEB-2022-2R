import { useState } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import ImageView from "./ImageView";

const styles = StyleSheet.create({
  imageList: {
    height: "100%",
  },

  floatButton: {
    position: "absolute",
    top: "50%",

    paddingTop: 1.2,
    paddingBottom: 1.2,
    paddingLeft: 4,
    paddingRight: 4,
    marginLeft: 10,
    marginRight: 10,

    backgroundColor: "rgba(230, 230, 230, 0.6)",

    borderRadius: 9999,
    zIndex: 999,
  },
  floatLeft: {
    alignSelf: "flex-start",
  },
  floatRight: {
    alignSelf: "flex-end",
  },

});

function ImageList(props)
{
  const {photos} = props;
  const [photoIdx, setPhotoIdx] = useState(0);


  const nextImage = (e) => {

  }
  const prevImage = (e) => {

  }

  return (
    <>
    {
      photos.length === 0 
      ?
      null 
      :
      <View style={styles.imageList}>
        {
          photoIdx === 0
          ? 
          null 
          :
          <View style={[styles.floatLeft, styles.floatButton]}>
            <Pressable onPress={prevImage}>
              <Text style={{fontWeight: "bold"}}>{`<`}</Text>
            </Pressable>
          </View>
        }
        
        <ImageView photo={photos[0]} />
     
        {
          photos.length === 1 || photoIdx-1 === photos.length 
          ? 
          null 
          :
          <View style={[styles.floatRight, styles.floatButton]}>
            <Pressable onPress={nextImage}>
              <Text style={{fontWeight: "bold"}}>{`>`}</Text>
            </Pressable>
          </View>
        }
      </View>
    }
    </>
  )
}

export default ImageList;