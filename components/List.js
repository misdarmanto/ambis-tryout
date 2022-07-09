import React from "react";
import { Primary, BackGround, TextColorDark } from "../Global/Color";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { View } from "react-native";
import { heightPercentage, widthPercentage } from "../Global/Dimensions";
import TextPrimary from "./Text/TextPrimary";

export default function List(props) {
  const { title, icon, soal, level, onPress, newListItem } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.Container}>
      <View style={styles.icon}>
        <FontAwesome5 name={icon} size={35} color={Primary} />
      </View>
      <View style={styles.content}>
        <View style={styles.titleTop}>
          <TextPrimary>{title}</TextPrimary>
        </View>
        <View style={styles.titleBottom}>
          <View style={styles.boxIcon}>
            <FontAwesome5 name="book" size={20} color="#7CBFFF" />
            <Text style={styles.textIcon}>{soal} soal</Text>
          </View>
          <View style={[styles.boxIcon, { marginLeft: widthPercentage(2) }]}>
            <FontAwesome5 name="running" size={20} color="#7CBFFF" />
            <Text style={styles.textIcon}>{level}</Text>
          </View>
        </View>
      </View>
      <View style={{ justifyContent: "center", alignItems: "flex-end" }}>
        {newListItem && (
          <View style={styles.newList}>
            <Text style={{ color: "#1E90FF" }}>New</Text>
          </View>
        )}
        <AntDesign name="right" size={20} color={TextColorDark} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 100,
    marginBottom: 10,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#F3F3F3",
    borderRadius: 10,
    padding: 5,
  },
  icon: {
    width: widthPercentage(17),
    height: heightPercentage(9),
    borderRadius: 45,
    backgroundColor: BackGround,
    justifyContent: "center",
    alignItems: "center",
    marginTop: heightPercentage(2),
    marginBottom: heightPercentage(2),
  },
  content: {
    flex: 1,
    paddingLeft: widthPercentage(5),
  },
  titleTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleBottom: {
    flexDirection: "row",
    alignItems: "center",
    flex: 2,
  },
  boxIcon: {
    backgroundColor: BackGround,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 10,
  },
  textIcon: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#6BB6FF",
    paddingLeft: widthPercentage(1),
  },
  newList: {
    marginBottom: heightPercentage(5),
    backgroundColor: BackGround,
    borderRadius: 10,
    paddingHorizontal: widthPercentage(2),
  },
});
