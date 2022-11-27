import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Lottie from "lottie-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function AutoLog({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      return navigation.navigate("Login");
    }, 300);
  },[]);

  return (
    <View>
      <Lottie
        source={require("../../../assets/lottieFile/load_app.json")}
        autoPlay
        loop
        className="w-80 h-96 mt-20"
      />
    </View>
  );
}
