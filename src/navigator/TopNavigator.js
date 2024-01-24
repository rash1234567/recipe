import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Colors } from "../theme/color";
import style from "../theme/style";
import Icon from "react-native-vector-icons/Ionicons";
import themeContext from "../theme/themeContex";

import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const Draft = () => {
  const theme = useContext(themeContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={[style.r16, { color: theme.txt }]}>Shepherd's pie</Text>
          <Icon name="ellipsis-vertical" size={20} color={theme.txt} />
        </View>
        <Text style={[style.r12, { color: theme.disable }]}>
          Edited 12 minutes ago
        </Text>

        <View
          style={[
            style.divider,
            { backgroundColor: Colors.border, marginTop: 10 },
          ]}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <Text style={[style.r16, { color: theme.txt }]}>Arancini</Text>
          <Icon name="ellipsis-vertical" size={20} color={theme.txt} />
        </View>
        <Text style={[style.r12, { color: theme.disable }]}>
          Edited 1 day ago
        </Text>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate("UploadS")}
        style={{
          height: height / 15.5,
          width: width / 7,
          backgroundColor: Colors.primary,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 80,
          right: 10,
        }}
      >
        <Icon name="add-sharp" size={35} color={Colors.secondary} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const MyRecipes = () => {
  const theme = useContext(themeContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={[style.r16, { color: theme.txt }]}>
            Curry salmon soup
          </Text>
          <Icon name="ellipsis-vertical" size={20} color={theme.txt} />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View>
            <Text style={[style.r12, { color: theme.disable }]}>Read</Text>
            <Text style={[style.m16, { color: theme.txt }]}>7.5K</Text>
          </View>

          <View
            style={[
              style.verticaldivider,
              { backgroundColor: Colors.border, height: height / 18 },
            ]}
          />

          <View>
            <Text style={[style.r12, { color: theme.disable }]}>
              Min average
            </Text>
            <Text style={[style.m16, { color: theme.txt }]}>9min</Text>
          </View>

          <View
            style={[
              style.verticaldivider,
              { backgroundColor: Colors.border, height: height / 18 },
            ]}
          />

          <View>
            <Text style={[style.r12, { color: theme.disable }]}>Saved</Text>
            <Text style={[style.m16, { color: theme.txt }]}>5.8K</Text>
          </View>

          <View
            style={[
              style.verticaldivider,
              { backgroundColor: Colors.border, height: height / 18 },
            ]}
          />

          <View>
            <Text style={[style.r12, { color: theme.disable }]}>Share</Text>
            <Text style={[style.m16, { color: theme.txt }]}>543</Text>
          </View>
        </View>

        <View
          style={[
            style.divider,
            { backgroundColor: Colors.border, marginTop: 10 },
          ]}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Text style={[style.r16, { color: theme.txt }]}>
            Blueberry pancake
          </Text>
          <Icon name="ellipsis-vertical" size={20} color={theme.txt} />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View>
            <Text style={[style.r12, { color: theme.disable }]}>Read</Text>
            <Text style={[style.m16, { color: theme.txt }]}>7.5K</Text>
          </View>

          <View
            style={[
              style.verticaldivider,
              { backgroundColor: Colors.border, height: height / 18 },
            ]}
          />

          <View>
            <Text style={[style.r12, { color: theme.disable }]}>
              Min average
            </Text>
            <Text style={[style.m16, { color: theme.txt }]}>9min</Text>
          </View>

          <View
            style={[
              style.verticaldivider,
              { backgroundColor: Colors.border, height: height / 18 },
            ]}
          />

          <View>
            <Text style={[style.r12, { color: theme.disable }]}>Saved</Text>
            <Text style={[style.m16, { color: theme.txt }]}>5.8K</Text>
          </View>

          <View
            style={[
              style.verticaldivider,
              { backgroundColor: Colors.border, height: height / 18 },
            ]}
          />

          <View>
            <Text style={[style.r12, { color: theme.disable }]}>Share</Text>
            <Text style={[style.m16, { color: theme.txt }]}>543</Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate("UploadS")}
        style={{
          height: 62,
          width: 62,
          backgroundColor: Colors.primary,
          borderRadius: 31,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 80,
          right: 10,
        }}
      >
        <Icon name="add-sharp" size={35} color={Colors.secondary} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Tab = createMaterialTopTabNavigator();

export default function TopNavigator() {
  const theme = useContext(themeContext);
  // const [darkMode, setDarkMode] = useState("false");

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: theme.bg },
        tabBarLabelStyle: {
          fontSize: 15,
          // backgroundColor:Colors.disable,
          borderRadius: 20,
        },
        swipeEnabled: false,
        tabBarPressOpacity: 0.5,
        tabBarPressColor: theme.bg,
        tabBarIndicatorStyle: { backgroundColor: Colors.primary },
      }}
    >
      <Tab.Screen
        name="Drafts"
        component={Draft}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color }) => (
            <View
              style={
                {
                  // borderColor:theme.txt,borderRadius:20,borderWidth:2,
                  // backgroundColor:focused ? theme.txt : theme.bg,
                  // paddingVertical:8,
                  // marginHorizontal:-60,
                  // width:width/3,
                  // paddingHorizontal:20
                }
              }
            >
              <Text
                style={{
                  color: focused ? theme.txt : theme.disable,
                  // fontFamily: "Poppins-Medium",
                  textAlign: "center",
                }}
              >
                Drafts
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="My recipes"
        component={MyRecipes}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color }) => (
            <View
              style={
                {
                  // borderColor:theme.txt,borderRadius:20,borderWidth:2,
                  // backgroundColor:focused ? theme.txt : theme.bg,
                  // paddingVertical:8,
                  // marginHorizontal:-60
                }
              }
            >
              <Text
                style={{
                  color: focused ? theme.txt : theme.disable,
                  // fontFamily: "Poppins-Medium",
                  textAlign: "center",
                }}
              >
                My recipes
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
