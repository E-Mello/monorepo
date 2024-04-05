import { Dimensions, StyleSheet } from "react-native";
// import FontSize from "../../../constants/font-size";
// import Colors from "../../../constants/Colors";

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
