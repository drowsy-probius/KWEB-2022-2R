# 1주차

## React-native 사용해보기

### TODO 앱 만들기...?

- 템플릿 사용 및 앱 실행

```bash
npx create-expo-app projectName

cd projectName
npm start # you can also use: npx expo start
```

- `.expo-shared` 폴더는 뭐하는 폴더?

[스택오버플로](https://stackoverflow.com/questions/67853337/is-necessary-to-git-ignore-expo-shared-folder-in-react-native-project)
```
> Why do I have a folder named ".expo-shared" in my project?

The ".expo-shared" folder is created when running commands that produce state that is intended to be shared with all developers on the project. For example, "npx expo-optimize".

> What does the "assets.json" file contain?

The "assets.json" file describes the assets that have been optimized through "expo-optimize" and do not need to be processed again.

> Should I commit the ".expo-shared" folder?

Yes, you should share the ".expo-shared" folder with your collaborators.
```


- 원격 서버에서 개발하고 싶음

포트 설정을 해줘야 하지만 `export EXPO_PACKAGER_PROXY_URL=http://example.org` 으로 환경변수를 설정하면 해당 주소`:80`으로 개발 환경 오픈이 가능함.


- `entryPoint` 변경하고 싶음

`app.json`에서 아래 항목 추가/변경하면 됨. 기본 값은 `App.js`인 듯함.
```
{
  "expo": {
    "entryPoint": "./src/App.js"
  }
}
```
그리고 아래 코드로 루트 컴포넌트를 명시해줘야 동작함.
```javascript
import { registerRootComponent } from 'expo';
class App ...
export default registerRootComponent(App);
```


- `expo go`앱에서 디버깅 화면 띄우기
<img src="./img/Screenshot_20220921-202414_Expo%20Go.png" alt="디버깅화면" style="width:200px;"/>

[expo docs](https://docs.expo.dev/workflow/debugging/)

iOS 기기면 흔들거나 3개 동시 터치하면 해당 메뉴가 열리고 Android 기기면 위아래로 흔들거나 adb 명령어로 해당 메뉴를 열 수 있다고 함.


- `View`는 `<div>`와 유사하게 생각해도 된다.

- `FlatList`에는 헤더 고정은 있지만 footer 고정은 없다. 그래서 따로 `View`만든 후 적절하게 `flex`비율 설정한다.

- style에서 `flex`값은 `number`형으로 부모 요소에서 차지할 비율을 설정한다. `1 1 3`면 각각 20% 20% 60%를 차지하게 된다. 차지하는 부분이 `row`인지 `column`인지는 `flexDirection` 값에 따라 다르다.

- `Flatlist` 목록을 업데이트 하려면 `extraData`를 통해서 데이터가 변경됨을 알려줘야 한다. 해당 속성에 추가 데이터를 넣는 것보다 `boolean`값을 통해서 새 값이 있음을 알려주는 것이 낫다.

- `Flatlist`에서 새 데이터가 추가될 때 이벤트는 `onContentSizeChange`을 통해서 하면 된다. 해당 `component` 페이지에서 못 찾았는데 아마 공통 속성일 것이다?

- `component` 자체에서 `style={{}}`으로 스타일을 정하는 것보다 `StyleSheet`객체를 만든 후 `style={styles.test}`으로 하는 것이 성능 향상에 좋다고 봤는데 확인이 필요하다.

- 사용자 제스쳐나 부드러운 애니메이션을 구현하고 싶으면 `Animated`를 사용하는 것이 좋다.

- 원래 `Button`와 같은 컴포넌트만 클릭이 가능하지만 `Pressable`으로 감싸면 `Text`등의 컴포넌트도 클릭이 가능하다.



