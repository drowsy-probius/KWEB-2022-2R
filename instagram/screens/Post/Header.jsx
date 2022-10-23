import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import React from 'react'

export default function Header(props) {
  const {post} = props;
  const name = `${post.user.name.first}${post.user.name.last}`;

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity >
        <View style={styles.profileContainer}>
          <ImageBackground
            style={styles.profileBackground}
            source={require("../../assets/instagram/story-unread.png")}
          >
            <Image source={{uri: post.user.picture.medium}} style={styles.profile}/>
          </ImageBackground>
          <Text style={{color: 'white'}}>
            {
              name.toLowerCase()
            }
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity >
        <Image source={require("../../assets/instagram/horizontal-dots-white.png")} style={styles.options} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    alignItems: "center",
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profile: {
    width: 35,
    height: 35,

    left: 1.7,
    top: 2,

    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
  },
  profileBackground: {
    width: 39,
    height: 39,
    marginLeft: 0,
    marginRight: 8,
  },
  options: {
    width: 35,
    height: 35,
  }
})