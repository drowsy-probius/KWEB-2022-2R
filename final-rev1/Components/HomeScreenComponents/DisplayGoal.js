import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import Goal from "../../Data/Goal.json"

const DisplayGoal = () => {

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
    
  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.h1}>My Goal</Text>
            <View style={styles.goal_container}>
                <Text style={styles.p}>Time: </Text>
                <Text style={styles.p_special}> {hour}:{minute} {Goal.Time.ampm} </Text>
                <Text style={styles.p}> Object: </Text>
                <Text style={styles.p_special}> {Goal.Objects.obj1}, {Goal.Objects.obj2} </Text>
            </View>
        </View>

    </View>
  )
}

export default DisplayGoal


const styles = StyleSheet.create({
    container: {
      height: 160,
      backgroundColor: '#6763CE',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomEndRadius: 30, 
      borderBottomStartRadius: 30,
      paddingTop: 24,
    },

    h1: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },

    goal_container: {
        marginTop: 24,
        backgroundColor: '#FFF',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 10,
        width: 300,
    },

    p:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    p_special: {
        fontSize: 16,
        backgroundColor: 'rgba(103, 99, 206, 0.24)'
    }
})


