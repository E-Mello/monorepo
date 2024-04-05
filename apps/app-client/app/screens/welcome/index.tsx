import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function Welcome({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <View style={styles.viewLogin}>
        <TouchableOpacity
          style={styles.touchLogin}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchRegister}
          onPress={() => navigation.navigate("register")}
        >
          <Text style={styles.textRegister}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
