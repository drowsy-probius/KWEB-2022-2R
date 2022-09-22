import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  Animated,
} from "react-native";

import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import ListInsert from "./ListInsert";

const createRandomHexString = (size) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

const DATA = [
  {
    id: createRandomHexString(16),
    content: "🛏️ 꿀잠자기"
  },
  {
    id: createRandomHexString(16),
    content: "💻 학교 수업 잘 듣기"
  },
]


const TodoList = () => {
  const [items, setItems] = useState(DATA);
  const [translateY] = useState(new Animated.Value(0));

  const onAddItem = (content) => {
    setItems([
      ...items,
      {
        id: createRandomHexString(16),
        content: content,
      }
    ]);
  }

  const onRemove = (id) => {
    setItems(items.filter(item => item.id !== id));
  }

  const onScroll = (gestureResponderEvent, gestureState) => {
    return Animated.event([{ nativeEvent: {contentOffset: {y: translateY}}}], {useNativeDriver: false});
  }

  return (
    <SafeAreaView style={styles.container}>
      <ListHeader />
      <View style={styles.list}>
        <ListInsert onAddItem={onAddItem} />
        <Animated.ScrollView 
          scrollEventThrottle={1}
          onScroll={onScroll}
        >
          {
            items.map(item => (
              <ListItem 
                key={item.id}
                id={item.id}
                content={item.content} 
                onRemove={onRemove}
              />
            ))
          }
        </Animated.ScrollView>
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
  list: {
    padding: 10,
    backgroundColor: "#F2F2F2",
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default TodoList;