import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import React from "react";

export default function HomeContent({ navigation }) {
  return (
    <ScrollView style={{
      height: "75%",
    }}>
      <View
        className="flex-col mb-10 "
        backgroundImage={require("../../../assets/images/quizz-bg.jpg")}
      >
        <TouchableOpacity className="mt-8" onPress={() => {
          navigation.navigate("Quizz");
        }}
        >
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

        <TouchableOpacity className="mt-6" onPress={() => {
          navigation.navigate("Forum");
        }}>
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

        <TouchableOpacity className="mt-6" onPress={() => {
          navigation.navigate("NewsFeed");
        }}>
          <View className="w-4/5 h-32 m-auto rounded-full">
            <ImageBackground
              source={require("../../../assets/images/forum-bg.jpg")}
              resizeMode="stretch"
              className="w-full h-32 flex-row items-end"
              imageStyle={{ borderRadius: 16 }}
            >
              <Text className="text-end text-4xl text-white font-bold mb-2 ml-6 ">
                Tâm lý
              </Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="mt-6" onPress={()=> {
          navigation.navigate("NewsFeed");
        }}>
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

        <TouchableOpacity className="mt-6" onPress={() => {
          navigation.navigate("NewsFeed");
        }}>
          <View className="w-4/5 h-32 m-auto rounded-full">
            <ImageBackground
              source={require("../../../assets/images/news-bg.jpg")}
              resizeMode="stretch"
              className="w-full h-32 flex-row items-end"
              imageStyle={{ borderRadius: 16 }}
            >
              <Text className="text-end text-4xl text-white font-bold mb-2 ml-6">
                Bài tập yoga
              </Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>

  );
}
