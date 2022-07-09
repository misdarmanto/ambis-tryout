import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { heightPercentage, widthPercentage} from "../../Global/Dimensions"

function Card(props){
    const { color, text, number } = props;
    return (
      <View style={[styles.card, { backgroundColor: color }]}>
        <Text style={styles.textNumber}>
          {number}
        </Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
    card: {
        width: widthPercentage(20),
        height: heightPercentage(10),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    textNumber : {
        color: "white", 
        fontSize: 18, 
        fontWeight: "bold"
    },
    text: {
        color: "#FFF"
    }
})

export default memo(Card)
