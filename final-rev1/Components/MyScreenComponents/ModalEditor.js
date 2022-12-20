import { View, Text } from 'react-native'
import React from 'react'

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


export default ModalEditor