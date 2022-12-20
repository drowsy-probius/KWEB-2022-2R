import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import DisplayGoal from './HomeScreenComponents/DisplayGoal'
import BodyContent from './HomeScreenComponents/BodyContent'


const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <DisplayGoal />     
      <BodyContent />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF'
    },

    h1: {
        fontStyle: 'normal',
        fontSize: 28,
        fontWeight: 'bold',
    }
});
