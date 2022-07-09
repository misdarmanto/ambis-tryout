import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Quiz from "../screens/StackScreen/Quiz";
import ListQuiz from "../screens/TabScreen/ListQuiz";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import HomeScreen from "../screens/TabScreen/HomeScreen";
import SettingScreen from "../screens/TabScreen/SettingScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { heightPercentage, widthPercentage } from "../Global/Dimensions";
import BerhitungCepatScreen from "../screens/GameScreen/BerhitungCepatScreen";
import QuizGame from "../screens/QuizScreen/QuizGame";
import PromoDoroScreen from "../screens/PromodoroScreen/PromodoroScreen";
import UserScreen from "../screens/StackScreen/UserScreen";
import { DarkGray } from "../Global/Color";
// import Test from "../screens/Test";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HeaderRightComponent = () => {
  return (
    <TouchableOpacity>
      <Ionicons
        name="share-social-outline"
        size={35}
        color={DarkGray}
        style={{ marginRight: widthPercentage(3) }}
      />
    </TouchableOpacity>
  );
};

const HeaderLeftComponent = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("User")}
      style={{ marginLeft: widthPercentage(5) }}
    >
      <Fontisto name="nav-icon-a" size={24} color={DarkGray} style={{width: widthPercentage(10)}}/>
    </TouchableOpacity>
  );
};

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerLeft: () => <HeaderLeftComponent />,
        headerRight: () => <HeaderRightComponent />,
        headerTitleAlign: "center",
        tabBarIcon: ({ color }) => {
          if (route.name === "Home") {
            return <Feather name="home" size={24} color={color} />;
          } else if (route.name === "Settings") {
            return <AntDesign name="setting" size={24} color={color} />;
          } else if (route.name === "LatihanSoal") {
            return <FontAwesome5 name="tasks" size={24} color={color} />;
          }
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="LatihanSoal" component={ListQuiz} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{
            title: "Tryout",
            headerTitleStyle: "bold",
          }}
        />
        <Stack.Screen
          name="BerhitungCepat"
          component={BerhitungCepatScreen}
          options={{
            title: "Berhitung Cepat",
            headerTitleStyle: "bold",
          }}
        />
        <Stack.Screen
          name="QuizGame"
          component={QuizGame}
          options={{
            title: "Quiz Game",
            headerTitleStyle: "bold",
          }}
        />
        <Stack.Screen
          name="Promodoro"
          component={PromoDoroScreen}
          options={{
            title: "Promodoro",
            headerTitleStyle: "bold",
          }}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{
            title: "user",
            headerTitleStyle: "bold",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
