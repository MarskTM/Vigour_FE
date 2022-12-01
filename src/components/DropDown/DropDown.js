import { View, TouchableOpacity, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function DropDown({ children, title, heightDrop }) {
  const [show, setShow] = useState(false);
  const height = useSharedValue(0);
  const opacity = useSharedValue(0);
  const rotate = useSharedValue(0);

  const animation = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      height: height.value,
    };
  }, []);

  const animationIcon = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotate.value}deg`,
        },
      ],
    };
  }, []);

  useEffect(() => {
    opacity.value = withTiming(show ? 1 : 0, { duration: 250 });
    height.value = withTiming(show ? heightDrop || 100 : 0, { duration: 250 });
    rotate.value = withTiming(show ? 180 : 0, { duration: 250 });
  }, [show]);
  return (
    <View>
      <TouchableOpacity
        className="flex-row items-center"
        onPress={() => setShow(!show)}
      >
        <Text className="text-lg text-gray-600 ml-6 mr-3">
          {title ? title : "Mở"}
        </Text>
        <Animated.View>
          <Icon name="chevron-down" size={19} color="black" />
        </Animated.View>
      </TouchableOpacity>
      <Animated.View style={animation}>{children}</Animated.View>
    </View>
  );
}
