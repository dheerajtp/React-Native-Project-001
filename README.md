# Project One

1. **useColorScheme** can be used to integrate dark mode light mode in our application which can be imported directly using react-native

```
  useColorScheme is a hook which provides and subscribe to the color scheme updates. Return value indicates the current user preferred color scheme.Value can be updated directly using the user action. The appearence module can be used to get the preferred user color scheme
  
  const isDarkMode = useColorScheme() === "dark"; this code set's users color scheme to dark. To get users color scheme what we can do is
  
  const isDarkMode = useColorScheme();

```

2. **SafeAreaView** can be used for giving a better view option. Since now mobile phone's have notch and other things

3. **StyleSheet** can be used to create or give styles to the mobile Application

4. **numberOfLines** prop on the Text component to a value greater than 1. This will tell the Text component to wrap the text if it is longer than one line.

```
alignItems work top to bottom ( ONLY ON WEB ). alignItems can have values flex-start,center,flex-end,stretch,baseline. But alignItems in React Native works left to right.

So on the other hand justifyContent works top to bottom in Mobile Application's. It can have values flex-start,flex-end,center,space-between,space-around,space-evenly.
```
