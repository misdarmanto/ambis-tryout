import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GlobalStyles } from "../../Global/GlobalStyles";
import {
  Gray,
  Primary,
  QuizCorrect,
  QuizWrong,
  TextColorDark,
} from "../../Global/Color";
import { heightSize, widthSize } from "../../helpers/layoutDimension";
import MathSymbol from "../MathSymboles";
import TextPrimary from "../Text/TextPrimary";

export default function RadioButton(props) {
  const { letter, primary, secondary, onPress, value, onSelect, isUsingMath } =
    props;

  let backgroundColor = "";
  if (onSelect) {
    backgroundColor = Primary;
  } else if (primary) {
    backgroundColor = QuizCorrect;
  } else if (secondary) {
    backgroundColor = QuizWrong;
  } else {
    backgroundColor = "#FFF";
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style.shadow,
        style.container,
        { backgroundColor: backgroundColor },
      ]}
    >
      <View style={style.letter}>
        <TextPrimary style={{ color: TextColorDark }}>{letter}</TextPrimary>
      </View>

      {isUsingMath ? (
        <MathSymbol
          symbol={value}
          color={primary || secondary || onSelect ? "white" : TextColorDark}
        />
      ) : (
        <Text
          style={[
            GlobalStyles.textPragraph,
            {
              color: primary || secondary || onSelect ? "white" : TextColorDark,
            },
          ]}
        >
          {value}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F4F3F3",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: heightSize("1%"),
  },
  shadow: {
    shadowColor: Gray,
    shadowOffset: { width: 1, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  letter: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    backgroundColor: "#F3F3F3",
    borderRadius: 50,
    marginRight: widthSize("2%"),
  },
  textAlfaBet: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
  },
});
