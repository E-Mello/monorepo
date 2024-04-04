import { StyleSheet, Text, View } from "react-native";
import { greeting } from "@packages/hello-world";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>
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
});
