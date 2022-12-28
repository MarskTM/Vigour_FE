import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { Icon } from "@rneui/base";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function NewsFeed({ navigation }) {
  const LeftContent = props => <Avatar.Icon {...props} icon="clock" size={25} />

  const handleMenuItemClick = (event) => {
    console.log(event.target.textContent);
  };

  return (
    <View className="h-full bg-neutral-200 pt-10">
      <View >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HomeTabs");
          }}
          className="flex-row justify-items-center  ml-5 mr-5  leading-10 "
        >
          <Icon
            color={"#747474"}
            name="chevron-left"
            type="font-awesome-5"
            size={25}
          />
          <Text className="font-semibold text-xl text-slate-500 ml-1 " >Tin tức sức khỏe</Text>
        </TouchableOpacity>
      </View>


      <ScrollView>
        <Card className="m-5">
          <Card.Content>
            <Title>Axit uric cao có nên uống nhiều nước trái cây?</Title>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://kissenglishcenter.com/wp-content/uploads/2020/02/T%C3%AAn-c%C3%A1c-lo%E1%BA%A1i-tr%C3%A1i-c%C3%A2y-b%E1%BA%B1ng-ti%E1%BA%BFng-Anh-b%E1%BA%A1n-%C4%91%C3%A3-bi%E1%BA%BFt.png' }} className="m-1" />
          <View className="flex-row p-1">
            <Icon
              color={"#747474"}
              name="clock"
              type="font-awesome-5"
              size={20}
            />
            <Text onPress={(event) => handleMenuItemClick(event)} className="ml-1">20/12/2022</Text>
          </View>
          <Card.Actions>
            <Button onPress={() => {
              Alert.alert("Đã thêm vào yêu thích");
            }}>
              Thêm vào mục yêu thích
            </Button>
            <Button
              onPress={() => navigation.navigate("Details")}
            >
              Đọc chi tiết
            </Button>
          </Card.Actions>
        </Card>

        <Card className="m-5">
          <Card.Content>
            <Title>Chuyên gia: Mỗi ngày một quả này không lo huyết áp cao</Title>

          </Card.Content>
          <Card.Cover source={{ uri: 'https://bloganchoi.com/wp-content/uploads/2018/01/lam-dep-bang-trung-ga-1.jpg' }} className="m-1" />
          <View className="flex-row p-1">
            <Icon
              color={"#747474"}
              name="clock"
              type="font-awesome-5"
              size={20}
            />
            <Text className="ml-1">20/12/2022</Text>
          </View>
          <Card.Actions>
            <Button onPress={() => {
              Alert.alert("Đã thêm vào yêu thích");
            }}>
              Thêm vào mục yêu thích
            </Button>
            <Button onPress={() => navigation.navigate("Details")}>Đọc chi tiết</Button>
          </Card.Actions>
        </Card>

        <Card className="m-5">
          <Card.Content>
            <Title>Dưỡng ẩm da nhạy cảm thế nào cho đúng?</Title>

          </Card.Content>
          <Card.Cover source={{ uri: 'https://ss-images.saostar.vn/w800/pc/1616855400621/saostar-edp1lmdv4efvemvp.jpg' }} className="m-1" />
          <View className="flex-row p-1">
            <Icon
              color={"#747474"}
              name="clock"
              type="font-awesome-5"
              size={20}
            />
            <Text className="ml-1">20/12/2022</Text>
          </View>
          <Card.Actions>
            <Button onPress={() => {
              Alert.alert("Đã thêm vào yêu thích");
            }}>
              Thêm vào mục yêu thích
            </Button>
            <Button onPress={() => navigation.navigate("Details")}>Đọc chi tiết</Button>
          </Card.Actions>
        </Card>

        <Card className="m-5">
          <Card.Content>
            <Title> 7 dấu hiệu ở tay cảnh báo sức khoẻ có vấn đề </Title>

          </Card.Content>
          <Card.Cover source={{ uri: 'https://ss-images.saostar.vn/w1200/pc/1650769070739/saostar-za6yk17wvjmiwsuy.jpg' }} className="m-1" />
          <View className="flex-row p-1">
            <Icon
              color={"#747474"}
              name="clock"
              type="font-awesome-5"
              size={20}
            />
            <Text className="ml-1">20/12/2022</Text>
          </View>
          <Card.Actions>
            <Button onPress={() => {
              Alert.alert("Đã thêm vào yêu thích");
            }}>
              Thêm vào mục yêu thích
            </Button>
            <Button onPress={() => navigation.navigate("Details")}>Đọc chi tiết</Button>
          </Card.Actions>
        </Card>

        <Card className="m-5">
          <Card.Content>
            <Title>Mách bạn cách theo đuổi lối sống lành mạnh cực dễ: mỗi ngày một hũ sữa chua</Title>

          </Card.Content>
          <Card.Cover source={{ uri: 'https://tapchinhabep.net/wp-content/uploads/2020/05/16.2.jpg' }} className="m-1" />
          <View className="flex-row p-1">
            <Icon
              color={"#747474"}
              name="clock"
              type="font-awesome-5"
              size={20}
            />
            <Text className="ml-1">20/12/2022</Text>
          </View>
          <Card.Actions>
            <Button onPress={() => {
              Alert.alert("Đã thêm vào yêu thích");
            }}>
              Thêm vào mục yêu thích
            </Button>
            <Button onPress={() => navigation.navigate("Details")}>Đọc chi tiết</Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  red: {
    backgroundColor: '#ccc'
  },
});