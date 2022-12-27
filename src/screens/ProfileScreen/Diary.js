import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Button, Icon } from "@rneui/base";
import Emotion from "../../components/DropDown/Emotion";

export default function Diary({ navigation }) {
  return (
    <View
      style={{
        width: "100%",
        height: 930,
      }}
    >
      <View className="w-ful h-12 bg-neutral-500"></View>
      <View className="flex-row pl-4 mt-2 h-14 items-center border-b-2">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Icon
            color={"#747474"}
            name="arrow-left"
            type="font-awesome-5"
            size={20}
          ></Icon>
        </TouchableOpacity>
        <Text className="ml-6 text-lg font-bold">Nhật ký mỗi ngày</Text>

        <Button
          title="Lưu"
          buttonStyle={{
            backgroundColor: "#1A54E7",
            borderWidth: 1,
            borderColor: "white",
            borderRadius: 30,
          }}
          containerStyle={{
            width: 70,
            height: 50,
            marginTop: 35,
            marginLeft: 100,
            marginBottom: 25,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          onPress={() => {
            alert("Đã lưu");
            navigation.navigate("HomeTabs");
          }}
        />
      </View>

      <Emotion />

      <View className="w-7/8 h-1/2 mt-10 ">
        <TextInput
          className="w-full h-full pl-4 pr-6 rounded-lg border-2 border-slate-400"
          placeholder="Lưu giữ điều gì đáng nhớ để hôm nay trôi qua không vô nghĩa"
        ></TextInput>
      </View>
    </View>
  );
}
