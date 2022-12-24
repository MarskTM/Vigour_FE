import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AutoLog from "./src/screens/AuthScreen/AutoLog";
import LoginScreen from "./src/screens/AuthScreen/LoginScreen";
import SignUp from "./src/screens/AuthScreen/SignUp";
import Home from "./src/screens/HomeScreen/Home";
import BottomTabs from "./src/components/navigation/BottomTabs";
import Forum from "./src/screens/ForumScreen/Forum";
import Quizz from "./src/screens/QuizzScreen/Quizz";
import NewsFeed from "./src/screens/HomeScreen/NewsFeed";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="AutoLog"> */}
      <Stack.Navigator initialRouteName="AutoLog" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="AutoLog" component={AutoLog} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomeTabs" component={BottomTabs} />
        <Stack.Screen name="Forum" component={Forum} />
        <Stack.Screen name="Quizz" component={Quizz} />
        <Stack.Screen name="NewsFeed" component={NewsFeed} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
