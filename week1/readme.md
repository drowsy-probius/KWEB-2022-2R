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