import {
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  View,
  Text,
} from "react-native";
import React from "react";
import { Icon, LinearProgress, Button } from "@rneui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.login}>
      {/* Logo app */}
      <View className="fixed m-auto mt-10 rounded-md shadow-lg shadow-cyan-600/50">
        <Image
          source={require("../../../assets/images/logo-test.png")}
          className="w-48 h-48 rounded-md"
        />
      </View>

      {/*Form login */}
      <View style={styles.container} className="fixed">
        <View style={styles.inputBox}>
          <View className="w-8 h-11 pt-2 bg-blue-200 rounded-l-md">
            <Icon name="envelope" color="#000" type="font-awesome-5"></Icon>
          </View>
          <TextInput
            className="w-80 h-11 pl-2 pr-12 fs-10 text-lg bg-blue-200 rounded-r-md"
            placeholder="Your email"
          />
        </View>

        <View style={styles.inputBox}>
          <View className="w-8 h-11 pt-2 bg-blue-200 rounded-l-md">
            <Icon name="lock" type="font-awesome-5"></Icon>
          </View>
          <TextInput
            className="w-80 h-11 pl-2 pr-12 fs-10 text-lg bg-blue-200 rounded-r-md"
            placeholder="Password"
          />
          <View className="absolute right-10">
            <Icon name="eye" type="font-awesome-5" color="gray"></Icon>
          </View>
        </View>
        <View className="absolute right-10">
          <Text style={styles.forgotPassword}>Quền mật khẩu ?</Text>
        </View>

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
            marginTop: 60,
            marginBottom: 30,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
        {/* </View> */}

        {/* Line */}
        <View className="w-5/6 mt-8 ml-9">
          <LinearProgress variant="determinate" color="gray"></LinearProgress>
        </View>
      </View>

      {/* Login with google */}
      <View className="flex flex-row" style={styles.authAnother}>
        <View className="w-1/2 h-14 rounded-full bg-stone-200">
          <Image
            source={require("../../../assets/images/google-icon.png")}
            className="w-10 h-10 m-auto"
          />
        </View>

        <View className="w-1/2 h-14 ml-10 rounded-full bg-stone-200">
          <Image
            source={require("../../../assets/images/facebook-icon.png")}
            className="w-10 h-10 m-auto"
          />
        </View>
      </View>

      {/* create new acount */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <View className="h-28 mt-10 ">
          <Text className="absolute top-8 right-8 text-base text-blue-800">
            Tạo tài khoản mới !
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    width: "100%",
    height: 850,
  },

  container: {
    height: 350,
    width: "100%",
    display: "flex",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  forgotPassword: {
    top: 150,
    color: "blue",
  },

  authAnother: {
    width: "70%",
    display: "flex",
    marginLeft: 40,
  },
});
