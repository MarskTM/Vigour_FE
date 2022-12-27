import {TouchableOpacity, TextInput, Image, View, Text, Alert} from "react-native";
import React, {useState} from "react";
import {Icon, Button, Dialog} from "@rneui/themed";
import {baseURL} from "../../util/API/URL_API"
import UserInfo from "../../components/Profile/UserInfo";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";
export default function SignUp() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("Nam")
    const [birthDay, setBirthDay] = useState(new Date())
    const [fullName, setFullName] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [mess,setMess] = useState("Có lỗi trong quá trình đăng kí \n Vui lòng thử lại!")

    const [isShowDialog,setIsShowDialog] = useState(false)

    const clearData=()=>{
        setUsername("")
        setPassword("")
        setPhoneNumber("")
        setEmail("")
        setGender("Nam")
        setBirthDay(new Date())
        setFullName("")
        setConfirmPassword("")
    }

    const validData = ()=>{
        setMess("")

        if(username.length===0||password.length===0
        ||phoneNumber.length===0||fullName.length===0
        ||confirmPassword.length===0 ||email.length===0){
            setMess("Vui lòng điền đầy đủ các trường thông tin !")
            return false;
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            setMess("Email không đúng định dạng!")
            return false
        }
        else if(password!==confirmPassword){
            setMess("Mật khẩu nhập lại phải giống mật khẩu đã nhập !")
            return false
        }
        else {
            return true
        }
        return true

    }

    const postRegisterAccount = ()=>{
        setIsShowDialog(true)
        let data = JSON.stringify({
            "password": password,
            "profile": {
                "birthday": (birthDay.getFullYear()+"-"+(birthDay.getMonth()+1)+"-"+birthDay.getDate())+"T00:00:00Z",
                "email": email,
                "gender":gender,
                "name": fullName,
                "phone": phoneNumber,
                "real_name": fullName
            },
            "role": "client",
            "username": username
        });

        let config = {
            method: 'post',
            url:  `${baseURL}user/create`,
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
            .then((response) => {
                setIsShowDialog(false)
                console.log((response.data));
                if(response.data.data!=null){
                    clearData()
                    Alert.alert("Tạo tài khoản thành công","Chúc mừng bạn đã tạo tài khoản thành công \n" +
                        "Từ giờ bạn có thể sử dụng tài khoản này để đăng nhập vào hệ thống của chúng tôi ")
                }
                else if(response.data.message=="ERROR: duplicate key value violates unique constraint \"users_username_key\" (SQLSTATE 23505)") {
                        setMess("Tên tài khoản này đã được đăng kí!")
                }
                else{
                    setMess("Có lỗi trong quá trình đăng kí \n Vui lòng thử lại!")
                }
            })
            .catch((error) => {
                setIsShowDialog(false)
                console.log(error);
            });
    }



    const handleOnPressRegister = ()=>{
        if(validData()){
            postRegisterAccount()
        }
    }




    const navigation = useNavigation()
    return (
        <View
            style={{
                width: "100%",
                flex: 1
            }}
            className="flex justify-center"
        >


            <View className="w-full h-full bg-teal-50 m-auto">
                <View className="">
                    <Text className="uppercase font-semibold text-3xl text-center mt-10">Đăng ký</Text>
                </View>

                <ProfileInfo
                    gender={gender} setGender={setGender}
                    email={email} setEmail={setEmail}
                    birthDay={birthDay} setBirthDay={setBirthDay}
                    fullName={fullName} setFullName={setFullName}
                    phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
                />
                <UserInfo
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
                />

                <View className="">
                    <Text className="text-center text-lg mt-4 text-red-600 ">{mess}</Text>
                </View>
                <View className="items-center">
                    <Button
                        title="Đăng ký"
                        buttonStyle={{
                            backgroundColor: "#60A5FA",
                            borderWidth: 2,
                            borderColor: "white",
                            borderRadius: 40,
                        }}
                        containerStyle={{
                            width: 300,
                            marginTop: "5%",
                            marginBottom: 15,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        // onPress={onLogin}
                        onPress={() => {
                           handleOnPressRegister()

                        }}
                    />
                </View>

                {/* Back to login screen */}
                <View className=" flex-row justify-center  items-end ">
                    <Text className="text-base">Đã có tài khoản, </Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Login");
                    }}>
                        <Text className="text-base text-blue-800">Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Dialog isVisible={isShowDialog}>
                <Dialog.Loading/>
            </Dialog>
        </View>
    );
}