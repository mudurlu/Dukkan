import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 10,
    margin: 20
  },
  image: {
    width: Dimensions.get("screen").width - 100,
    height: Dimensions.get("screen").height /2,
    resizeMode: "contain",
    margin: "auto",
    marginBottom: 1,
    tintColor: "#64b5f6"
  },
})