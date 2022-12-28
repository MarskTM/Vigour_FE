import { View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native'
import React from 'react'
import { Icon } from "@rneui/base";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default function Forum({ navigation }) {



    return (
        <View className="h-full bg-neutral-200 pt-10">
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("NewsFeed");
                }}
                className="flex-row justify-items-center  ml-5 mr-5  leading-10 "
            >
                <Icon
                    color={"#747474"}
                    name="chevron-left"
                    type="font-awesome-5"
                    size={25}
                />
                <Text className="font-semibold text-xl text-slate-500 ml-1 " >Quay lại</Text>
            </TouchableOpacity>

            <ScrollView>
                <Card>

                    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
                    <Card.Content>
                        <Title className="text-slate-500 text-xl font-semibold">Chuyên gia: Mỗi ngày một quả này không lo huyết áp cao</Title>
                        <Paragraph className="text-lg">
                            Nhiều người không biết mình đang bị huyết áp cao, bởi bệnh này thường không có triệu chứng trong giai đoạn đầu.
                            Nếu không được điều trị, huyết áp cao có thể dẫn đến các vấn đề nghiêm trọng như bệnh tim và đột quỵ.
                        </Paragraph>
                        <Card.Cover source={{ uri: 'https://image.thanhnien.vn/w2048/Uploaded/2022/wobjohb/2022_12_27/project-6923.jpeg' }} className="m-1 " />
                        <Paragraph className="text-lg">
                            Chuyên gia dinh dưỡng Shona Wilkinson, tư vấn dinh dưỡng tại Nutrigums (Anh),
                            giải thích: Có nhiều yếu tố có thể ảnh hưởng đến huyết áp như uống nhiều rượu hoặc đồ uống có chứa caffein, thừa cân,
                            hút thuốc, lười vận động, ăn nhiều muối, không ăn trái cây và rau quả.

                        </Paragraph>

                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://image.thanhnien.vn/w2048/Uploaded/2022/lxwpcqjwp/2022_12_26/sk261206-anh2-1753.jpg' }} className="m-4" />
                    <Paragraph className="text-lg m-3">
                        Chuối nổi tiếng giàu kali - khoáng chất quan trọng giúp hạ huyết áp và cân bằng lượng natri trong cơ thể. “Một quả chuối mỗi ngày không chỉ tăng cường năng lượng, mà còn giúp duy trì chức năng tim bình thường. Kali trong chuối cũng hỗ trợ các cơn co thắt cơ và tim, giúp máu bơm khắp cơ thể đến các cơ quan quan trọng”, cô Shona Wilkinson giải thích.

                        Nghiên cứu nói gì?
                        Chuyên gia Wilkinson đưa ra lời khuyên trên dựa vào kết quả của một nghiên cứu được công bố trên tạp chí y khoa European Heart Journal năm nay.

                        Trong nghiên cứu, các nhà khoa học đã phân tích dữ liệu của hơn 24.000 người.

                        Những người tham gia đã hoàn thành một bảng câu hỏi về thói quen sinh hoạt, sau đó họ được đo huyết áp và được lấy mẫu nước tiểu, đo mức natri và kali để ước tính lượng hấp thu vào.

                        Kết quả đã cho thấy, những người tiêu thụ nhiều kali đã có huyết áp giảm xuống, nhất là ở phụ nữ, theo Express.
                    </Paragraph>
                    <Card.Actions>
                        <Button
                            onPress={() => {
                                Alert.alert("Đã thêm vào yêu thích");
                            }}
                        >
                            Thêm vào yêu thích
                        </Button>
                    </Card.Actions>
                </Card>

            </ScrollView>


        </View>
    )
}