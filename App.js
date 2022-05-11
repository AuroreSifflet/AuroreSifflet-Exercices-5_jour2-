import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";
import { getCurrentTimestamp } from "react-native/Libraries/Utilities/createPerformanceLogger";
export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.bouton} onPress={() => alert("Pressed!")}>
        <Text style={styles.texte}>Félicitations</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bouton: {
    width: "60%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.51,
    shadowRadius: 13.32,
    elevation: 20,
    alignItems: "center",
    backgroundColor: "green",
    paddingHorizontal: 20,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "gray",
  },
  texte: {
    color: "white",
    textTransform: "uppercase",
  },
});
