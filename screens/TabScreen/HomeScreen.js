import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CardList from "../../components/Card/cardList";
import { DarkGray, Primary } from "../../Global/Color";
import { heightPercentage, widthPercentage } from "../../Global/Dimensions";
import Layout from "../../Global/Layout";
import { SimpleLineIcons } from "@expo/vector-icons";
import TextSmall from "../../components/Text/TextSmall";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';

export default HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardList style={{ backgroundColor: Primary, flexDirection: "column" }}>
          <Text style={{ color: "#FFF" }}>
            Do What You Love, Love What You Do
          </Text>
          <Text style={{ color: "#FFF", textAlign: "center" }}>
            ~ Stave Jobs ~
          </Text>
        </CardList>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            marginVertical: heightPercentage(5),
            paddingHorizontal: widthPercentage(3)
          }}
        >
          <CardButton onPress={() => navigation.navigate("BerhitungCepat")}>
            <Ionicons name="game-controller-outline" size={70} color={DarkGray} />
            <TextSmall>Games</TextSmall>
          </CardButton>

          <CardButton onPress={() => navigation.navigate("QuizGame")}>
            <MaterialIcons name="add-task" size={70} color={DarkGray} />
            <TextSmall>Quiz</TextSmall>
          </CardButton>

          <CardButton onPress={() => navigation.navigate("Promodoro")}>
            <MaterialIcons name="av-timer" size={70} color={DarkGray} />
            <TextSmall>Promodoro</TextSmall>
          </CardButton>

          <CardButton onPress={() => navigation.navigate("LatihanSoal")}>
          <FontAwesome5 name="tasks" size={70} color={DarkGray} />
          <TextSmall>UTBK</TextSmall>
          </CardButton>
        </View>
        <CardList></CardList>
      </ScrollView>
    </Layout>
  );
};

const CardButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <CardList style={{ width: widthPercentage(40), flexDirection: "column" }}>
        {children}
      </CardList>
    </TouchableOpacity>
  );
};
