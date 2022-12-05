import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";

export default function HomeContent() {
  return (
    <View
      className="flex-col"
      backgroundImage={require("../../../assets/images/quizz-bg.jpg")}
    >
      <TouchableOpacity className="mt-8">
        <View className="w-4/5 h-32 m-auto rounded-full">
          <ImageBackground
            source={require("../../../assets/images/quizz-bg.jpg")}
            resizeMode="stretch"
            className="w-full h-32 flex-row items-end"
            imageStyle={{ borderRadius: 16 }}
          >
            <Text className="text-end text-4xl text-white font-bold mb-2 ml-6 ">
              Kiểm tra tâm lý
            </Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="mt-6">
        <View className="w-4/5 h-32 m-auto rounded-full">
          <ImageBackground
            source={require("../../../assets/images/forum-bg.jpg")}
            resizeMode="stretch"
            className="w-full h-32 flex-row items-end"
            imageStyle={{ borderRadius: 16 }}
          >
            <Text className="text-end text-4xl text-white font-bold mb-2 ml-6 ">
              Diễn đàn
            </Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="mt-6">
        <View className="w-4/5 h-32 m-auto rounded-full">
          <ImageBackground
            source={require("../../../assets/images/news-bg.jpg")}
            resizeMode="stretch"
            className="w-full h-32 flex-row items-end"
            imageStyle={{ borderRadius: 16 }}
          >
            <Text className="text-end text-4xl text-white font-bold mb-2 ml-6">
              Tin tức sức khỏe
            </Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  );
}
