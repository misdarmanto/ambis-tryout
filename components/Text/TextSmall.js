import React from "react";
import { Text } from "react-native";

const TextSmall = ({ children, style }) => {
  return (
    <Text
      style={[
        {
          padding: 5,
          fontSize: 13,
          color: "#000",
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default TextSmall;
