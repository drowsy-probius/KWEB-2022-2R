import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import DailyStatus from './DailyStatus'

const dayNames = ["Sunday", "Monday", "Tuesday","Wednesday" ,"Thursday" , "Friday", "Saturday"]
const WeeklyStatus = ({weekDateArr}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WeeklyStatus</Text>
      <View style={styles.dayContainer}>
        {weekDateArr.map((date, i) => {
          return (
            <DailyStatus key ={i} dayName={dayNames[i]} date={date}/>
          )
        })}
      </View>
    </View>
  )
}

export default WeeklyStatus


const styles = StyleSheet.create({
    
    container: {
        paddingLeft: 20,
        paddingRight: 40
    },
    
    title: { fontSize: 20, fontWeight: "bold", marginTop: 10 },

    dayContainer: {

    }
})