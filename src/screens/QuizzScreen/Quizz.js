import { TouchableOpacity, Image, View, Text } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";

export default function Quizz({ navigation }) {
  return (
    <View>
      <View>
        <Text className="w-full h-12 bg-indigo-100"></Text>
      </View>

      <View className="w-full h-1/3">
        {/* Header */}
        <View className="flex-row items-center justify-end">
          <TouchableOpacity
            className="mr-24"
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Icon
              name="chevron-left"
              color={"#9C89A8"}
              type="font-awesome-5"
              size={35}
              style={{}}
            ></Icon>
          </TouchableOpacity>
          <Text className="text-3xl font-semibold text-zinc-600">
            $Kim Mạnh
          </Text>
          <View className="w-1/4 mt-2 mr-4 ml-4">
            <Image
              source={require("../../../assets/images/logo.png")}
              className="w-20 h-20 rounded-full"
            />
          </View>
        </View>

        {/* Body */}
        <View className="w-5/6 h-24 m-auto border-2 flex-row rounded-xl items-center justify-center bg-white">
          <Icon
            name="bolt"
            color={"#9C89A8"}
            type="font-awesome-5"
            size={35}
            style={{}}
          ></Icon>
          <Text className="ml-4 font-bold text-4xl text-stone-400">
            Kiểm tra tâm lý
          </Text>
        </View>

        <View className="w-1/2 ml-4 flex-row">
          <Text className="w-1/3 text-lg text-center border-b-4 border-red-200">
            Tâm lý
          </Text>
          <Text className="w-1/3 text-lg text-center">EQ</Text>
          <Text className="w-1/3 text-lg text-center">Cá nhân</Text>
        </View>
      </View>

      <View className="w-full h-2/3 flex-row">
        <TouchableOpacity className="w-40 ml-8 mt-8 h-36 bg-green-100 rounded-lg">
          <Text className="w-full h-12 mb-8 text-xl text-center font-semibold bg-indigo-100 rounded-lg">
            Bài test PHQ-9
          </Text>
          <Icon
            name="vial"
            color={"#9C89A8"}
            type="font-awesome-5"
            size={35}
            style={{ justifyItems: "start" }}
          ></Icon>
        </TouchableOpacity>

        <TouchableOpacity className="w-40 ml-8 mt-8 h-36 bg-green-100 rounded-lg">
          <Text className="w-full h-12 mb-8 text-xl text-center font-semibold bg-indigo-100 rounded-lg">
            Bài test RADS
          </Text>
          <Icon
            name="vial"
            color={"#9C89A8"}
            type="font-awesome-5"
            size={35}
            style={{ justifyItems: "start" }}
          ></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
}
