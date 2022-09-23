import { useState, useRef } from "react";
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
  const translateX = useRef(new Animated.Value(0)).current;
  const scrollDistance = -70;
  const completeThreshold = -25;
  
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
  const onComplete = (gestureResponderEvent, gestureState) => {}
  const onSwipeStart = (gestureResponderEvent, gestureState) => {}
  const onSwipeEnd = (gestureResponderEvent, gestureState) => {
    if(Math.abs(gestureState.vx) < 0.01 && Math.abs(gestureState.vy) < 0.01 && Math.abs(gestureState.dx) < 2 && Math.abs(gestureState.dy) < 2) 
    {
      console.log("touched");
      return endReached ? animateToStart() : animateToEnd();
    }
    console.log(
      gestureResponderEvent.nativeEvent.locationX, 
      gestureResponderEvent.nativeEvent.locationY,
      gestureResponderEvent.nativeEvent.target,
    );

    if(Math.abs(gestureState.dy) > 10) return endReached ? animateToEnd() : animateToStart(); // 원래 상태로 돌아가기
    if(gestureState.vx < -3) return animateToEnd();
    if(gestureState.vy > 3) return animateToStart();
  };
  const onMove = (gestureResponderEvent, gestureState) => {
    // if(gestureState.dx > 0 || gestureState.dx < scrollDistance) {
    //   return Animated.event([{dx: translateX}], {useNativeDriver: false})({
    //     ...gestureState,
    //     dx: gestureState.dx > 0 ? 0 : scrollDistance
    //   })
    // }
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
    <View>
      <Animated.View 
        style={[
          styles.item,
          {
            transform: [{translateX: translateX}]
          }
      ]}>
        <Animated.Text {...panHandlers}>{content}</Animated.Text>
      </Animated.View>
      <View style={styles.hiddenView}>
        <Button title="삭제" onPress={onRemoveHandler} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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