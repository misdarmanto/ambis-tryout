import React, { memo } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import ButtonStyle from "../components/Button/ButtonStyle";
import { heightPercentage, widthPercentage } from "../Global/Dimensions";
import { BackGround, TextColorLight } from "../Global/Color";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Layout from "../Global/Layout";
import TextPrimary from "../components/Text/TextPrimary";

const QuizStart = (props) => {
  const { onPress, jumlahSoal, level, title, setTimer, timer } = props;
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <TextPrimary>{title}</TextPrimary>
          <View style={styles.cardWrap}>
            <View style={styles.card}>
              <FontAwesome5 name="book" size={24} color={TextColorLight} />
              <Text
                style={{
                  color: TextColorLight,
                  marginHorizontal: widthPercentage(2),
                }}
              >
                Soal: {jumlahSoal}
              </Text>
            </View>
            <View style={styles.card}>
              <FontAwesome5 name="running" size={24} color={TextColorLight} />
              <Text
                style={{
                  color: TextColorLight,
                  marginHorizontal: widthPercentage(2),
                }}
              >
                level : {level}
              </Text>
            </View>
          </View>
          <View style={styles.cardWrap}>
            <View style={styles.card}>
              <MaterialIcons name="timer" size={24} color={TextColorLight} />
              <Text
                style={{
                  color: TextColorLight,
                  marginHorizontal: widthPercentage(2),
                }}
              >
                menit: {timer}
              </Text>
            </View>

            {/* timer setting */}
            <View style={{ flexDirection: "row" }}>
              <ButtonTimer
                title={"+"}
                onPress={() => (timer < 60 ? setTimer(timer + 1) : null)}
              />
              <ButtonTimer
                title={"-"}
                onPress={() => (timer !== 0 ? setTimer(timer - 1) : null)}
              />
            </View>
          </View>
          <ButtonStyle onPress={onPress} title="Mulai" />
        </View>
      </View>
    </Layout>
  );
};

const ButtonTimer = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      style={[styles.card, { marginLeft: widthPercentage(2) }]}
      onPress={onPress}
    >
      <Text
        style={{
          color: TextColorLight,
          marginHorizontal: widthPercentage(5),
          fontSize: 20,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: widthPercentage(2),
  },
  cardContainer: {
    minHeight: heightPercentage(25),
    backgroundColor: "#FFF",
    borderRadius: 10,
    justifyContent: "space-between",
    paddingVertical: heightPercentage(5),
    paddingHorizontal: widthPercentage(2),
  },
  cardWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: heightPercentage(2),
  },
  card: {
    backgroundColor: BackGround,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: widthPercentage(2),
    paddingVertical: heightPercentage(1),
    borderRadius: 10,
  },
});

export default memo(QuizStart);
