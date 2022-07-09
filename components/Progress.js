import React, { memo } from "react";
import { View } from "react-native";
import { Bar } from "react-native-progress";
import { heightPercentage } from "../Global/Dimensions";
import { Primary } from "../Global/GlobalStyles";

function ProgressBar({ progress }) {
  return (
    <View style={{ flex: 2 }}>
      <Bar
        progress={progress}
        width={null}
        height={heightPercentage(2)}
        color={Primary}
        borderRadius={20}
      />
    </View>
  );
}

export default memo(ProgressBar);
