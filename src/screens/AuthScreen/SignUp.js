import { TouchableOpacity, TextInput, Image, View, Text } from "react-native";
import React, { useState } from "react";
import { Icon, Button } from "@rneui/themed";

import UserInfo from "../../components/Profile/UserInfo";
import ProfileInfo from "../../components/Profile/ProfileInfo";

export default function SignUp({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: 930,
      }}
    >
      <View>
        <Text className="w-full h-12 bg-blue-100"></Text>
      </View>

      <View>
        <Image
          source={require("../../../assets/images/signup-bg.png")}
          className="w-full h-32"
        ></Image>
      </View>

      <View className="w-full h-full bg-teal-50">
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
              marginTop: "15%",
              marginBottom: 25,
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
        <View className="mt-8 mr-6 flex-row justify-end items-end">
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
