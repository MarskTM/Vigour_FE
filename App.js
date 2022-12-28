import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AutoLog from "./src/screens/AuthScreen/AutoLog";
import LoginScreen from "./src/screens/AuthScreen/LoginScreen";
import SignUp from "./src/screens/AuthScreen/SignUp";
import Home from "./src/screens/HomeScreen/Home";
import BottomTabs from "./src/components/navigation/BottomTabs";
import Forum from "./src/screens/ForumScreen/Forum";
import Quizz from "./src/screens/QuizzScreen/Quizz";
import Answer from "./src/screens/QuizzScreen/Answer";
import NewsFeed from "./src/screens/HomeScreen/NewsFeed";
import UpdateProfile from "./src/screens/ProfileScreen/UpdateProfile";
import Details from "./src/screens/DetailScreen/Details";

// on top of your index.android.js file
const isAndroid = require('react-native').Platform.OS === 'android'; // this line is only needed if you don't use an .android.js file
const isHermesEnabled = !!global.HermesInternal;  // this line is only needed if you don't use an .android.js file

// in your index.js file
if (isHermesEnabled || isAndroid) {  // this line is only needed if you don't use an .android.js file

  require('@formatjs/intl-getcanonicallocales/polyfill');
  require('@formatjs/intl-locale/polyfill');

  require('@formatjs/intl-pluralrules/polyfill');
  require('@formatjs/intl-pluralrules/locale-data/vi.js'); // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT

  require('@formatjs/intl-displaynames/polyfill');
  require('@formatjs/intl-displaynames/locale-data/vi.js'); // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT

  require('@formatjs/intl-listformat/polyfill');
  require('@formatjs/intl-listformat/locale-data/vi.js'); // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT

  require('@formatjs/intl-numberformat/polyfill');
  require('@formatjs/intl-numberformat/locale-data/vi.js'); // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT

  require('@formatjs/intl-relativetimeformat/polyfill');
  require('@formatjs/intl-relativetimeformat/locale-data/vi.js'); // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT

  require('@formatjs/intl-datetimeformat/polyfill');
  require('@formatjs/intl-datetimeformat/locale-data/vi.js'); // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT

  require('@formatjs/intl-datetimeformat/add-golden-tz.js');
}


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="AutoLog"> */}
      <Stack.Navigator initialRouteName="AutoLog" screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="AutoLog" component={AutoLog} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomeTabs" component={BottomTabs} />
        <Stack.Screen name="Forum" component={Forum} />
        <Stack.Screen name="Quizz" component={Quizz} />
        <Stack.Screen name="NewsFeed" component={NewsFeed} />
        <Stack.Screen name="Answer" component={Answer} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}
