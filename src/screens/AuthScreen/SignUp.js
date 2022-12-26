import { TouchableOpacity, TextInput, Image, View, Text } from "react-native";
import React, { useState } from "react";
import { Icon, Button } from "@rneui/themed";

import UserInfo from "../../components/Profile/UserInfo";
import ProfileInfo from "../../components/Profile/ProfileInfo";

export default function SignUp({ navigation }) {
  return (
    <View
      style={{
        width: "100%",
        flex: 1
      }}

      className="flex justify-center"
    >




      <View className="w-full h-full bg-teal-50 m-auto">
        <View className="">
          <Text className="uppercase font-semibold text-3xl text-center mt-10">Đăng ký</Text>
        </View>

        <ProfileInfo />
        <UserInfo />

        <View className="items-center">
          <Button
            title="Đăng ký"
            buttonStyle={{
              backgroundColor: "#60A5FA",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 40,
            }}
            containerStyle={{
              width: 300,
              marginTop: "10%",
              marginBottom: 15,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            // onPress={onLogin}
            onPress={() => {
              alert("Đăng ký thành công");
            }}
          />
        </View> 

        {/* Back to login screen */}
        <View className=" flex-row justify-center  items-end ">
          <Text className="text-base">Đã có tài khoản, </Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Login");
          }}>
            <Text className="text-base text-blue-800">Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}