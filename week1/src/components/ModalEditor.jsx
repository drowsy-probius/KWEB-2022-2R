import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from "react-native";


const ModalEditor = ({value, setValue, modalVisible, closeHandler}) => {


  return (
    <KeyboardAvoidingView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeHandler}
      >
        <View
          style={styles.modalView}
        >
          <TextInput
            style={styles.modalTextInput}
            value={value}
            onChangeText={setValue}
            onSubmitEditing={closeHandler}
          />
          <Button
            style={styles.modalCloseButton}
            title="닫기"
            onPress={closeHandler}
          />
        </View>

      </Modal>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  modalView: {
    top: "40%",
    marginLeft: "8%",
    marginRight: "8%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#4C679380",
  },
  modalTextInput: {
    backgroundColor: "white",
    padding: 3,
  },
  modalCloseButton: {
  }
});

export default ModalEditor;