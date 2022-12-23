import { View, Text } from "react-native";
import React from "react";

export default function Notification() {
  return (
    <View
      style={{
        width: "100%",
        height: 930,
      }}
    >
      <View classNam=" pl-8 pt-4 h-14 bg-blue-200 ">
        <Text className="text-xl font-semibold mt-10">
          Thông báo
        </Text>
      </View>
    </View>
  );
}
