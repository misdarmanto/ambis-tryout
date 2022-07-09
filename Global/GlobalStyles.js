import { StyleSheet } from "react-native";
import { widthSize } from "../helpers/layoutDimension";


export const GlobalStyles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    paddingHorizontal:  widthSize("2%"),
    backgroundColor: "#EFFBFF",
  },
  textPrimary: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#35689A",
  },
  textSmall: {
    padding: 5,
    fontSize: 13,
    fontWeight: "bold",
    color: "#B9B9B9"
  },
  textPragraph: {
    color: "#667685",
    fontSize: 15,
    lineHeight: 25,
    textAlign: "justify",
    flexWrap: "wrap",
    flex: 1,
  },
})



