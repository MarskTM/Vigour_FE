import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import UserInfo from "../../components/Profile/UserInfo";
import { Icon, Button } from "@rneui/themed";

export default function UpdateProfile() {
  return (
    <ScrollView
      style={{
        height: "75%",
      }}
    >
      <View className="">
        <Text className="uppercase font-semibold text-3xl text-center mt-14 mb-8">
          Cập nhật thông tin
        </Text>
      </View>

      <TouchableOpacity className="w-full h-48 items-center justify-center" onPress={() => {
        console.log("Upload image to driver");
      }}>
        <Image
          source={require("../../../assets/images/uploadImg.png")}
          className="w-32 h-32 rounded-full"
        ></Image>
        <Text className="">Upload image !</Text>
      </TouchableOpacity>

      <ProfileInfo />
      <UserInfo />

      <View className="items-center">
          <Button
            title="Cập nhật"
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
    </ScrollView>
  );
}
