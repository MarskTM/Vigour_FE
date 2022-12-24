import { TouchableOpacity, TextInput, Image, View, Text } from "react-native";
import React, { useState } from "react";
import { Icon, Button } from "@rneui/themed";

export default function UserInfo() {
  const [showPass, SetShowPass] = useState(false);
  return (
    <View>
      <Text className="text-base ml-6 mt-10">Tên tài khoản:</Text>
      <View className="items-center ">
        <TouchableOpacity className="w-96 h-12 bg-zinc-50 items-center justify-center border-2 border-slate-300">
          <TextInput
            placeholder="Tên đắng nhập"
            className="pl-4 pr-6 w-full h-8 text-lg "
            onChangeText={(e) => {
              console.log(e);
            }}
          ></TextInput>
        </TouchableOpacity>
      </View>

      <Text className="text-base ml-6 mt-4">Mật khẩu:</Text>
      <View className="flex-row items-center justify-center">
        <TouchableOpacity className="w-96 h-12 bg-zinc-50 items-center justify-center border-2 border-slate-300">
          <TextInput
            placeholder="password"
            className="pl-4 pr-6 w-full h-8 text-lg "
            secureTextEntry={showPass}
            onChangeText={(e) => {
              console.log(e);
            }}
          ></TextInput>
        </TouchableOpacity>
        <View className="absolute right-10">
          <TouchableOpacity
            onPress={() => {
              SetShowPass(!showPass);
            }}
          >
            <Icon
              name="eye"
              type="font-awesome-5"
              color="gray"
              size={19}
            ></Icon>
          </TouchableOpacity>
        </View>
      </View>

      <Text className="text-base ml-6 mt-4">Nhập lại mật khẩu:</Text>
      <View className="flex-row items-center justify-center">
        <TouchableOpacity className="w-96 h-12 bg-zinc-50 items-center justify-center border-2 border-slate-300">
          <TextInput
            placeholder="password"
            className="pl-4 pr-6 w-full h-8 text-lg "
            secureTextEntry={showPass}
            onChangeText={(e) => {
              console.log(e);
            }}
          ></TextInput>
        </TouchableOpacity>
        <View className="absolute right-10">
          <TouchableOpacity
            onPress={() => {
              SetShowPass(!showPass);
            }}
          >
            <Icon
              name="eye"
              type="font-awesome-5"
              color="gray"
              size={19}
            ></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
