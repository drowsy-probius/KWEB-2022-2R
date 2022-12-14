import React, {
  useEffect,
  useState,
  useRef,
  createRef,
} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  AppState,
} from 'react-native';
import {
  useIsFocused
} from '@react-navigation/core';

import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
} from 'react-native-vision-camera';
import Animated, {
  runOnJS,
  runOnUI,
  useAnimatedProps,
  useSharedValue,
} from 'react-native-reanimated';

import { labelImage } from 'vision-camera-image-labeler';

import { useDispatch } from 'react-redux';

import { setPhotoValue } from '../redux/photo';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import VerifyScreen from './VerifyScreen';
const CameraStack = createNativeStackNavigator();


/**
 * Check App is foreground.
 * https://github.com/mrousavy/react-native-vision-camera/blob/main/example/src/hooks/useIsForeground.ts
 */

const useIsForeground = () => {
  const [isForeground, setIsForeground] = useState(true);
  useEffect(() => {
    const onChange = (state) => {
      setIsForeground(state === 'active');
    }
    const listener = AppState.addEventListener('change', onChange);
    return () => listener.remove();
  }, [setIsForeground]);
  return isForeground;
}


/**
 * {
 *   object: probability
 * }
 */
const LABELS = {
  'Bicycle': 0.8,
  'Bus': 0.8,
  'Stairs': 0.8,
  'Computer': 0.5,
  'Desk': 0.6,
  'Foot': 0.8,
  'Newspaper': 0.8,
  'Paper': 0.8,
  'Road': 0.8,
  'Shoe': 0.8,
  'Jeans': 0.8,
  'Shelf': 0.8
}

Animated.addWhitelistedNativeProps({ text: true }); // 카메라 동작에 필요함?
// const AnimatedText = Animated.createAnimatedComponent(TextInput);
// function Label({ sharedValue }) {
//   const navigation = useNavigation();

//   const textProps = useAnimatedProps(() => {

//     sharedValue.value.map((detected) => {
//       const { label, confidence } = detected;
//       if (!Object.keys(LABELS).includes(label)) return;
//       if (confidence < LABELS[label]) return;

//       console.log(label, confidence);

//       navigation.navigate('Home');
//     })

//     return ({ text: sharedValue.value });
//   }, [sharedValue.value]);

//   return (
//     <AnimatedText
//       style={styles.text}
//       animatedProps={textProps}
//       editable={false}
//       multiline={true}
//     />
//   )
// }


// export default function CameraScreen({navigation}) {
function CameraScreen({navigation}) {
  const dispatch = useDispatch();

  const devices = useCameraDevices();
  const device = devices.back;

  const [hasPermission, setHasPermission] = useState(false);
  const isFocused = useIsFocused();
  const isForeground = useIsForeground();
  const isActive = isFocused && isForeground;
  const currentLabels = useSharedValue([]);

  const camera = useRef(null)


  const [photoPath, setPhotoPath] = useState("");

  const takeSnap = (label) => {

          // const photo = camera.current.takeSnapshot({
          //   quality: 85,
          //   skipMetadata: true
          // });

          // const path = RNFS.ExternalDirectoryPath + '/currentSnapshot.jpg';
          // console.log('PATH: '+path)

          // console.log("SEARCHING FOR SNAPSHOT PATH: "+photo.path+" ")
          // setPhotoPath("file://" + path)
          // RNFS.moveFile(photo, path)

          // console.log(photoPath)

          dispatch(setPhotoValue({
            photoInfo : photoPath,
            detected: label,
        }));

      }

  // const takeSnap = () => {

  //   const photo = camera.current.takeSnapshot({
  //     quality: 85,
  //     skipMetadata: true
  //   })
    
  //   console.log("TESTTESTTEST "+photo["_A"])
    
  //   dispatch(setPhotoValue({
  //       photoInfo : photo["_A"],
  //   }));

  // }

  const goToScreen = (screenName) => {
    /**
     * runOnJS에서 실행할 함수는
     * worklet으로 선언된 함수 밖에서
     * 선언 되어야 작동하는 것 같음.
     */
    

    navigation.navigate(screenName);
  }

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet';
    currentLabels.value = labelImage(frame).reduce((prevArr, detected) => {
      const { label, confidence } = detected;
      if (!Object.keys(LABELS).includes(label)) return prevArr;
      if (confidence < LABELS[label]) return prevArr;
      console.log(label, confidence);
      return [label, ...prevArr];
    }, []);

    if(currentLabels.value.length > 0 )
    {
      // runOnJS(goToScreen)('Home');
      runOnJS(takeSnap)(currentLabels.value)
      runOnJS(goToScreen)('Verify');
    }
  }, [currentLabels]);

  useEffect(() => {
    currentLabels.value = [];

    Camera.requestCameraPermission()
      .then((status) => {
        setHasPermission(status === "authorized");
      })
      .catch((i) => {
        setHasPermission(false);
      });
  }, []);


  
  
  
  return (
    <View style={styles.container}>
      {device != null && hasPermission ? (
        <>
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isActive}
            frameProcessorFps={15}
            frameProcessor={frameProcessor}
            orientation='portrait'
            ref={ camera }
            photo={true}
          />
        </>
      ) : (
        <>
          <ActivityIndicator size="large" color="white" />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});



function Test() {
  return (
    <View>
      <Text>safdsafdsf</Text>
    </View>
  )
}

export default function CameraStackScreen() {
  return (
    <CameraStack.Navigator
      initialRouteName='CameraInner'
      screenOptions={{
        headerShown: false, 
        orientation: 'portrait_up',
      }}
    >
      <CameraStack.Screen name="CameraInner" component={CameraScreen} />
      <CameraStack.Screen name="Verify" component={VerifyScreen} />
    </CameraStack.Navigator>
  )
}


