import { Image, View, Text } from "react-native";
import React from "react";

export default function HomeHeader() {
  return (
    <View>
      <View className="flex flex-row mt-20">
        <View className="w-2/3 mt-4 ml-6">
          <Text className="text-xl text-gray-400">Welcome Home</Text>
          <Text className="text-3xl font-semibold">$Profile Name</Text>
        </View>
        <View className="w-1/4 mt-2 mr-4">
          <Image
            source={require("../../../assets/images/logo.png")}
            className="w-20 h-20 rounded-full"
          />
        </View>
      </View>
    </View>
  );
}
