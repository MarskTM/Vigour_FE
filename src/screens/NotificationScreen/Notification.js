import { TouchableOpacity, View, Text, TextInput } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";

export default function Notification() {
  return (
    <View
      style={{
        width: "100%",
        height: 930,
        backgroundColor: "#F8F6F4",
      }}
    >
      <Text className="mt-16 pl-8 pt-2 h-14 text-3xl font-semibold border-b-2 border-slate-300">
        Thông báo
      </Text>


      <View className="mt-4">
        {/* Thông báo 1 */}
        <View className="mt-4 m-auto w-96 h-24 ">
          <Text className="mt-2">Today, 9.50 AM</Text>
          <TouchableOpacity>
            <View className="w-full h-16 mt-2 pl-4 bg-red-100 rounded-md flex-row items-center">
              <Icon
                className=""
                color={"#747474"}
                name="thumbs-up"
                type="font-awesome-5"
                size={40}
              ></Icon>
              <Text className="ml-4 pr-8 text-medium">
                Kim Mạnh đã thích bài viết của bạn
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Thông báo 2 */}
        <View className="mt-4 m-auto w-96 h-24 ">
          <Text className="mt-8">Today, 11.23 AM</Text>
          <TouchableOpacity>
            <View className="w-full h-16 mt-2 pl-4 bg-red-100 rounded-md flex-row items-center">
              <Icon
                className=""
                color={"#747474"}
                name="blog"
                type="font-awesome-5"
                size={40}
              ></Icon>
              <Text className="ml-4 pr-8 text-medium">
                Nhóm đã hoàn thành bài đánh giá của mình với nhiều tính năng mới hay ho
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Thông báo 3 */}
        <View className="mt-4 m-auto w-96 h-24 ">
          <Text className="mt-14">Today, 9.53 PM</Text>
          <TouchableOpacity>
            <View className="w-full h-16 mt-2 pl-4 bg-red-100 rounded-md flex-row items-center">
              <Icon
                className=""
                color={"#747474"}
                name="dragon"
                type="font-awesome-5"
                size={35}
              ></Icon>
              <Text className="ml-4 pr-8 text-medium">
                Hệ thông của app đã bị tấn công khiến một số chức năng bị lỗi và không hoạt động.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>


    </View>
  );
}
