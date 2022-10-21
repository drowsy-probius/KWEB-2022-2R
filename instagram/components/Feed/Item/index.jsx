import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native"
import Body from "./Body";

import Header from "./Header";

const styles = StyleSheet.create({
  item: {
    height: 662,
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
    
    /**
     * {"_1": 0, "_2": 0, "_3": null, "_4": null} 이거 뭐임?
     */
    fetch(`https://randomuser.me/api/?ts=${Date.now()}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.text())
    .then(data => {
      return JSON.parse(data);
    })
    .then(data => data.results[0])
    .then(data => {
      setUser(data);
    })
    .catch(err => {
      // console.error(err);
      setUser({"gender":"male","name":{"title":"Mr","first":"Diy","last":"Nechiporuk"},"location":{"street":{"number":2002,"name":"Postisheva"},"city":"Pomichna","state":"Odeska","country":"Ukraine","postcode":80673,"coordinates":{"latitude":"74.6090","longitude":"-55.5413"},"timezone":{"offset":"+7:00","description":"Bangkok, Hanoi, Jakarta"}},"email":"diy.nechiporuk@example.com","login":{"uuid":"59d3bb9c-005f-4571-9226-a2b8cc34c762","username":"blackgorilla682","password":"beavis1","salt":"cdw9wDfw","md5":"1bd05ea34b45710bacf4cc62328d4c97","sha1":"e0b57068069ea4c0d5ae7161c66046ac956e545d","sha256":"08c4adf4dde1799f1c1a8271c30fb674fd8e4c2e05655c2766aba446cc458c0f"},"dob":{"date":"1952-12-30T22:43:35.865Z","age":69},"registered":{"date":"2016-12-08T01:19:37.380Z","age":5},"phone":"(098) T22-7441","cell":"(066) F99-7460","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/50.jpg","medium":"https://randomuser.me/api/portraits/med/men/50.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/50.jpg"},"nat":"UA"});
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
      <View style={{width: "99%", marginTop: 0, marginBottom: 3, borderBottomWidth: StyleSheet.hairlineWidth}}/>
      <Body user={user} photos={photos} />
    </View>
  )
}

export default Item;