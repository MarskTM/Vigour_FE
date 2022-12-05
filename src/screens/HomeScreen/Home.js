import { Image, View, Text } from "react-native";
import React from "react";
import HomeHeader from "../../components/Home/HomeHeader";
import Emotion from "../../components/DropDown/Emotion";
import HomeContent from "../../components/Home/HomeContent";


export default function Home() {
  return (
    <View>
      <HomeHeader />
      <Emotion />
      <HomeContent />
    </View>
  );
}
