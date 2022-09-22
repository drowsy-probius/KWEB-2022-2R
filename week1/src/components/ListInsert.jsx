import React, {useState, useRef} from "react";

import {
  KeyboardAvoidingView,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

const createRandomHexString = (size) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

const ListInsert = ({onAddItem}) => {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  const addItemHandler = () => {
    if(input.length === 0) {
      return onAddItem(createRandomHexString(32));
    }
    inputRef.current.clear(); 
    onAddItem(input); 
    setInput("");
  }

  return (
    <KeyboardAvoidingView style={styles.insertContainer}>
      <TextInput 
        style={styles.input} 
        ref={inputRef} 
        onChangeText={(text) => setInput(text)}  
        onSubmitEditing={addItemHandler}
      />
      <Button 
        style={styles.button} 
        title="추가" 
        onPress={addItemHandler}
      />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  insertContainer: {
    alignContent: "space-between",
    flexDirection: "row",
    paddingBottom: 5,
    margin: 5,
  },
  input: {
    flex: 1,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    marginRight: 10,
    marginLeft: 5,
  },
  button: {
    marginRight: 10
  }
});

export default ListInsert;