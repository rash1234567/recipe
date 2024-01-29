import React, { useContext } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
// import Profile from '../screens/Profile';
import { Colors } from "../theme/color";
import themeContext from "../theme/themeContex";
// import Icon from "react-native-vector-icons/FontAwesome5";
import Home from "../screens/Home";
import Live from "../screens/Live";
import Recipetab from "../screens/Recipetab";
import Profile2 from "../screens/Profile2";
import Favourite from "../screens/Favourite";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const theme = useContext(themeContext);
  const [darkMode,setDarkMode] = useState('false')

  return (
    <Tab.Navigator
      screenOptions={{
        // BottomTabBarHeight:30,
        tabBarStyle: {
          position: "absolute",
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          backgroundColor: theme.bg,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("../../assets/image/a23.png")}
                resizeMode="stretch"
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? Colors.primary : Colors.lable,
                }}
              />
            );
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Live"
        component={Live}
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({ focused, color }) => {
            return (
              <Image
                source={require("../../assets/image/a22.png")}
                resizeMode="stretch"
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? Colors.primary : Colors.lable,
                }}
              />
            );
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Recipetab"
        component={Recipetab}
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({ focused, color }) => {
            return (
              <Icons
                name="plus-box"
                size={25}
                color={focused ? Colors.primary : Colors.lable}
              />
            );
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({ focused, color }) => {
            return (
              <Icons
                name="bookmark"
                size={25}
                color={focused ? Colors.primary : Colors.lable}
              />
            );
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profile2"
        component={Profile2}
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name="person"
                size={25}
                color={focused ? Colors.primary : Colors.lable}
              />
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
