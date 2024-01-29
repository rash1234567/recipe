import { StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EventRegister } from "react-native-event-listeners";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import { Colors } from "../theme/color";

import Orboard from "../screens/Orboard";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import Forgot from "../screens/Forgot";
import Email from "../screens/Email";
import ResetPass from "../screens/ResetPass";
import Notification from "../screens/Notification";
import Home from "../screens/Home";
import Live from "../screens/Live";
import LiveD from "../screens/LiveD";
import UploadR from "../screens/UploadR";
import ScreenS from "../screens/ScreenS";
import Recipetab from "../screens/Recipetab";
import UploadS from "../screens/UploadS";
import Otp from "../screens/Otp";
import Profile from "../screens/Profile";
import Finish from "../screens/Finish";
import Direction from "../screens/Direction";
import Recipe from "../screens/Recipe";
import Favourite from "../screens/Favourite";
import SR from "../screens/SR";
import Search2 from "../screens/Search2";
import Profile2 from "../screens/Profile2";
import Insight from "../screens/Insight";
import EditProfile from "../screens/EditProfile";
import Comment from "../screens/Comment";
import Setting from "../screens/Setting";
import Account from "../screens/Account";
import Language from "../screens/Language";
import Theme from "../screens/Theme";
import Notification1 from "../screens/Notification1";
import MyTabs from "./BottomNavigator";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  useEffect(() => {
    const listener = EventRegister.addEventListener("ChangeTheme", (data) => {
      setDarkMode(data);
      console.log(data);
    });

    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);

  const [darkMode, setDarkMode] = useState(false);
  return (
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
        <StatusBar
          backgroundColor={darkMode === true ? Colors.active : Colors.secondary}
          barStyle={darkMode === true ? "light-content" : "dark-content"}
          translucent={false}
        />
        <Stack.Navigator>
          <Stack.Screen
            name="Orboard"
            component={Orboard}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Profile2"
            component={Profile2}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Notification1"
            component={Notification1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Theme"
            component={Theme}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Language"
            component={Language}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Setting"
            component={Setting}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Comment"
            component={Comment}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Insight"
            component={Insight}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Search2"
            component={Search2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SR"
            component={SR}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Favourite"
            component={Favourite}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Recipe"
            component={Recipe}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Direction"
            component={Direction}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Finish"
            component={Finish}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Otp"
            component={Otp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UploadS"
            component={UploadS}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Recipetab"
            component={Recipetab}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ScreenS"
            component={ScreenS}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UploadR"
            component={UploadR}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LiveD"
            component={LiveD}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Live"
            component={Live}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ResetPass"
            component={ResetPass}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Email"
            component={Email}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Forgot"
            component={Forgot}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyTabs"
            component={MyTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
}
