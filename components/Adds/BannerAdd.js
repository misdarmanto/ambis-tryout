import React from "react";
import { AdMobBanner } from "expo-ads-admob";
import { View } from "react-native";

function BannerAdd({size}){
  return (
    <View>
      <AdMobBanner
        adUnitID="ca-app-pub-8095237298596091/4436035502"
        bannerSize={size ? size : "largeBanner"}
        onDidFailToReceiveAdWithError={() => console.log("error")}
      />
    </View>
  );
};

export default BannerAdd