import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native"
import Body from "./Body";

import Header from "./Header";

const styles = StyleSheet.create({
  item: {
    height: "40em",
    display: "flex",

    borderColor: "grey",
    borderRadius: 10,
    borderWidth: 2,

    marginBottom: 20,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
  },
})

const Item = () => {
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
      newArr.push(`https://picsum.photos/400?random=${i}}`);
    }
    setPhotos(newArr);
  }, []);

  return (
    <View style={styles.item}>
      <Header user={user} />
      <hr style={{width: "99%", marginTop: 0, marginBottom: 3}}/>
      <Body user={user} photos={photos} />
    </View>
  )
}

export default Item;