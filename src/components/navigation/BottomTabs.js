import React from "react";
import { Icon } from "@rneui/base";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/HomeScreen/Home";
import Message from "../../screens/MessageScreen/Message";
import Notification from "../../screens/NotificationScreen/Notification";
import Profile from "../../screens/ProfileScreen/Profile";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 65,
          paddingBottom: 8, // Specify the height of your custom header
        },
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: "Notification",
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" type="font-awesome-5" size={27} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: "Message",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="comment"
              type="font-awesome-5"
              size={25}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" type="font-awesome-5" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
