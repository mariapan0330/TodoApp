import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ItemsList from "./ItemsList";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do</Text>
      <ItemsList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "800",
  },
});
