import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import DropDown from "./DropDown";

const dataEmotion = [
  {
    id: 0,
    icon: "https://cdn-icons-png.flaticon.com/512/2584/2584606.png",
    name: "Vui vẻ",
  },
  {
    id: 1,
    icon: "https://cdn-icons-png.flaticon.com/512/725/725107.png",
    name: "Tốt",
  },
  {
    id: 2,
    icon: "https://cdn-icons-png.flaticon.com/512/725/725085.png",
    name: "OK",
  },
  {
    id: 3,
    icon: "https://cdn-icons-png.flaticon.com/512/725/725099.png",
    name: "Buồn",
  },
  {
    id: 4,
    icon: "https://cdn-icons-png.flaticon.com/512/742/742752.png",
    name: "Tồi tệ",
  },
];

export default function Emotion() {
  const [selectedEmotion, setSelectedEmotion] = React.useState(null);

  return (
    <View className="mt-10">
      <DropDown title="Hôm nay bạn thấy thế nào ?" heightDrop={90}>
        <View className="flex-row justify-between items-center m-auto bg-zinc-200 rounded-md">
          <SelectedEmotionView setSelectedEmotion={setSelectedEmotion} />
        </View>
      </DropDown>
    </View>
  );
}

const SelectedEmotionView = ({ setSelectedEmotion }) => {
  return (
    <View className="my-4 flex-row">
      {dataEmotion.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => setSelectedEmotion(item)}
        >
          <View className="flex items-center justify-center mx-4">
            <Image
              key={item.name + index}
              source={{
                uri: item.icon,
              }}
              className="w-10 h-10"
            />
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
