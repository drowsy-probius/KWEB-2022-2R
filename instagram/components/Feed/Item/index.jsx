import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native"

import Header from "../Header";

const styles = StyleSheet.create({
  feed: {
    borderColor: "#black",
  }
})

const FeedItem = () => {
  const [user, setUser] = useState({});
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    /**
     * https://randomuser.me/
     * https://picsum.photos/
     */
    fetch(`https://randomuser.me/api/`)
    .then(res => res.json())
    .then(data => data.results[0])
    .then(data => {
      setUser(data);
    });

    const photosLength = Math.floor(Math.random() * 5) + 1;
    const newArr = [];
    for(let i=0; i<photosLength; i++)
    {
      newArr.push(`https://picsum.photos/200?random=${i}`);
    }
    setPhotos(newArr);
  }, []);

  return (
    <View style={styles.width}>
      <Header user={user} />
    </View>
  )
}

export default FeedItem;