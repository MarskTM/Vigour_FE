import { TouchableOpacity, TextInput, Image, View, Text } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, LinearProgress, Button } from "@rneui/themed";
import AuthApi from "../../util/API/Auth.app";

const loginForm = {
  usernames: "",
  passwords: "",
};

export default function LoginScreen({ navigation }) {
  const [showPass, SetShowPass] = useState(true);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  const onLogin = async () => {
    const res = dispatch(loginForm)
    console.log(res);
  };

  useEffect(() => {
    if (user.isLogin) {
      navigation.navigate("HomeTabs");
    }
  }, [user]);

  return (
    <View
      style={{
        width: "100%",
        height: 930,
      }}
    >
      {/* Logo app */}
      <View className="h-48 mt-32 mb-12 m-auto rounded-md shadow-lg shadow-cyan-600/50">
        <Image
          source={require("../../../assets/images/logo-test.png")}
          className="w-48 h-48 m-auto"
          style={{
            borderRadius: 10,
          }}
        />
      </View>

      {/*Form login */}
      <View className="w-full h-80 flex">
        {/* acount */}
        <View className="flex-row items-center justify-center">
          <View className="w-8 h-11 pt-2 bg-blue-200 rounded-l-md">
            <Icon name="envelope" color="#000" type="font-awesome-5"></Icon>
          </View>

          <TextInput
            className="w-80 h-11 pl-2 pr-12 fs-10 text-lg bg-blue-200 rounded-r-md"
            placeholder="Your email"
          />
        </View>
        {/* password */}
        <View className="flex-row items-center justify-center mt-6">
          <View className="w-8 h-11 pt-2 bg-blue-200 rounded-l-md">
            <Icon name="lock" type="font-awesome-5"></Icon>
          </View>
          <TextInput
            className="w-80 h-11 pl-2 pr-12 fs-10 text-lg bg-blue-200 rounded-r-md"
            placeholder="Password"
            secureTextEntry={showPass}
          />
          <View className="absolute right-12">
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

        {/* fogot password */}
        <TouchableOpacity className="w-32 h-12 mt-4 ml-72">
          <View>
            <Text className="ml-2 text-sm text-blue-700">Quên mật khẩu ?</Text>
          </View>
        </TouchableOpacity>

        {/* <View className="w-80 h-20 ml-14 mt-16"> */}
        <Button
          title="Đăng nhập"
          buttonStyle={{
            backgroundColor: "#1A54E7",
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 30,
          }}
          containerStyle={{
            width: 300,
            marginTop: 18,
            marginBottom: 25,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          onPress={onLogin}
        />

        {/* Line way */}
        <View className="w-5/6 mt-8 ml-9">
          <LinearProgress variant="determinate" color="gray"></LinearProgress>
        </View>
      </View>

      {/* Login with google */}
      <View className="flex flex-row w-full h-16">
        <TouchableOpacity className="w-1/3 h-12 m-auto rounded-full bg-stone-200">
          <View className="h-12 flex-row justify-center items-center rounded-full bg-stone-200">
            <Image
              source={require("../../../assets/images/google-icon.png")}
              className="w-8 h-8"
            />
            <Text className="ml-2 text-base font-medium">google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="w-1/3 h-12 m-auto rounded-full bg-stone-200">
          <View className="h-12 flex-row justify-center items-center rounded-full bg-stone-200">
            <Image
              source={require("../../../assets/images/facebook-icon.png")}
              className="w-8 h-8"
            />
            <Text className="ml-2 text-base font-medium">facebook</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* create new acount */}
      <View className="w-full h-16 mt-8">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
          className="absolute top-8 right-8"
        >
          <Text className=" text-base text-blue-800">Tạo tài khoản mới !</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
