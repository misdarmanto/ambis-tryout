import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Primary } from "../../Global/Color";
import { heightPercentage } from "../../Global/Dimensions";
import TextPrimary from "../Text/TextPrimary";

export default function ButtonStyle({ onPress, title }) {
  return (
    <TouchableOpacity style={styles.containerStyle} onPress={onPress}>
      <TextPrimary style={{ color: "#FFF" }}>{title}</TextPrimary>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: Primary,
    height: heightPercentage(7),
    borderRadius: 20,
    borderBottomWidth: 0,
    shadowColor: Primary,
    shadowOffset: { width: 8, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
