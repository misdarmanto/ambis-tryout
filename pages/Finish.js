import React, { useEffect, useRef, useState, memo } from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { heightPercentage, widthPercentage } from "../Global/Dimensions";
import ButtonStyle from "../components/Button/ButtonStyle";
import Progress from "../components/Progress";
import { GlobalStyles } from "../Global/GlobalStyles";
import { Primary, Yellow, Red, TextColorLight} from "../Global/Color";
import { FontAwesome } from "@expo/vector-icons";
import Card from "../components/Card/Card";
import * as Linking from "expo-linking";
import RewardedAdd from "../components/Adds/RewardedAdd";
import Layout from "../Global/Layout";

const Finish = (props) => {
  const {
    progress,
    onPress,
    percent,
    grade: { benar, salah, kosong },
  } = props;
  const [animated, setAnimated] = useState(true);
  const animation = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <View style={styles.container}>
        {animated ? (
          <LottieView
            ref={animation}
            style={{ width: 400, height: 400 }}
            source={require("../assets/winner.json")}
            autoPlay
            loop={false}
          />
        ) : (
          <>
            <View style={styles.content}>
              <View style={styles.progressContainer}>
                <Progress progress={progress} />
                <Text style={styles.textPercent}>{percent}%</Text>
              </View>
              <View style={styles.cardContainer}>
                <Card number={benar} text="benar" color={Primary} />
                <Card number={salah} text="salah" color={Red} />
                <Card number={kosong} text="kosong" color={Yellow} />
              </View>
            </View>
            <View style={styles.listContainer}>
              <Pressable
                style={[styles.list, { marginBottom: heightPercentage(4) }]}
                onPress={() => Linking.openURL("https://trakteer.id/siapUTBK")}
              >
                <Text style={GlobalStyles.textPrimary}>Trakter kopi</Text>
                <FontAwesome name="coffee" size={30} color={TextColorLight} />
              </Pressable>
              <ButtonStyle
                title="Lihat Pembahasan"
                onPress={() => {
                  onPress();
                  RewardedAdd();
                }}
              />
            </View>
          </>
        )}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: heightPercentage(5),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    borderRadius: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#F3F3F3",
    width: widthPercentage(90),
    height: heightPercentage(30),
    padding: 20,
    justifyContent: "space-between",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: heightPercentage(2),
  },
  textPercent: {
    color: "gray",
    paddingLeft: widthPercentage(2),
    fontWeight: "bold",
    fontSize: 17,
  },
  listContainer: {
    width: widthPercentage(90),
    paddingTop: heightPercentage(5),
  },
  list: {
    backgroundColor: "#FFF",
    height: heightPercentage(10),
    marginBottom: heightPercentage(1),
    paddingLeft: widthPercentage(3),
    paddingRight: widthPercentage(3),
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default memo(Finish);
