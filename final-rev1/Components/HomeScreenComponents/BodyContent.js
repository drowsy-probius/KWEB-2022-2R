import { View, Text, StyleSheet, Image, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import DailyStatus from "./DailyStatus";
//import MyModal from './MyModal';


const dayNames = [

  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  
];

const BodyContent = () => {

  const getTodaysDate = () => {
    let yourDate = new Date();
    const offset = yourDate.getTimezoneOffset(); //현재기준으로 변환
    yourDate = new Date(yourDate - offset * 60 * 1000);

    return yourDate;
  };

  function getMonthName(date) {
    /* 2022-11-29T07:54:29.849Z => November */
    let arrDate = date.toISOString().split("-"); //["2022", "11", "25"]
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
    const monthName = month_names[arrDate[1] - 1];
    return monthName;
  }
  function getYear(date) {
    /* 2022-11-29T07:54:29.849Z => 2022* */

    return date.toISOString().split("-")[0];
  }
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function subtractDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

  function getMonSun() {
    var monday = new Date();
    var day = monday.getDay() || 7;
    if (day !== 1) monday.setHours(-24 * (day - 1));

    const sunday = addDays(monday, 6);

    return [monday, sunday];
  }

  function parseDate(date) {
    /*2022-11-28-TBlidsfjlsjf -> ['2022', '11', '28']*/
    const cleanDate = date.toISOString().split("T")[0];
    return cleanDate; //2022-11-05
  }

  const handleChangeDate = (dir) => {
    let newMon;
    let newSun;
    if (dir === 1) {
      newMon = addDays(sunMon[1], 1);
      newSun = addDays(sunMon[1], 7);
    } else {
      newMon = subtractDays(sunMon[0], 7);
      newSun = subtractDays(sunMon[0], 1);
    }

   
    // console.log(newMon, newSun)
    // //이거 약간 조작...
    // console.log( )
    if (newMon.toISOString().split("-")[0] === '2023' ) {
      setModalText('Year 2023 Not available yet!')
      setModalVisible(true)
      //throw new Error('Year 2023 Not available yet!')
    }
    else if (newMon.toISOString().split("-")[1] === '10' ){
      setModalText('You can only view your record from November.')
      setModalVisible(true)
      //throw new Error('You can only view your record from November.')
    }
    else{
      setSunMon([newMon, newSun]);
      setHeaderYear(getYear(newMon));
      setMonthName(getMonthName(newMon));
      setWeekDateArr(allDates(newMon));
    }
  };

  const allDates = (monday) => {
    let temp = [];
    for (let i = 0; i < 7; i++) {
      temp.push(parseDate(addDays(monday, i)));
    }
    return temp;
  };

  const [sunMon, setSunMon] = useState([getMonSun()[0], getMonSun()[1]]);
  const [headerYear, setHeaderYear] = useState(`${getYear(getTodaysDate())}`);
  const [monthName, setMonthName] = useState(
    `${getMonthName(getTodaysDate())}`
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText ] = useState('no error!');

  const [weekDateArr, setWeekDateArr] = useState(allDates(getMonSun()[0]));

  return (
    <View>
      {/* Calendar < >  */}
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Image
            source={require("../assets/calendar.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text style={styles.headerDate}>
            {headerYear} {monthName}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable
            onPress={() => handleChangeDate(-1)}
            style={styles.arrowPressArea}
          >
            <Image
              source={require("../assets/arrowleft.png")}
              style={styles.arrows}
            />
          </Pressable>
          <Text style={styles.weekdate}>
            {" "}
            {parseDate(sunMon[0])} ~ {parseDate(sunMon[1])}
          </Text>
          <Pressable
            onPress={() => handleChangeDate(1)}
            style={styles.arrowPressArea}
          >
            <Image
              source={require("../assets/arrowright.png")}
              style={styles.arrows}
            />
          </Pressable>
        </View>
      </View>


      {/* 매우 더럽지만 여기서부터는 modal입니다 (default = hide)*/}
      
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{modalText}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Got It</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
    </View>


      <View style={styles.weeklyStatusContainer}>
        <Text style={styles.title}>Weekly Status</Text>
        <View>
          {weekDateArr.map((date, i) => {
            return <DailyStatus key={i} dayName={dayNames[i]} date={date} />;
          })}
        </View>
      </View>
    </View>
  );
};

export default BodyContent;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },

  arrowPressArea: {
    height: 30,
    width: 30,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  arrows: {
    width: 10,
    height: 20,
  },
  weekdate: { fontSize: 16, color: "#787878", marginHorizontal: 44 },
  headerDate: { marginLeft: 8, fontSize: 20, fontWeight: "bold" },

  weeklyStatusContainer: {
    paddingLeft: 20,
    paddingRight: 40,
  },

  title: { fontSize: 20, fontWeight: "bold", marginTop: 10 },
  
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#6763CE",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
