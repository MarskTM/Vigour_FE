import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Button, Icon } from "@rneui/base";
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
        // onPress={() => {
        //   navigation.navigate("Home");
        // }}
      >
        <View className="mt-14 ml-2">
          <Text className="text-3xl font-semibold text-zinc-600">Hồ sơ của tôi</Text>
        </View>
      </TouchableOpacity>

      {/* Avata */}
      <View className="h-24 ml-4 mt-6 flex-row">
        <Image
          source={require("../../../assets/images/logo.png")}
          className="w-20 h-20 rounded-full"
        ></Image>

        <View className="ml-4">
          <Text className="mt-4 font-medium text-xl text-zinc-600">$Kim Mạnh</Text>
          <Text className="mt-2 text-slate-400">11/12/2002</Text>
        </View>
      </View>

      {/* Button Edit */}
      <View className="mb-4">
        <Button
          title="Cập nhập hồ sơ"
          buttonStyle={{
            borderColor: "rgba(78, 116, 289, 1)",
          }}
          type="outline"
          raised
          titleStyle={{ color: "#9C89A8" }}
          containerStyle={{
            width: 400,
            marginHorizontal: 10,
          }}
          onPress={() => {console.log("Cap nhat ho so")}}
        />
      </View>

      {/* View relationship Infor */}
      <View className="h-20 flex-row border-y-2 border-slate-300">
        <View className="m-auto">
          <Text className="">Bài viết</Text>
          <Text className="m-auto font-semibold">0</Text>
        </View>
        <View className="m-auto">
          <Text>Nhật ký</Text>
          <Text className="m-auto font-semibold">0</Text>
        </View>
        <View className="m-auto">
          <Text>Bạn bè</Text>
          <Text className="m-auto font-semibold">0</Text>
        </View>
      </View>

      {/* View Profile Information */}

    </View>
  );
}
