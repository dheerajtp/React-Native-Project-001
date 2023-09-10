import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  StyleSheet,
  useColorScheme,
} from "react-native";

const App = () => {
  const isDarkMode = useColorScheme();
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={Styles.container}>
        <Text
          style={
            isDarkMode === "dark" ? Styles.darkModeText : Styles.lightModeText
          }
        >
          A Guide To Hooks {isDarkMode}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  darkModeText: {
    color: "#FFFFFF",
  },
  lightModeText: {
    color: "#000000",
  },
});
export default App;
