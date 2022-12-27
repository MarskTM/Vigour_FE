import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { Button, Icon } from "@rneui/base";
import { LocaleConfig, Calendar } from "react-native-calendars";

LocaleConfig.locales["vn"] = {
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ],
  monthNamesShort: [
    "Janv.",
    "Févr.",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc.",
  ],
  dayNames: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ],
  dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = "vn";

let markedDates = {
  "2022-12-28": {
    selected: true,
    marked: true,
    selectedColor: "blue",
  },
  "2022-12-28": { marked: true },
  "2022-12-28": { marked: true, dotColor: "red", activeOpacity: 0 },
  "2022-12-28": { disabled: true, disableTouchEvent: true },
};

export default function Profile({ navigation }) {
  return (
    <View
      style={{
        width: "100%",
        height: 930,
      }}
    >
      {/* Button back */}
      <TouchableOpacity
      // onPress={() => {
      //   navigation.navigate("Home");
      // }}
      >
        <View className="mt-14 ml-2">
          <Text className="text-3xl font-semibold text-zinc-600">
            Hồ sơ của tôi
          </Text>
        </View>
      </TouchableOpacity>

      {/* Avata */}
      <View className="h-24 ml-4 mt-6 flex-row">
        <Image
          source={require("../../../assets/images/logo.png")}
          className="w-20 h-20 rounded-full"
        ></Image>

        <View className="ml-4">
          <Text className="mt-4 font-medium text-xl text-zinc-600">
            $Kim Mạnh
          </Text>
          <Text className="mt-2 text-slate-400">11/12/2002</Text>
        </View>
      </View>

      {/* Button Edit */}
      <View className="mb-4">
        <Button
          title="Cập nhập hồ sơ"
          buttonStyle={{
            borderColor: "rgba(78, 116, 289, 1)",
          }}
          type="outline"
          raised
          titleStyle={{ color: "#9C89A8" }}
          containerStyle={{
            width: 400,
            marginHorizontal: 10,
          }}
          onPress={() => {
            navigation.navigate("UpdateProfile");
          }}
        />
      </View>

      {/* View relationship Infor */}
      <View className="h-20 flex-row border-y-2 border-slate-300">
        <View className="m-auto">
          <Text className="">Bài viết</Text>
          <Text className="m-auto font-semibold">0</Text>
        </View>
        <View className="m-auto">
          <Text>Nhật ký</Text>
          <Text className="m-auto font-semibold">0</Text>
        </View>
        <View className="m-auto">
          <Text>Bạn bè</Text>
          <Text className="m-auto font-semibold">0</Text>
        </View>
      </View>

      <View className="w-full h-full mt-2">
        <Calendar
          onDayPress={(e) => {
            navigation.navigate("Diary");
          }}
          markedDates={() => {
            return markedDates;
          }}
        />
      </View>
    </View>
  );
}
