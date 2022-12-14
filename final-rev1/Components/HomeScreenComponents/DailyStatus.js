import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

import StatusData from '../../Data/Status.json'

import { useSelector } from "react-redux";
import { selectDlswmd } from "../../redux/dlswmd";

const passImg = require('../assets/icon_pass.png')
const failImg = require('../assets/icon_fail.png')
const lateImg = require('../assets/icon_late.png')
const restImg = require('../assets/icon_rest.png')

const DailyStatus = ({dayName, date }) => {
  const dlswmd = useSelector(selectDlswmd);

  const [todayYear, todayMonth, todayDay] = [
    (new Date()).getFullYear(),
    (new Date()).getMonth() + 1, 
    (new Date()).getDate()
  ];
  const [year, month, day] = date.split("-");

  const dayStatus = (() => {
    if(year == todayYear && month == todayMonth && day == todayDay)
    {
      switch(dlswmd.status){
        case 0:
          return "";
        case 1:
          return "ONTIME";
        case 2: 
          return "LATE";
        case 3:
          return "REST";
        case 4:
          return "FAIL";
        default:
          return "";
      }
    }
    else 
    {
      return StatusData[year][month][day-1];
    }
  })();

  const [color, setColor ] = useState('#D9D9D9')
  const [img, setImg ] = useState(NaN)

  useEffect(() => {
    if (dayStatus=="ONTIME"){
      setColor('#E6FFF7')
      setImg(passImg)
    }
    else if (dayStatus=="LATE"){
      setColor('#FFE8CA')
      setImg(lateImg)
    }
    else if (dayStatus=="REST"){
      setColor('#EDF5FA')
      setImg(restImg)
    }
    else if (dayStatus=="FAIL"){
      setColor('#FFDCEE')
      setImg(failImg)
    }
    else {
      setColor('#D9D9D9')
      setImg(NaN)
    }
  }, [dayStatus]);
  
  return (
    <View style={styles.container}>
      <View style={styles.circle(color)}>
        <Image source={img} style={{width: '100%', height:'100%'}} ></Image>
      </View> 
      <View>
        <Text style={styles.dayNameText}>{dayName}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      
      <Text style={styles.statusText}>{dayStatus}</Text>
        
    </View>
  )
}

export default DailyStatus

const styles = StyleSheet.create({
    
  container: {
      marginTop: 12,
      flexDirection: 'row',
      alignItems: 'center',
  },
  
  circle: color => (
    
    {
    height: 36,
    width: 36,
    borderRadius: 30,
    backgroundColor: color,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  }),
  
  dayNameText : {
    fontWeight: 'bold',
  },
  dateText : {
    color: '#787878'
  },

  statusText: {
    fontWeight: 'bold',
    fontSize: 16,
    position: 'absolute', 
    right: 0
  }
})