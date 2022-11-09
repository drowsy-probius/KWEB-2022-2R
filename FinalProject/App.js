import { StyleSheet, Text, View, LoadingView, Linking } from 'react-native';
import React, { useEffect } from 'react';
import CameraCompo from './Components/CameraCompo';

export default function App() {


   return(
    <>
      <View>
          <CameraCompo/>
      </View>
    </>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
