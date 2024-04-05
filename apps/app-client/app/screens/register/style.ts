import { Dimensions, StyleSheet } from "react-native";
import FontSize from "../../../constants/font-size";
import Colors from "../../../constants/colors";

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  touchSignUp: {
    padding: 20,
    backgroundColor: Colors.primary,
    marginVertical: 30,
    borderRadius: 10,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  textSignUp: {
    // fontFamily: FontFamily["poppins-bold"],
    color: Colors.onPrimary,
    textAlign: "center",
    fontSize: FontSize.large,
  },
  touchSignIn: {
    padding: 10,
  },
  textSignIn: {
    // fontFamily: FontFamily["poppins-semiBold"],
    color: Colors.text,
    textAlign: "center",
    fontSize: FontSize.small,
  },
});

export default styles;
