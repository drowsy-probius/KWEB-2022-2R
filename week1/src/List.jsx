import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Button,
} from "react-native";


const DATA = [
  {
    id: 1,
    content: "꿀잠자기"
  },
  {
    id: 2,
    content: "학교 수업 잘 듣기"
  },
]


const Header = () => {
  return (
    <View style={{
      height: 45,
      width: "100%",
      backgroundColor: "#00B8D4",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text style={{fontSize: 24, color: "white"}}> Todo Lists </Text>
    </View>
  )
}

const Footer = ({addItem}) => {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  return (
    <View style={{
      alignContent: "space-between",
      flexDirection: "row",
      paddingBottom: 5,
      margin: 5,
      width: "100%",
    }}>
      <TextInput 
        style={{flex: 9}} 
        ref={inputRef} 
        onChangeText={(text) => setInput(text)}  
        onSubmitEditing={() => {inputRef.current.clear(); addItem(input); setInput("");}}
      />
      <Button 
        style={{flex: 1}} 
        title="추가" 
        onPress={() => {inputRef.current.clear(); addItem(input); setInput("");}}
      />
    </View>
  )
}

export default () => {
  const [items, setItems] = useState(DATA);
  const [updated, setUpdated] = useState(true);
  const listRef = useRef();

  const addItem = (content) => {
    setItems([
      ...items,
      {
        id: items.length + 1,
        content: content,
      }
    ]);
    setUpdated(!updated);
  }

  const Item = ({content}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{content}</Text>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <FlatList 
          ref={listRef}
          data={items}
          extraData={updated}
          renderItem={({item}) => <Item content={item.content}/>}
          keyExtractor={item => item.id}
          ListHeaderComponent={Header}
          ListHeaderComponentStyle={{borderBottomColor: "red", borderBottomWidth: 2}}
          stickyHeaderIndices={[0]} // header, footer 포함한 index
          onContentSizeChange={() => listRef.current.scrollToEnd({animated: true})} // 항목 추가 시 아래로 스크롤하려고 추가했는데 첫 로딩 시에도 아래로 스크롤됨.
          onLayout={() => listRef.current.scrollToEnd({animated: true})}
        />
      </View>
      {/* sticky footer는 내장되어 있지 않아서 flex로 구현함. */}
      <View style={{
        flex: 0,
        paddingRight: 10,
        paddingLeft: 10,
      }}>
        <View style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
        />
        <Footer addItem={addItem} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: "100%",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32,
  }
})