import React from "react";
import { Text } from "react-native";

const TextParagraph = ({ children, style }) => {
  return (
    <Text
      style={[
        {
          color: "#667685",
          fontSize: 15,
          lineHeight: 25,
          textAlign: "justify",
          flexWrap: "wrap",
          flex: 1,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default TextParagraph