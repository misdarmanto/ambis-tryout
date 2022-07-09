import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Layout from "../../Global/Layout";
import CardList from "../../components/Card/cardList";
import { heightPercentage } from "../../Global/Dimensions";

export default SettingScreen = () => {
  return (
    <Layout>
      <TouchableOpacity>
        <CardList style={{ height: heightPercentage(15) }}></CardList>
      </TouchableOpacity>
      <TouchableOpacity>
        <CardList style={{ height: heightPercentage(15) }}></CardList>
      </TouchableOpacity>
    </Layout>
  );
};
