import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AutoLog from "./src/screens/AuthenScreens/AutoLog";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AutoLog" component={AutoLog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
