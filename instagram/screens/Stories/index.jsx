import { 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ImageBackground, 
  TouchableOpacity 
} from 'react-native'
import React from 'react'

import { useSelector } from "react-redux";
import { selectFriends } from "../../redux/friends";

export default function Stories() {
  const friends = useSelector(selectFriends);

  return (
    <View style={styles.storyContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity>
          <View style={styles.myStory}>
            <ImageBackground
              style={styles.myStoryBackground}
            >
              <Image 
                source={require("../../assets/instagram/person.png")} 
                style={styles.myStoryImage}
              />
            </ImageBackground>

            <Image 
              style={styles.myStoryAdd}
              source={require("../../assets/instagram/blue-plus.png")}
            />

            <Text style={{color: 'white', top: 6}}>
              내 스토리
            </Text>
          </View>
        </TouchableOpacity>
        
        {friends.map((friend, idx) => {
          const name = `${friend.name.first}${friend.name.last}`;
          return (
            <TouchableOpacity key={idx}>
              <View style={{ alignItems: 'center', }}>
                <ImageBackground
                  style={styles.storyBackground}
                  source={require("../../assets/instagram/story-unread.png")}
                >
                  <Image source={{uri: friend.picture.medium}} style={styles.story}/>
                </ImageBackground>
                <Text style={{color: 'white'}}>
                  {
                  name.length > 11 
                  ?
                  name.slice(0, 8).toLowerCase() + "..."
                  : 
                  name.toLowerCase()
                  }
                </Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
      <Text style={{color: 'white'}}></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  storyContainer: {
    height: 110,
  },
  myStoryImage: {
    width: 55,
    height: 55,

    left: 5,
    top: 10,

    borderRadius: 50,
    borderWidth: 4, 
  },
  myStoryBackground: {
    width: 65,
    height: 65,

    backgroundColor: "lightgrey",
    borderRadius: 9999,

    marginLeft: 10,
    marginRight: 10,
  },
  myStoryAdd: {
    position: "absolute",

    width: 23,
    height: 23,

    top: 47,
    left: 53,

    borderRadius: 9999,
    borderWidth: 2,
    borderColor: "black",
  },
  myStory: {
    left: 2,
    top: 4,
    alignItems: 'center', 
    justifyContent: "center",
  },
  story: {
    width: 70,
    height: 70,

    left: 2,
    top: 2,

    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'black',
  },
  storyBackground: {
    width: 74,
    height: 74,
    marginLeft: 6,
    marginRight: 3,
  }
})