import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import React from 'react'

export const statusList = [
    {
      name: 'none',
      src: require(''),
      color: '#FFFFFF'
    },
    {
      name: 'check',
      src: require('../assets/icons/check.png'),
      color: '#C7DDB2'
    },
    {
      name: 'rest',
      src: require('../assets/icons/rest.png'),
      color: '#E2E2E2'
    },
    {
      name: 'warning',
      src: require('../assets/icons/warning.png'),
      color: '#FFE1E1'
    }
  ]

export default WeeklyStatus = ({status}) => {
  return (
    <View>
        <View style={styles.box}>
            <Text style={styles.p}>Monday</Text>
            <Image/>
            {console.log("TEST")}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    box: {
      width: '100%',
      height: 40,
      backgroundColor: '#FFF',
      marginTop: 16,
      borderRadius: 10,
      justifyContent: 'center',
      paddingLeft: 16
    },
    p: {
        fontSize: 14,
        fontFamily: 'Arial',
        fontWeight: 'bold'
      }
})