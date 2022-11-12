import { StyleSheet, View, Text } from 'react-native'
import React, { useEffect } from 'react';
import { useCameraDevices, Camera } from 'react-native-vision-camera';

export default function CameraCompo() {
    
    // // Camera
    // const devices = useCameraDevices()
    // const device = devices.back

    // useEffect( () => {
    //     requestCameraPermission()
    // }, [])

    // // Handler
    // const requestCameraPermission = React.useCallback( async () => {
    //     const permission = await Camera.requestCameraPermission();

    //     if (permission === 'denied') await Linking.openSettings()
    // }, [])
    
    // if (device == null) return <View style={styles.wrapper}/>

    // return (
    //    <>
    //    <Camera
    //     style={StyleSheet.absoluteFill}
    //     device={device}
    //     isActive={true}
    //   />
    //    </> 
      
    // )
    return(
      <View>
        <Text>CAMERA</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  wrapper: {
   
    backgroundColor: "black",
  },
})