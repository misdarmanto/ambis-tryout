import { AdMobRewarded } from "expo-ads-admob";

function RewardedAdd() {
  AdMobRewarded.setAdUnitID("ca-app-pub-8095237298596091/9584709385");
  AdMobRewarded.requestAdAsync().then(() => {
    AdMobRewarded.showAdAsync()
      .then(() => null)
      .catch((e) => console.log(e.message));
  });
}

export default RewardedAdd;
