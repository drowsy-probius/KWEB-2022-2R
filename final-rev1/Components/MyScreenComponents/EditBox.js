import { View, Text, Image, Pressable, StyleSheet, Modal } from 'react-native'
import React from 'react'
import Goal from '../../Data/Goal.json'


const EditBox = ({content}) => {

    let text;
    if (content==="Time"){
        var hour = parseInt(Goal.Time.hour)
        var minute = parseInt(Goal.Time.minute)
        if (Goal.Time.ampm === "PM"){
            hour = hour -12
        } 
        if (hour < 10){
            hour = "0"+hour.toString()
        }
        if (minute < 10){
            minute = "0"+minute.toString()
        }

        text = hour +":"+minute+" "+Goal.Time.ampm
    }
    else{
        let temp = Goal.Objects
        text = temp.obj1 +", "+temp.obj2
    }
  
  
  return (
    <View style={styles.container} >
        <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Text style={{fontSize: 16, marginRight: 10}}>{content}</Text>
            <Image source={require('../assets/edit.png')} style={{width: 12, height: 12}}/>
        </View>

        <Text style={styles.goalText}>{text}</Text>
        
    </View>
  )
}

export default EditBox

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#F2F0FE',
    width: 140,
    height: 70,
    borderRadius: 20,
    margin: 10,
    padding: 10,
    alignContent: 'center'
  },

  goalText: {
     color: '#6763CE',
     fontWeight: 'bold',
     fontSize: 20,

     
  }

})