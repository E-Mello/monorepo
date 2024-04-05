import { Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function Register({ navigation }: any) {
  function sendToast() {
    ToastAndroid.show("Cadastro Efetuado!", ToastAndroid.SHORT);
    navigation.navigate("login");
  }
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <TouchableOpacity style={styles.touchSignUp} onPress={() => sendToast()}>
        <Text style={styles.textSignUp}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchSignIn}
        onPress={() => navigation.navigate("login")}
      >
        <Text style={styles.textSignIn}>Already have an account</Text>
      </TouchableOpacity>
    </View>
  );
}
