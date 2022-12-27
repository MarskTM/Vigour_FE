import {TouchableOpacity, TextInput, Image, View, Text} from "react-native";
import React, {useState} from "react";
import {Icon, Button} from "@rneui/themed";

export default function UserInfo(props) {
    const [showPass, SetShowPass] = useState(false);

    return (
        <View>
            <Text className="text-base ml-6 mt-5">Tên tài khoản</Text>
            <View className="items-center ">
                <TouchableOpacity
                    className="rounded-lg w-96 h-12 bg-zinc-50 items-center justify-center border-2 border-slate-500">
                    <TextInput
                        value={props.username}
                        placeholder="Tên đăng nhập"
                        className="pl-4 pr-6 w-full h-8 text-lg "
                        onChangeText={(text) => {
                            props.setUsername(text)
                        }}
                    ></TextInput>
                </TouchableOpacity>
            </View>

            <Text className="text-base ml-6 mt-4">Mật khẩu</Text>
            <View className="flex-row items-center justify-center">
                <TouchableOpacity
                    className="rounded-lg w-96 h-12 bg-zinc-50 items-center justify-center border-2 border-slate-500">
                    <TextInput
                        value={props.password}
                        placeholder="Mật khẩu"
                        className="pl-4 pr-6 w-full h-8 text-lg "
                        secureTextEntry={showPass}
                        onChangeText={(text) => {
                            props.setPassword(text)
                        }}
                    ></TextInput>
                </TouchableOpacity>
                <View className="absolute right-5">
                    <TouchableOpacity
                        onPress={() => {
                            SetShowPass(!showPass);
                        }}
                    >
                        <Icon
                            name={showPass?"eye":"eye-slash"}
                            type="font-awesome-5"
                            color="gray"
                            size={19}
                        ></Icon>
                    </TouchableOpacity>
                </View>
            </View>

            <Text className="text-base ml-6 mt-4">Nhập lại mật khẩu</Text>
            <View className="flex-row items-center justify-center">
                <TouchableOpacity
                    className="rounded-lg w-96 h-12 bg-zinc-50 items-center justify-center border-2 border-slate-500">
                    <TextInput
                        value={props.confirmPassword}
                        placeholder="Nhập lại mật khẩu"
                        className="pl-4 pr-6 w-full h-8 text-lg "
                        secureTextEntry={showPass}
                        onChangeText={(text) => {
                            props.setConfirmPassword(text)
                        }}
                    ></TextInput>
                </TouchableOpacity>
                <View className="absolute right-5">
                    <TouchableOpacity
                        onPress={() => {
                            SetShowPass(!showPass);
                        }}
                    >
                        <Icon
                            name={showPass?"eye":"eye-slash"}
                            type="font-awesome-5"
                            color="gray"
                            size={19}
                        ></Icon>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
