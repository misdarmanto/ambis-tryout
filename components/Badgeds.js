import React, { memo, useEffect, useState } from "react";
import { Primary, TextColorLight } from "../Global/Color";
import { StyleSheet, FlatList, View, Pressable, Text } from "react-native";
import { heightPercentage, widthPercentage } from "../Global/Dimensions";


const Badgeds = (props) => {
  const { sorting, isRefresh, badged } = props;
  const [badgedOnclick, setBadgedOnclick] = useState("Semua");

 
  useEffect(() => {
    setBadgedOnclick("Semua");
  }, [isRefresh]);

 
  const renderItem = ({item}) => {
    return(
      <Budged
      active={item === badgedOnclick}
      text={item}
      onPress={() => {
        setBadgedOnclick(item);
        sorting(item);
      }}
    />
    )
  }
  return (
    <View style={styles.budgedContainer}>
      <FlatList
        // ref={flatlistRef}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={badged}
        keyExtractor={(badged) => badged}
        renderItem={renderItem}
      />
    </View>
  );
};

const Budged = ({ active, text, onPress }) => {
  return (
    <Pressable
      style={[styles.badged, { backgroundColor: active ? Primary : "#E4F2FF" }]}
      onPress={onPress}
    >
      <Text
        style={[styles.badgedText, { color: active ? "#FFF" : TextColorLight }]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  budgedContainer: {
    marginTop: heightPercentage(3),
    marginBottom: heightPercentage(3),
    flexDirection: "row",
  },
  badged: {
    justifyContent: "center",
    alignItems: "center",
    height: heightPercentage(5),
    margin: 5,
    paddingHorizontal: widthPercentage(5),
    minWidth: widthPercentage(25),
    borderRadius: 50,
  },
  badgedText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default memo(Badgeds);
