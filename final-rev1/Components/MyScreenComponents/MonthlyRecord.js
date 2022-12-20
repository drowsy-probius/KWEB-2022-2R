import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import { VictoryPie } from "victory-native";
import StatusData from '../../Data/Status.json'

const MonthlyRecord = () => {


    const getThisMonth = () => {    /* ['2022', '11', 'November'] return*/
        let yourDate = new Date();
        const offset = yourDate.getTimezoneOffset();  //현재기준으로 변환
        yourDate = new Date(yourDate - offset * 60 * 1000);
        
        let arrDate = yourDate.toISOString().split("-"); //["2022", "11", "25"]
        const month_names = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
            ];
        
        return [arrDate[0], arrDate[1], month_names[arrDate[1]-1]]
    };

    const dateInfo = getThisMonth()

    const monthData = StatusData[dateInfo[0]][dateInfo[1]]

    const ONTIME = monthData.filter(x => x=="ONTIME").length
    const REST = monthData.filter(x => x=="REST").length
    const FAIL = monthData.filter(x => x=="FAIL").length
    const LATE = monthData.filter(x => x=="LATE").length
    return (
    <View style={styles.container}>
        <Text style={styles.title}>{dateInfo[2]}</Text>
        <VictoryPie
            data={[
                {x: "ONTIME", y: ONTIME},
                {x: "LATE", y: LATE},
                {x: "FAIL", y: FAIL},
                {x: "REST", y: REST},
            ]}
            innerRadius={60}
            labelPosition='centroid'
            labelRadius={({ innerRadius }) => innerRadius + 16 }
            colorScale={["#E6FFF7", "#FFE8CA", "#FFDCEE", "#EDF5FA" ]}
        />
    </View>
  )
}

export default MonthlyRecord

const styles = StyleSheet.create({
    title: { fontSize: 20, fontWeight: "bold", marginTop: 10 },
    
    container: {
        alignItems: "center",
        justifyContent: "center",
    
      },
})