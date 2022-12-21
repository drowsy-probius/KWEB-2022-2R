import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { useSelector } from "react-redux";
import { selectPhoto } from "../redux/photo";

const VerifyScreen = ({navigation}) => {

  const snapshot = useSelector(selectPhoto);

  const goToHome = () => {
    navigation.navigate('Home');
  }

  const goToCamera = () => {
    navigation.navigate('CameraInner');
  }

  // console.log(snapshot)
  // console.log("THIS IS LOGGED: "+ snapshot.photoInfo)

  return (
    <View style={styles.container}>
      {/* <View style={styles.imageContainer}>
        < Image
          source={{ uri: snapshot.photoInfo }}
          styles={{width: 100, height: 100}}
        />
        <Text>{snapshot.detected} Detected</Text>
      </View> */}
      <View style={styles.box}>
        <View style={{flexDirection: 'row'}}>
            <Text style={[ styles.question, {fontWeight: 'bold', color: '#6763CE', fontSize: 24}]}>{snapshot.detected[0]} </Text>
            <Text style={[ styles.question, {fontWeight: 'bold', fontSize: 24}]}>Detected</Text>
        </View>
        <Text style={styles.question}>Use this image to verify.</Text>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.buttonsBack} onPress={goToCamera}>
            <Text style={styles.buttonTextBack}>BACK</Text>
          </Pressable>
          <Pressable style={styles.buttonsOk} onPress={goToHome}>
            <Text style={styles.buttonTextOk}>OK</Text>
          </Pressable>
        </View>
      </View>
      
    </View>
  )
}

export default VerifyScreen

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',    
    alignContent: 'center',
    flex: 1,
  },

  box:{
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    marginHorizontal: 60,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },


  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },

  buttonsBack: {
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F0FE',
    borderRadius: 10,
    margin: 10,
  },

  buttonsOk: {
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6763CE',
    borderRadius: 10,
    margin: 10,
  },

  buttonTextBack: {
    color: 'black',
    fontWeight: 'bold',
  },

  buttonTextOk: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  question: {
    marginTop: 10,
    fontSize: 16,
  }
})
