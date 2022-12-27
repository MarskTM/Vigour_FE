import { View, Text } from 'react-native'
import React, {useState} from 'react'
import {Button} from "@rneui/themed";

export default function Answer({route,navigation }) {
    const [lstAnswer,setLstAnswer]=useState(route.params.answers?route.params.answers:[])
    const printResult=()=>{
        let resultX=0
        lstAnswer.forEach(value=>{
            resultX+=(value-1)
        })

        console.log(navigation)

        if(resultX<4){
            return "Bạn hoàn toàn bình thường"
        }else
        if(resultX>=4&&resultX<=9){
            return "Bạn ở mức trầm cảm tối thiểu"
        }else
        if(resultX>=10&&resultX<=14){
            return "Trầm cảm nhẹ"
        }else
        if(resultX>=15&&resultX<=19){
            return "Trầm cảm trung bình"
        }else
        if(resultX>=20&&resultX<=30){
            return "Trầm cảm nặng"
        }

    }
    const result=()=>{
        let resultX=0
        lstAnswer.forEach(value=>{
            resultX+=(value-1)
        })
        return resultX
    }

    return (
        <View style={{height: 930, width: "100%",}}
              className="flex mt-40  p-4 flex-col items-center">
            <Text className="font-bold text-2xl">Đây là kết quả của bạn :</Text>
            <Text className="font-bold text-2xl">Mức độ trầm cảm {result()}/{lstAnswer.length*3}</Text>
            <Text className="font-bold text-2xl">{printResult()}</Text>
            <View className="m-20"></View>
            <Text className=" text-xl">Bạn có muốn làm lại bài test không ?</Text>
            <Button
                title="Làm lại bài test"
                buttonStyle={{
                    backgroundColor: "#32940f",
                    borderWidth: 2,
                    borderColor: "gray",
                    borderRadius: 10,
                }}
                containerStyle={{
                    width: 300,
                    marginTop: 18,
                    marginBottom: 25,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                onPress={() => {
                    navigation.navigate("TestQuizz")
                }}
            />
            <Text className=" text-xl">Hoặc</Text>
            <Button
                title="Làm bài test khác"
                buttonStyle={{
                    backgroundColor: "#55f199",
                    borderWidth: 2,
                    borderColor: "gray",
                    borderRadius: 10,
                }}
                containerStyle={{
                    width: 300,
                    marginTop: 18,
                    marginBottom: 25,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                onPress={() => {
                    navigation.navigate("Quizz")
                }}
            />
        </View>
    )
}