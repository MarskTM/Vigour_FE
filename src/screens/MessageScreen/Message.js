import { TouchableOpacity, View, Text, TextInput } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import { color } from "react-native-reanimated";

export default function Message() {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        // backgroundColor: "#ccc"
      }}
    >
      <View className="w-full h-32 bg-blue-200 items-center ">
        <TouchableOpacity className="w-11/12 h-16  mt-14 pl-4 flex-row items-center bg-slate-200 rounded-2xl">
          <Icon
            color={"#747474"}
            name="search"
            type="font-awesome-5"
            size={30}
          ></Icon>
          {/* <Text className=" ">Tìm kiếm theo từ khóa</Text> */}
          <TextInput
            className="ml-4 w-full pr-16 text-base"
            type="text"
            placeholder="Tìm kiếm theo từ khóa"
          />
        </TouchableOpacity>

        <View className="w-full h-16 pt-4 pl-4">
          <Text className="w-44 mt-4 h-10 text-2xl font-semibold text-neutral-700 border-b-4 border-blue-200">
            Có thể bạn biết
          </Text>
        </View>
      </View>
    </View>
  );
}
