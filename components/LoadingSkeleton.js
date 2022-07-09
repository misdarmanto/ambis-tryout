import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

export default function LoadingSkeleton() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
    >
      <LottieView
        style={{ width: 200, height: 200 }}
        source={require("../assets/85646-loading-dots-blue.json")}
        autoPlay
        loop={true}
      />
    </View>
  );
}




// import React from "react";
// import { GlobalStyles } from "../Global/GlobalStyles";
// import { View } from "react-native";
// import SkeletonContent from "react-native-skeleton-content";
// import { widthSize, heightSize } from "../helpers/layoutDimension";

// const layoutList = [
//   {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     borderWidth: 1,
//     borderColor: "#e5e5e5",
//     borderRadius: 10,
//     width: widthSize("96%"),
//     children: [
//       //round icon
//       {
//         width: widthSize("17%"),
//         height: heightSize("9%"),
//         borderRadius: 45,
//         marginRight: widthSize("3%"),
//       },
//       {
//         flexDirection: "column",
//         minHeight: 100,
//         justifyContent: "center",
//         //title list
//         children: [
//           {
//             minHeight: 30,
//             marginBottom: 10,
//             width: widthSize("70%"),
//             borderRadius: 10,
//           },
//           {
//             //button content
//             flexDirection: "row",
//             children: [
//               {
//                 minHeight: 30,
//                 width: widthSize("20%"),
//                 marginRight: widthSize("4%"),
//                 borderRadius: 10,
//               },
//               {
//                 minHeight: 30,
//                 width: widthSize("20%"),
//                 marginRight: widthSize("4%"),
//                 borderRadius: 10,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];

// const bannerLayout = [
//   {
//     width: widthSize("96%"),
//     height: heightSize("15%"),
//   },
// ];

// const badgedLayout = [
//   {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: widthSize("95%"),
//     marginTop: heightSize("3%"),
//     children: [
//       {
//         width: widthSize("25%"),
//         height: heightSize("5%"),
//         borderRadius: 20,
//       },
//       {
//         width: widthSize("30%"),
//         height: heightSize("5%"),
//         borderRadius: 20,
//       },
//       {
//         width: widthSize("30%"),
//         height: heightSize("5%"),
//         borderRadius: 20,
//       },
//     ],
//   },
// ];

// const ListSkeleton = () => {
//   return (
//     <SkeletonContent
//       containerStyle={{ flex: 1, width: 300 }}
//       isLoading={true}
//       layout={layoutList}
//     />
//   );
// };

// const BannerSkeleton = () => {
//   return (
//     <SkeletonContent
//       containerStyle={{ flex: 1, width: 300 }}
//       isLoading={true}
//       layout={bannerLayout}
//     />
//   );
// };
// const BadgedSkeleton = () => {
//   return (
//     <SkeletonContent
//       containerStyle={{ flex: 1, width: 300 }}
//       isLoading={true}
//       layout={badgedLayout}
//     />
//   );
// };

// export default function LoadingSkeleton() {
//   return (
//     <View style={[GlobalStyles.globalContainer, {backgroundColor: "#FFF"} ]}>
//       <BannerSkeleton />
//       <BadgedSkeleton />
//       <ListSkeleton />
//       <ListSkeleton />
//       <ListSkeleton />
//       <ListSkeleton />
//     </View>
//   );
// }
