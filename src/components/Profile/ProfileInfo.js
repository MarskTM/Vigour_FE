import { TouchableOpacity, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import DatePicker from "react-native-date-picker";
import { Icon, Button } from "@rneui/themed";

export default function ProfileInfo() {
  const [open, setOpen] = useState(false);
  const [birthday, setBirthday] = useState(new Date());

  return (
    <View>
      <View className="w-full flex-row">
        <View className="w-3/5 h-24">
          <Text className="text-base ml-6 mt-3">Họ Tên:</Text>
          <View className="ml-5">
            <TouchableOpacity className="w-48 h-12 bg-zinc-50 items-center justify-center border-2 border-slate-300">
              <TextInput
                placeholder="Họ và tên của bạn"
                className="pl-4 pr-6 w-full h-8 text-lg "
                onChangeText={(e) => {
                  console.log(e);
                }}
              ></TextInput>
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-2/5 h-24">
          <Text className="text-base mt-3">Ngày sinh:</Text>
          <DatePicker
            modal="date"
            open={open}
            date={birthday}
            locale="vi"
            onConfirm={(date) => {
              setOpen(false);
              setBirthday(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <View className="w-3/4 mt-3 h-9 bg-zinc-50 flex-row items-center border-2 border-slate-300">
            <TextInput
              className="text-md"
              placeholder="dd/mm/yyyy"
              mode="outlined"
              editable={false}
              disabled={true}
              value={birthday}
            />
            <TouchableOpacity
              className="ml-4"
              onPress={() => {
                setOpen(true);
              }}
            >
              <Icon name="calendar" type="font-awesome-5"></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="w-full flex-row">
        <View className="w-4/6 h-24">
          <Text className="text-base ml-6">Số điện thoại:</Text>
          <View className="ml-5">
            <TouchableOpacity className="w-60 h-12 bg-zinc-50 items-center justify-center border-2 border-slate-300">
              <TextInput
                placeholder="Sdt"
                className="pl-4 pr-6 w-full h-8 text-lg "
                onChangeText={(e) => {
                  console.log(e);
                }}
              ></TextInput>
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-2/5 h-24">
          <Text className="text-base">Giới tính:</Text>
          <DatePicker
            modal="date"
            open={open}
            date={birthday}
            locale="vi"
            onConfirm={(date) => {
              setOpen(false);
              setBirthday(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <View className="w-3/5 mt-3 h-9 bg-zinc-50 flex-row items-center border-2 border-slate-300">
            <TextInput
              className="text-md"
              placeholder="Giới tính"
              mode="outlined"
              editable={false}
              disabled={true}
              value={birthday}
            />
            <TouchableOpacity
              className="ml-4"
              onPress={() => {
                setOpen(true);
              }}
            >
              <Icon name="chevron-down" type="font-awesome-5" size={15}></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text className="text-base ml-6 mt-2">Email:</Text>
      <View className="items-center ">
        <TouchableOpacity className="w-96 h-12 bg-zinc-50 items-center justify-center border-2 border-slate-300">
          <TextInput
            placeholder="Gmail của bạn"
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
