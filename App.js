import React from "react";
import AppNavigation from "./navigations/AppNavigation";
import { LogBox } from "react-native";
import _ from "lodash";
import { StatusBar } from "expo-status-bar";

LogBox.ignoreLogs(["Warning:..."]); // ignore specific logs
LogBox.ignoreAllLogs(); // ignore all logs
const _console = _.clone(console);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

export default function App() {
  return (
    <>
      <AppNavigation />
      <StatusBar style="light" />
    </>
  );
}
