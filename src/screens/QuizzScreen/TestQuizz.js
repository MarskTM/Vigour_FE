import {View, Text, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {Button} from "@rneui/themed";
import {Dialog} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";

export default function TestQuizz(url) {
    const test1 = {
        "id": 1,
        "name": "PHQ-9",
        "overview": "Thang đo trầm cảm PQH-9 (Patient Questionare Health - 9) bao gồm 9 câu hỏi trắc nhiệm, do bác sỹ Spitzer, Williams và Kroenke thiết kế để sàng lọc và theo dõi đáp ứng điều trị trầm cảm",
        "questions": [
            {
                "id": 1,
                "question": "Ít hứng thú hoặc là không có niềm vui thích làm việc gì",
                "question_group_id": 1,
                "CreatedAt": "2022-11-10T05:55:35.384081Z",
                "UpdatedAt": "2022-11-10T05:55:35.384081Z",
                "DeletedAt": null
            },
            {
                "id": 2,
                "question": "Cảm thấy chán nản kiệt sức, chán nản, hay tuyệt vọng",
                "question_group_id": 1,
                "CreatedAt": "2022-11-10T05:55:43.188472Z",
                "UpdatedAt": "2022-11-10T05:55:43.188472Z",
                "DeletedAt": null
            },
            {
                "id": 3,
                "question": "Khó ngủ, ngủ không lâu hoặc ngủ quá nhiều",
                "question_group_id": 1,
                "CreatedAt": "2022-11-10T05:55:53.57848Z",
                "UpdatedAt": "2022-11-10T05:55:53.57848Z",
                "DeletedAt": null
            },
            {
                "id": 4,
                "question": "Cảm thấy mệt mỏi hoặc thiếu năng lượng",
                "question_group_id": 1,
                "CreatedAt": "2022-11-10T05:56:01.273801Z",
                "UpdatedAt": "2022-11-10T05:56:01.273801Z",
                "DeletedAt": null
            },
            {
                "id": 5,
                "question": "Chán ăn hoặc ăn quá nhiều",
                "question_group_id": 1,
                "CreatedAt": "2022-11-10T05:56:07.872814Z",
                "UpdatedAt": "2022-11-10T05:56:07.872814Z",
                "DeletedAt": null
            },
            {
                "id": 6,
                "question": "Cảm thấy bản thân tồi tệ, cho rằng mình là người thất bại hoặc thất vọng về bản thân và gia đình",
                "question_group_id": 1,
                "CreatedAt": "2022-11-10T05:56:16.399236Z",
                "UpdatedAt": "2022-11-10T05:56:16.399236Z",
                "DeletedAt": null
            },
            {
                "id": 7,
                "question": "Khó tập trung vào một việc gì đó, ví dụ như đọc báo hay xem tivi",
                "question_group_id": 1,
                "CreatedAt": "2022-11-10T05:56:32.604955Z",
                "UpdatedAt": "2022-11-10T05:56:32.604955Z",
                "DeletedAt": null
            },
            {
                "id": 8,
                "question": "Di chuyển hoặc nói năng quá chậm chạp khiến người khác chú ý hoặc ngược lại - quá lo lắng, bồn chồn nên đi lại quá nhiều",
                "question_group_id": 1,
                "CreatedAt": "2022-11-10T05:56:45.014525Z",
                "UpdatedAt": "2022-11-10T05:56:45.014525Z",
                "DeletedAt": null
            },
            {
                "id": 9,
                "question": "Nghĩ rằng mình chết đi sẽ tốt hơn, hoặc làm đau hay tổn thương cơ thể",
                "question_group_id": 1,
                "CreatedAt": "2022-11-10T05:56:59.080311Z",
                "UpdatedAt": "2022-11-10T05:56:59.080311Z",
                "DeletedAt": null
            }
        ],
        "answers": [
            {
                "id": 1,
                "question_group_id": 1,
                "answer": "Hầu như không",
                "score_stress": 0,
                "score_depess": 0,
                "score_anxiety": 0,
                "CreatedAt": "2022-11-10T05:58:15.398516Z",
                "UpdatedAt": "2022-11-10T05:58:15.398516Z",
                "DeletedAt": null
            },
            {
                "id": 2,
                "question_group_id": 1,
                "answer": "Một vài ngày",
                "score_stress": 1,
                "score_depess": 1,
                "score_anxiety": 1,
                "CreatedAt": "2022-11-10T05:58:35.373638Z",
                "UpdatedAt": "2022-11-10T05:58:35.373638Z",
                "DeletedAt": null
            },
            {
                "id": 3,
                "question_group_id": 1,
                "answer": "Hơn một nửa số thời gian",
                "score_stress": 2,
                "score_depess": 2,
                "score_anxiety": 2,
                "CreatedAt": "2022-11-10T05:58:49.775062Z",
                "UpdatedAt": "2022-11-10T05:58:49.775062Z",
                "DeletedAt": null
            },
            {
                "id": 4,
                "question_group_id": 1,
                "answer": "Gần như mỗi ngày",
                "score_stress": 3,
                "score_depess": 3,
                "score_anxiety": 3,
                "CreatedAt": "2022-11-10T05:59:09.985893Z",
                "UpdatedAt": "2022-11-10T05:59:09.985893Z",
                "DeletedAt": null
            }
        ],
        "judges": [
            {
                "id": 3,
                "question_group_id": 1,
                "score_stress_max": 9999,
                "score_stress_min": 9999,
                "score_depess_max": 10,
                "score_depess_min": 14,
                "score_anxiety_max": 9999,
                "score_anxiety_min": 9999,
                "advice_stress": "Bình thường",
                "advice_depess": "Trầm cảm nhẹ",
                "advice_anxiety": "Bình thường",
                "CreatedAt": "2022-11-10T15:34:43.404641Z",
                "UpdatedAt": "2022-11-14T07:45:41.030373Z",
                "DeletedAt": null
            },
            {
                "id": 4,
                "question_group_id": 1,
                "score_stress_max": 9999,
                "score_stress_min": 9999,
                "score_depess_max": 19,
                "score_depess_min": 15,
                "score_anxiety_max": 9999,
                "score_anxiety_min": 9999,
                "advice_stress": "Bình thường",
                "advice_depess": "Trầm cảm trung bình",
                "advice_anxiety": "Bình thường",
                "CreatedAt": "2022-11-10T15:35:29.705384Z",
                "UpdatedAt": "2022-11-14T07:46:04.530276Z",
                "DeletedAt": null
            },
            {
                "id": 5,
                "question_group_id": 1,
                "score_stress_max": 9999,
                "score_stress_min": 9999,
                "score_depess_max": 30,
                "score_depess_min": 19,
                "score_anxiety_max": 9999,
                "score_anxiety_min": 9999,
                "advice_stress": "Bình thường",
                "advice_depess": "Trầm cảm nặng",
                "advice_anxiety": "Bình thường",
                "CreatedAt": "2022-11-10T15:36:16.43451Z",
                "UpdatedAt": "2022-11-14T07:46:23.43016Z",
                "DeletedAt": null
            },
            {
                "id": 1,
                "question_group_id": 1,
                "score_stress_max": 9999,
                "score_stress_min": 9999,
                "score_depess_max": 4,
                "score_depess_min": -1,
                "score_anxiety_max": 9999,
                "score_anxiety_min": 9999,
                "advice_stress": "Bình thường",
                "advice_depess": "Bạn hoàn toàn bình thường",
                "advice_anxiety": "Bình thường",
                "CreatedAt": "2022-11-10T15:33:18.804905Z",
                "UpdatedAt": "2022-11-14T07:50:37.931097Z",
                "DeletedAt": null
            },
            {
                "id": 2,
                "question_group_id": 1,
                "score_stress_max": 9999,
                "score_stress_min": 9999,
                "score_depess_max": 9,
                "score_depess_min": 4,
                "score_anxiety_max": 9999,
                "score_anxiety_min": 9999,
                "advice_stress": "Bình thường",
                "advice_depess": "Bạn ở mức trầm cảm tối thiểu",
                "advice_anxiety": "Bình thường",
                "CreatedAt": "2022-11-10T15:34:01.510994Z",
                "UpdatedAt": "2022-11-14T07:45:10.074085Z",
                "DeletedAt": null
            }
        ],
        "CreatedAt": "2022-11-10T05:54:55.30391Z",
        "UpdatedAt": "2022-11-14T04:06:02.896357Z",
        "DeletedAt": null
    }
    const [answer, setAnswer] = useState(test1.questions.map(() => 0))
    const [current, setCurrent] = useState(0)
    const [ans,setAns]=useState(0)
    const [visible,setVisible]=useState(false)

    const handleOnPickAnswer = (a) => {
        const newAns = answer;
        newAns[current] = a;
        setAnswer(newAns);
        setAns(a)
        console.log("=========newans", newAns)
        console.log("===============a", a)
    }

    const handleBack=()=>{
        if((current-1)>=0){
            setCurrent(current-1)
            setAns(answer[current-1])
            console.log(current)
        }
    }

    const handleNext=()=>{
        if((current+1)<answer.length){
            setCurrent(current+1)
            setAns(answer[current+1])
            console.log(current)
        }
    }
    const navigate=useNavigation()

    const awaitSubmit=()=>{
        setVisible(false);
        navigate.navigate("Answer", {answers: answer})
    }

    const handleSubmit=()=>{
        setVisible(true);
        setTimeout(awaitSubmit,1000)
    }

    return (
        <View style={{height: 930, width: "100%",}}
              className="flex mt-10  p-4 ">
            <Text className="font-bold text-2xl">Câu hỏi {current + 1} : </Text>
            <Text className="text-xl ">{test1.questions[current].question} </Text>
            <View >
                <TouchableOpacity
                    className={"border-2 mt-3 mb-3 rounded-lg p-2 h-400 " + (ans == 1 ? "bg-green-400" : "")}
                    onPress={() => handleOnPickAnswer(1)}>
                    <Text className="text-xl ">Hầu như không </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className={"border-2 mt-3 mb-3 rounded-lg p-2 h-400 " + (ans == 2 ? "bg-green-400" : "")}
                    onPress={() => handleOnPickAnswer(2)}>
                    <Text className="text-xl ">Một vài ngày</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className={"border-2 mt-3 mb-3 rounded-lg p-2 h-400 " + (ans == 3 ? "bg-green-400" : "")}
                    onPress={() => handleOnPickAnswer(3)}>
                    <Text className="text-xl ">Hơn một nửa số thời gian</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className={"border-2 mt-3 mb-3 rounded-lg p-2 h-400 " + (ans == 4 ? "bg-green-400" : "")}
                    onPress={() => handleOnPickAnswer(4)}>
                    <Text className="text-xl ">Gần như mỗi ngày</Text>
                </TouchableOpacity>
            </View>
            <View className={"flex-row justify-between items-center"}>
            <Button
                title="Trở lại"
                buttonStyle={{
                    backgroundColor: "#afafaf",
                    borderWidth: 2,
                    borderColor: "gray",
                    borderRadius: 10,
                }}
                containerStyle={{
                    width: 100,
                    marginTop: 18,
                    marginBottom: 25,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                onPress={() => {
                    handleBack()
                }}
            />
                {
                    current==answer.length-1? <Button
                        title="Kiểm tra"
                        buttonStyle={{
                            backgroundColor: "#32940f",
                            borderWidth: 2,
                            borderColor: "gray",
                            borderRadius: 10,
                        }}
                        containerStyle={{

                            width: 100,
                            marginTop: 18,
                            marginBottom: 25,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        onPress={() => {
                            handleSubmit()
                        }}
                    />:

            <Button
                title="Tiếp theo"
                buttonStyle={{
                    backgroundColor: "#afafaf",
                    borderWidth: 2,
                    borderColor: "gray",
                    borderRadius: 10,
                }}
                containerStyle={{
                    width: 100,
                    marginTop: 18,
                    marginBottom: 25,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                onPress={() => {
                    handleNext()
                }}
            />
                }

            </View>
            <Dialog isVisible={visible}>
                <Text className="font-bold text-xl">Vui lòng đợi trong giây lát !</Text>
                <Dialog.Loading />
            </Dialog>
        </View>
    )
}