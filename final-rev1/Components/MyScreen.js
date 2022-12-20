import { View, Text, StyleSheet, Pressable } from 'react-native'
import React , { useState } from 'react'

import MonthlyRecord from './MyScreenComponents/MonthlyRecord'
import EditBox from './MyScreenComponents/EditBox'
import EditTimeModel from './MyScreenComponents/EditTimeModel'

const MyScreen = () => {

  const [showModalTime, setShowModalTime] = useState(false);
  const [showModalObject, setShowModalObject] = useState(false);

  const onLongPressTime = () =>{
    setShowModalTime(true)
  }

  const onLongPressObject = () =>{
    setShowModalObject(true)
  }
  
  return (
    <View style={styles.container}>
        <Text style={styles.h1}>My Page</Text>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <Pressable onLongPress={onLongPressTime}>
            <EditBox content={"Time"}/>
          </Pressable>
          <Pressable onLongPress={onLongPressObject}>
            <EditBox content={"Objects"}/>
          </Pressable>
        </View>
        <MonthlyRecord/>
        <EditTimeModel visible = {showModalTime}/>
    </View>
  )
}

export default MyScreen

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center'
    },
   
    h1: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 40
    },

    
})