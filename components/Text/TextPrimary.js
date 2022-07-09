import React from "react";
import { Text } from "react-native";

const TextPrimary = ({ children, style }) => {
  return (
    <Text
      style={[
        {
          fontSize: 18,
          fontWeight: "bold",
          color: "#35689A",
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default TextPrimary;
