import { TouchableOpacity, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import { Icon, Button } from "@rneui/themed";
import { DatePickerInput } from 'react-native-paper-dates';
import { Picker } from '@react-native-picker/picker';





export default function ProfileInfo(props) {

  return (
    <View className="">
      <View className="w-full  flex-row pl-3 pr-3">
        <View className="w-3/5 h-24    ">
          <Text className="text-base ml-2 mt-1">Họ Tên</Text>
          <View className=" ">
            <TouchableOpacity className="w-48 h-12 bg-zinc-50 items-center justify-center border-2 border-slate-500 rounded-lg">
              <TextInput
                  value={props.fullName}
                placeholder="Họ & Tên"
                className="pl-4 pr-6 w-full h-8 text-lg "
                onChangeText={(text) => {
                 props.setFullName(text)
                }}
              ></TextInput>
            </TouchableOpacity>
          </View>
        </View>

        <View className=" pr-2">
          <Text className="text-base ml-2 ">Ngày sinh</Text>

          <DatePickerInput
            className="h-11 w-36 bg-zinc-50  border-2 border-slate-500 rounded-lg mb-4 "
            locale="vi"
            value={props.birthDay}
            onChange={(d) => props.setBirthDay(d)}
            inputMode="start"

          />
        </View>
      </View>

      <View className="w-full flex-row pl-3 pr-3">
        <View className="w-3/5 h-24">
          <Text className="text-base ml-2">Số điện thoại:</Text>
          <View className="">
            <TouchableOpacity className="rounded-lg w-48 h-12 bg-zinc-50 items-center justify-center border-2 border-slate-500">
              <TextInput
                  value={props.phoneNumber}
                placeholder="SDT"
                className="pl-4 pr-6 w-full h-8 text-lg "
                onChangeText={(text) => {
                props.setPhoneNumber(text)
                }}
              ></TextInput>
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-4/6 pr-2">
          <Text className="text-base ml-2">Giới tính</Text>

          <View className="h-12 w-36 bg-zinc-50  border-2 border-slate-500 rounded-lg mb-4 flex justify-center">
            <Picker selectedValue={props.gender} onValueChange={(itemValue) => props.setGender(itemValue)}
              className=""
            >
              <Picker.Item label="Nam" value="Nam" />
              <Picker.Item label="Nữ" value="Nữ" />
              <Picker.Item label="Khác" value="Khác" />
            </Picker>
          </View>
        </View>
      </View>

      <Text className="text-base ml-6 ">Email</Text>
      <View className="items-center ">
        <TouchableOpacity className="rounded-lg w-96 h-12 bg-zinc-50 items-center justify-center border-2 border-slate-500">
          <TextInput
              value={props.email}
            placeholder="Email"
            className="pl-4 pr-6 w-full h-8 text-lg "
            onChangeText={(text) => {
              props.setEmail(text)
            }}
          ></TextInput>
        </TouchableOpacity>
      </View>
    </View>
  );
}
