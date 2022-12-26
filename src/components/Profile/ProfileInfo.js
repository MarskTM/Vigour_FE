import { TouchableOpacity, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import { Icon, Button } from "@rneui/themed";
import { DatePickerInput } from 'react-native-paper-dates';
import { Picker } from '@react-native-picker/picker';





export default function ProfileInfo() {

  const [inputDate, setInputDate] = React.useState(undefined)

  const [selectedOption, setSelectedOption] = useState('');

  return (
    <View className="">
      <View className="w-full  flex-row pl-1">
        <View className="w-3/5 h-24    ">
          <Text className="text-base ml-6 mt-1">Họ Tên</Text>
          <View className=" ">
            <TouchableOpacity className="w-48 h-12 bg-zinc-50 items-center justify-center border-2 border-slate-500 rounded-lg">
              <TextInput
                placeholder="Họ & Tên"
                className="pl-4 pr-6 w-full h-8 text-lg "
                onChangeText={(e) => {
                  console.log(e);
                }}
              ></TextInput>
            </TouchableOpacity>
          </View>
        </View>

        <View className=" pr-2">
          <Text className="text-base ml-6 ">Ngày sinh</Text>

          <DatePickerInput
            className="h-11 w-36 bg-zinc-50  border-2 border-slate-500 rounded-lg mb-4 "
            locale="vi"
            value={inputDate}
            onChange={(d) => setInputDate(d)}
            inputMode="start"

          />
        </View>
      </View>

      <View className="w-full flex-row pl-1">
        <View className="w-3/5 h-24">
          <Text className="text-base ml-6">Số điện thoại:</Text>
          <View className="">
            <TouchableOpacity className="rounded-lg w-48 h-12 bg-zinc-50 items-center justify-center border-2 border-slate-500">
              <TextInput
                placeholder="SDT"
                className="pl-4 pr-6 w-full h-8 text-lg "
                onChangeText={(e) => {
                  console.log(e);
                }}
              ></TextInput>
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-4/6 pr-2">
          <Text className="text-base ml-6">Giới tính</Text>

          <View className="h-12 w-36 bg-zinc-50  border-2 border-slate-500 rounded-lg mb-4 flex justify-center">
            <Picker selectedValue={selectedOption} onValueChange={(itemValue) => setSelectedOption(itemValue)}
              className=""
            >
              <Picker.Item label="Nam" value="option1" />
              <Picker.Item label="Nữ" value="option2" />
              <Picker.Item label="Khác" value="option3" />
            </Picker>
          </View>
        </View>
      </View>

      <Text className="text-base ml-6 mt-2">Email</Text>
      <View className="items-center ">
        <TouchableOpacity className="rounded-lg w-96 h-12 bg-zinc-50 items-center justify-center border-2 border-slate-500">
          <TextInput
            placeholder="Email"
            className="pl-4 pr-6 w-full h-8 text-lg "
            onChangeText={(e) => {
              console.log(e);
            }}
          ></TextInput>
        </TouchableOpacity>
      </View>
    </View>
  );
}
