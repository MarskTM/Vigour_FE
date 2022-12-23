import { TouchableOpacity, TextInput, Image, View, Text } from "react-native";
import React, { useState } from "react";
import { Icon, Button } from "@rneui/themed";
import DatePicker from "react-native-date-picker";
import dayjs from "dayjs";

export default function SignUp({ navigation }) {
  const [showPass, SetShowPass] = useState(true);
  const [open, setOpen] = useState(false);
  const [birthday, setBirthday] = useState(new Date());

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
        {/* Profile name */}
        <Text className="text-base ml-6 mt-8">Họ và tên:</Text>
        <View className="items-center ">
          <TouchableOpacity className="w-96 h-12 bg-zinc-50 items-center justify-center border-2 border-slate-300">
            <TextInput
              placeholder="Họ và tên của bạn"
              className="pl-4 pr-6 w-full h-8 text-lg "
              onBlur={(e) => {
                e.preventDefault();
                console.log(e.target.value);
              }}
            ></TextInput>
          </TouchableOpacity>
        </View>

        {/* Email */}
        <Text className="text-base ml-6 mt-4">Email:</Text>
        <View className="items-center ">
          <TouchableOpacity className="w-96 h-12 bg-zinc-50 items-center justify-center border-2 border-slate-300">
            <TextInput
              placeholder="Gmail của bạn"
              className="pl-4 pr-6 w-full h-8 text-lg "
              onBlur={(e) => {
                e.preventDefault();
                console.log(e.target.value);
              }}
            ></TextInput>
          </TouchableOpacity>
        </View>

        {/* user acount */}
        <View className="w-full flex-row">
          <View className="w-3/5 h-24 bg-red-100">
            <Text className="text-base ml-6 mt-3">Tài khoản:</Text>
            <View className="ml-5">
              <TouchableOpacity className="w-48 h-12 bg-zinc-50 items-center justify-center border-2 border-slate-300">
                <TextInput
                  placeholder="Họ và tên của bạn"
                  className="pl-4 pr-6 w-full h-8 text-lg "
                  onBlur={(e) => {
                    e.preventDefault();
                    console.log(e.target.value);
                  }}
                ></TextInput>
              </TouchableOpacity>
            </View>
          </View>

          <View className="w-2/5 h-24 bg-blue-100">
            <Text className="text-base ml-6 mt-3">Ngày sinh:</Text>

            <DatePicker
              modal
              open={open}
              date={birthday}
              mode="date"
              locale="vi"
              onConfirm={(date) => {
                setOpen(false);
                setBirthday(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
