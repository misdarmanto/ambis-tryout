import { MathJaxSvg } from "react-native-mathjax-html-to-svg";
import React from "react";
import { TextColorDark } from "../Global/Color";

export default function MathSymbol({ symbol, color }) {
  return (
    <MathJaxSvg
      fontSize={16}
      color={color || TextColorDark}
      fontCache={true}
      style={{
        color: "#667685",
        fontSize: 15,
        lineHeight: 25,
        textAlign: "justify",
        flexWrap: "wrap",
        flex: 1,
      }}
    >
      {symbol}
    </MathJaxSvg>
  );
}
