import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AutoLog from "./src/screens/Login/AutoLog";
import LoginScreen from "./src/screens/Login/LoginScreen";
import SignUp from "./src/screens/Login/SignUp";
import Home from "./src/screens/HomeScreens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="AutoLog"> */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AutoLog" component={AutoLog} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
