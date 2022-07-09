import React from "react";
import { View } from "react-native";
import { heightPercentage, widthPercentage } from "../../Global/Dimensions";
import { Gray } from "../../Global/GlobalStyles";

const CardList = ({ children, style }) => {
  return (
    <View
      style={[
        {
          height: heightPercentage(20),
          borderWidth: 1,
          borderColor: "#E3E3E3",
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: widthPercentage(2),
          marginVertical: heightPercentage(1),
          justifyContent: "center",
          backgroundColor: "#FFF"
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default CardList;
