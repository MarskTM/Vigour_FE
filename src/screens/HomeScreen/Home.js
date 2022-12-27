import { Image, View, Text, ImageBackground } from "react-native";
import React from "react";
import HomeHeader from "../../components/Home/HomeHeader";
import Emotion from "../../components/DropDown/Emotion";
import HomeContent from "../../components/Home/HomeContent";
import { ClassNames } from "@emotion/react";

export default function Home({ navigation }) {
  const backgroundEmotion = {};
  return (
    <View>
      <HomeHeader />
      <Emotion />
      <HomeContent navigation={navigation} />
    </View>
  );
}
