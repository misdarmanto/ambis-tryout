import { AdMobInterstitial } from "expo-ads-admob";

export default function interstitialAdd() {
  AdMobInterstitial.setAdUnitID("ca-app-pub-8095237298596091/2089362749");
  AdMobInterstitial.requestAdAsync().then(() => {
    AdMobInterstitial.showAdAsync()
      .then(() => null)
      .catch((e) => console.log(e));
  });
}


