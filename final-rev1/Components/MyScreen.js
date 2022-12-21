import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import React, { useState } from "react";

// import SelectDropdown from 'react-native-select-dropdown'

import MonthlyRecord from "./MyScreenComponents/MonthlyRecord";
import EditBox from "./MyScreenComponents/EditBox";

import Choice from '../Data/Choice.json'

const MyScreen = () => {
  const [timeModalVisible, setTimeModalVisible] = useState(false);
  const [objectModalVisible, setObjectModalVisible] = useState(false);

  const onLongPressTime = () => {
    setTimeModalVisible(true);
  };

  const onLongPressObject = () => {
    setObjectModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>My Page</Text>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <Pressable onPress={onLongPressTime}>
          <EditBox content={"Time"} />
        </Pressable>
        {/* <Pressable onPress={onLongPressObject}>
          <EditBox content={"Objects"} />
        </Pressable> */}
      </View>
      <MonthlyRecord />

      {/* EDIT TIME MODAL */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={timeModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setTimeModalVisible(!timeModalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>SELECT TIME</Text>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setTimeModalVisible(!timeModalVisible)}
              >
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      {/* EDIT OBJECT MODAL */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={objectModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setObjectModalVisible(!objectModalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>SELECT OBJECT</Text>

              {/* <SelectDropdown
                  data={Choice['Objects']}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                  }}
                /> */}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setObjectModalVisible(!objectModalVisible)}
              >
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default MyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
  },

  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 40,
  },

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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#6763CE",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
