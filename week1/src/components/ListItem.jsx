import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  Button,
  Pressable,
} from "react-native";

const ListItem = ({id, content, onRemove}) => {
  const [endReached, setEndReached] = useState(false);
  const [translateX] = useState(new Animated.Value(0));
  const scrollDistance = -70;
  const completeThreshold = -60;
  

  const onRemoveHandler = () => {
    onRemove(id);
  }

  const animateToStart = () => {
    Animated.spring(translateX, {
      toValue: 0,
      tension: 10,
      friction: 5,
      useNativeDriver: false,
    }).start();
    return setEndReached(false);
  }
  const animateToEnd = () => {
    onComplete();
    Animated.spring(translateX, {
      toValue: scrollDistance,
      tension: 10,
      friction: 5,
      useNativeDriver: false
    }).start();
    return setEndReached(true);
  }
  const onComplete = () => {}
  const onSwipeStart = () => {}
  const onSwipeEnd = () => {}
  const onMove = (gestureResponderEvent, gestureState) => {
    if(gestureState.dx > 0 || gestureState.dx < scrollDistance) {
      return Animated.event([{dx: translateX}], {useNativeDriver: false})({
        ...gestureState,
        dx: gestureState.dx > 0 ? 0 : scrollDistance
      })
    }
    return Animated.event([{dx: translateX}], {useNativeDriver: false})(gestureState);
  }
  const onRelease = () => {
    if(endReached) {
      return animateToStart();
    }

    const isCompleted = translateX._value <= completeThreshold;
    return isCompleted ? animateToEnd() : animateToStart();
  }

  const PanResponser = () => PanResponder.create({
    onPanResponderStart: onSwipeStart,
    onPanResponderEnd: onSwipeEnd,
    onStartShouldSetPanResponder: () => false,
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => false,
    onPanResponderMove: onMove,
    onPanResponderRelease: onRelease,
  });
  const panHandlers = PanResponser().panHandlers;
  
  return (
  <View style={styles.itemContainer}>
      <Animated.View 
        style={{
            transform: [{translateX: translateX}]
          }}
        {...panHandlers}
      >
        <Pressable style={styles.item}>
          <Text>{content}</Text>
        </Pressable>
      </Animated.View>
      <View style={styles.hiddenView}>
        <Button title="삭제" onPress={onRemoveHandler} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
  }, 
  item: {
    backgroundColor: "#5CB8E4",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 7,
  },
  hiddenView: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 7,

    position: "absolute",
    top: 0,
    right: 0,
    width: 70,
    height: "auto",
    alignContent: "flex-end",
    zIndex: -1,
  },
});

export default ListItem;