import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",

    paddingBottom: "15px",
    paddingTop: "10px",
    paddingLeft: "40px",
    paddingRight: "40px",
  },

  profileAndUsername: {
    flexDirection: "row",
  },  

  profile: {
    width: 30,
    height: 30,
    alignSelf: "flex-start",
    marginRight: 10,

    borderRadius: 9999,
    borderColor: "white",
  },

  username: {
    marginBottom: 0,
    fontWeight: "bold",
    marginTop: 5,
  },

  buttons: {
    alignSelf: "flex-end",
  },
});


function Header(props) {
  const {user} = props; 
  
  return (
    <View style={styles.header}>
      <Pressable style={styles.profileAndUsername}>
        <Image 
          style={styles.profile} 
          source={{
            uri: user.picture?.thumbnail || `https://picsum.photos/100`,
          }}
        />
        <Text style={styles.username} >{user.name?.last || "John Doe"}</Text>
      </Pressable>
      <View style={styles.buttons}>
        <Text>...</Text>
      </View>
    </View>
  )
}



export default Header;