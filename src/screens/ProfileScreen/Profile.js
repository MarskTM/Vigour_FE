import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
export default function Profile({ navigation }) {
  return (
    <View
      style={{
        width: "100%",
        height: 930,
      }}
    >
      {/* Button back */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <View className="flex flex-row justify-items-center items-center mt-20 ml-10">
          <View className="mr-4">
            <Icon
              name="arrow-left"
              type="font-awesome-5"
              size={25}
              color="#000"
            />
          </View>
          <Text className="text-3xl font-medium">Trang chủ</Text>
        </View>
      </TouchableOpacity>

      {/* Avata */}
      <View className="w-48 h-48 ml-28 mt-10 relative">
        <Image
          source={require("../../../assets/images/logo.png")}
          className="w-48 h-48 rounded-full"
        ></Image>
        <View className="absolute bottom-2 right-2">
          <TouchableOpacity>
            <Icon
              name="id-badge"
              type="font-awesome-5"
              size={40}
              color="#7E688B"
            ></Icon>
          </TouchableOpacity>
        </View>
      </View>

      {/* View Information */}
      <View className="h-80 bg-blue-200">
        <TextInput
          className="w-80 h-11 pl-4 pr-6 fs-10 m-auto text-lg bg-blue-400 rounded-full"
          placeholder="Super Admin"
        ></TextInput>
      </View>
    </View>
  );
}
