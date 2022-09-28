import React from "react";
import {
  View,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from "react-native";


const ModalEditor = ({value, setValue, modalVisible, closeHandler}) => {


  return (
    <View>
      <Modal
        style={styles.modalView}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeHandler}
      >
        <View>
          <TextInput
            value={value}
            onChangeText={setValue}
            onSubmitEditing={closeHandler}
          />
          <Button
            title="닫기"
            onPress={closeHandler}
          />
        </View>

      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "grey",
    marginTop: "40%",
  }
});

export default ModalEditor;