import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  useColorScheme,
} from "react-native";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={Style.container}>
        <Text style={isDarkMode ? Style.whiteText : Style.blackText} numberOfLines={2}>
          Style Sheet
        </Text>
      </View>
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
  },
  whiteText: { color: "#FFFFFF" },
  blackText: { color: "#000000" },
});
export default App;
