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
  viewLogin: {
    paddingHorizontal: 20,
    paddingTop: 60,
    flexDirection: "row",
  },
  touchLogin: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "48%",
    borderRadius: 10,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  textLogin: {
    color: Colors.onPrimary,
    fontSize: FontSize.large,
    textAlign: "center",
  },
  touchRegister: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "48%",
    borderRadius: 10,
  },
  textRegister: {
    // fontFamily: FontFamily['poppins-bold']
    color: Colors.text,
    fontSize: FontSize.large,
    textAlign: "center",
  },
});

export default styles;
