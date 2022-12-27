import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
export default function Message({ navigation}) {
  return (
    <SafeAreaView
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

      <ScrollView className="w-full h-4/5 mt-20">

        {/* User 1*/}
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate("Chat");
            console.log("nhắn tin với Thỏ bất lực");
          }}
          className="bg-white w-4/5 h-20 mt-2 ml-8 bg-blue-50 rounded-full flex-row items-center"
        >
          <Image
            // source={{uri: "https://2sao.vietnamnetjsc.vn/2016/07/11/22/23/sno10.jpg"}}
            source={require("../../../assets/images/logo.png")}
            className="w-20 h-20 rounded-full"
          />
          <Text className="ml-5 text-lg text-gray-600">Thỏ bất lực</Text>
        </TouchableOpacity>

        {/* User 2*/}
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate("Chat");
            console.log("nhắn tin với Vịt đỏng đảnh");
          }}
          className="bg-white w-4/5 h-20 mt-4 ml-8 bg-blue-50 rounded-full flex-row items-center"
        >
          <Image
            // source={{uri: "https://2sao.vietnamnetjsc.vn/2016/07/11/22/23/sno10.jpg"}}
            source={require("../../../assets/images/logo.png")}
            className="w-20 h-20 rounded-full"
          />
          <Text className="ml-5 text-lg text-gray-600">Vịt đỏng đảnh</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
