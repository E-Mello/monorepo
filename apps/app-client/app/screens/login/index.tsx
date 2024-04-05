import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function Login({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TouchableOpacity style={styles.touchSignIn}>
        <Text style={styles.textSignIn}>Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchSignUp}
        onPress={() => navigation.navigate("register")}
      >
        <Text style={styles.textSignUp}>Create new account</Text>
      </TouchableOpacity>
    </View>
  );
}
