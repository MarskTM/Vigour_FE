import { TouchableOpacity, TextInput, Image, View, Text } from "react-native";
import React, { useState } from "react";
import { Icon, LinearProgress, Button } from "@rneui/themed";
import { baseURL } from "../../util/API/URL_API";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Dialog } from '@rneui/themed';
import { storeData } from "../../util/AsyncStorage/StorageAsync";

export default function LoginScreen() {
  const [showPass, SetShowPass] = useState(true);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();

  const [isShowDialog, setIsShowDialog] = useState(false)
  const [mess, setMess] = useState('')
  const handleLogin = () => {

    setMess('')
    if (!username.length > 0 || !password.length > 0) {
      setMess("Vui lòng điền đầy đủ tài khoản và mật khẩu !")
    }
    else {
      setIsShowDialog(true)
      let data = JSON.stringify({
        "username": username,
        "password": password
      });

      let config = {
        method: 'post',
        url: `${baseURL}user/login`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios(config)
        .then((response) => {
          if (response.data.code == 200) {
            setIsShowDialog(false)
            storeData("TOKEN", response.data.token).then(() => console.log("Thanh cong")).catch(() => console.log("Loi"))
            navigation.navigate("HomeTabs")
          }
          else if (response.data.code == 400) {
            setMess("Sai tài khoản hoặc mật khẩu")
            setIsShowDialog(false)
          }
        })
        .catch((error) => {
          setIsShowDialog(false)
          console.log(error);
        });
    }
  }

  console.log(username, password)
  return (
    <View
      style={{ flex: 1, width: "100%", }}
    >
      {/* Logo app */}
      <View className="h-48 mt-32 m-auto rounded-md shadow-lg shadow-cyan-600/50">
        <Image
          source={require("../../../assets/images/logo-test.png")}
          className="w-48 h-48 m-auto"
          style={{
            borderRadius: 10,
          }}
        />
      </View>

      {/*Form login */}
      <View className="w-full h-80 mb-20 flex">
        {/* acount */}
        <View className="flex-row items-center justify-center">
          <View className="w-8 h-11 pt-2 bg-blue-200 rounded-l-md">
            <Icon name="envelope" color="#000" type="font-awesome-5"></Icon>
          </View>

          <TextInput
            className="w-80 h-11 pl-2 pr-12 fs-10 text-lg bg-blue-200 rounded-r-md"
            placeholder="Your email"
            onChangeText={text => setUsername(text)}
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
            onChangeText={text => setPassword(text)}
          />
          <View className="absolute right-16">
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
        <View className="">
          <Text className="text-center text-sm text-red-600 " >{mess}</Text>
        </View>

        {/* fogot password */}
        <TouchableOpacity className=" w-screen mt-2">
          <View className="">
            <Text className="text-center text-sm text-blue-700 " >Quên mật khẩu ?</Text>
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
          // onPress={onLogin}
          onPress={() => {
            handleLogin()
          }}
        />



        <View className="w-screen h-10">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          // className="absolute top-5 right-8"
          >
            <Text className="text-center text-base text-blue-800 ">Tạo tài khoản mới !</Text>
          </TouchableOpacity>
        </View>

        {/* Line way */}
        <View className="w-5/6 relative ml-9">
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

      <Dialog isVisible={isShowDialog}>
        <Dialog.Loading />
      </Dialog>

    </View>
  );
}
