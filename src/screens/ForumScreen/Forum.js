import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from "@rneui/base";
import WebView from 'react-native-webview'

export default function Forum({ navigation }) {


  return (
    <View className="h-full mt-10 relative  ">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HomeTabs");
        }}
        className="flex-row justify-items-center  ml-5 mr-5  leading-10 "
      >
        <Icon
          color={"#747474"}
          name="chevron-left"
          type="font-awesome-5"
          size={25}
        />
        <Text className="font-semibold text-xl text-slate-500 ml-1 " >Diễn Đàn</Text>
      </TouchableOpacity>

      <WebView
        source={{ uri: 'https://vnreview.vn/forums' }}
      />
    </View>
  )
}