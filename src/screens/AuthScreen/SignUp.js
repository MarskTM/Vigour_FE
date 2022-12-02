import { TouchableOpacity, TextInput, Image, View, Text } from "react-native";
import React, {useState} from "react";
import { Icon, Button } from "@rneui/themed";

export default function SignUp({ navigation }) {
  const [showPass, SetShowPass] = useState(true);

  return (
    <View
      style={{
        width: "100%",
        height: 930,
      }}
    >
      <Image
        source={require("../../../assets/images/signup-bg.png")}
        className="w-full h-auto rounded-md"
      />

      {/* Form info user */}
      <View className="bg-red-50 m-auto h-auto">
        {/* Email */}
        <View className="flex flex-row m-auto pt-10">
          <View className="flex-initial  w-8 h-11 pt-2 bg-zinc-200 rounded-l-md">
            <Icon name="envelope" color="#000" type="font-awesome-5"></Icon>
          </View>
          <TextInput
            className="flex-initial w-5/6 h-11 pl-2 pr-12 fs-10 text-lg bg-zinc-200 rounded-r-md"
            placeholder="Your email"
          />
        </View>

        {/* Password */}
        <View className="flex flex-row m-auto mt-10">
          <View className="flex-initial  w-8 h-11 pt-2 bg-zinc-200 rounded-l-md">
            <Icon name="lock" type="font-awesome-5"></Icon>
          </View>
          <TextInput
            className="flex-initial w-5/6 h-11 pl-2 pr-12 fs-10 text-lg bg-zinc-200 rounded-r-md"
            placeholder="Password"
            secureTextEntry={showPass}
          />
          <View className="flex-inital absolute right-4 top-2">
            <TouchableOpacity
              onPress={() => {
                SetShowPass(!showPass);
              }}
            >
              <Icon name="eye" type="font-awesome-5" color="gray" size={19}></Icon>
            </TouchableOpacity>
          </View>
        </View>

        {/* Authen password */}
        <View className="flex flex-row m-auto mt-8">
          <View className="flex-initial  w-8 h-11 pt-2 bg-zinc-200 rounded-l-md">
            <Icon name="lock" type="font-awesome-5"></Icon>
          </View>
          <TextInput
            className="flex-initial w-5/6 h-11 pl-2 pr-12 fs-10 text-lg bg-zinc-200 rounded-r-md"
            placeholder="Password"
            secureTextEntry={showPass}
          />
          <View className="flex-inital absolute right-4 top-2">
            <TouchableOpacity
              onPress={() => {
                SetShowPass(!showPass);
              }}
            >
              <Icon name="eye" type="font-awesome-5" color="gray" size={20}></Icon>
            </TouchableOpacity>
          </View>
        </View>

        <Button
          title="Đăng ký"
          buttonStyle={{
            backgroundColor: "#1573FF",
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 30,
          }}
          containerStyle={{
            width: 300,
            marginTop: 60,
            marginBottom: 30,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ fontWeight: "bold" }}
        />

        <View className="h-14 flex flex-row relative top-4 left-52 bg-red-50">
          <Text className="text-base">Đã có tài khoản ? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text className="text-base text-blue-800">Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Image
        source={require("../../../assets/images/footer-signup.png")}
        className="w-full h-auto rounded-md"
      />
    </View>
  );
}
