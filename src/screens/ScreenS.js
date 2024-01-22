import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Dimensions,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useContext } from "react";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import { Platform } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function ScreenS() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={[style.main, { backgroundColor: theme.bg }]}>
          <AppBar
            color={theme.bg}
            title="Search"
            titleStyle={[style.r16, { color: theme.txt }]}
            // centerTitle={true}
            elevation={0}
            // style={{marginHorizontal:20}}
            leading={
              <TouchableOpacity onPress={() => navigation.navigate("MyTabs")}>
                <Icon name="arrow-back" color={theme.txt} size={25} />
              </TouchableOpacity>
            }
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 0 }}
          >
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "Type to find recipes.."
                      ? Colors.primary
                      : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                },
              ]}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Search2")}>
                <Icon name="search" size={20} color={theme.disable}></Icon>
              </TouchableOpacity>
              <TextInput
                placeholder="Type to find recipes.."
                onFocus={() => setIsFocused("Type to find recipes..")}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  {
                    paddingHorizontal: 10,
                    color: theme.txt,
                    // fontFamily: "Urbanist-Regular",
                    flex: 1,
                  },
                ]}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={[style.m16, { color: theme.txt }]}>
                Recently search
              </Text>
              <Text style={[style.r12, { color: theme.disable }]}>
                Delete all
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={[style.r12, { color: theme.disable }]}>Burger</Text>
              <Icon name="close" size={20} color={theme.disable}></Icon>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={[style.r12, { color: theme.disable }]}>
                Sandwich
              </Text>
              <Icon name="close" size={20} color={theme.disable}></Icon>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={[style.r12, { color: theme.disable }]}>
                Cheesecake
              </Text>
              <Icon name="close" size={20} color={theme.disable}></Icon>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={[style.m16, { color: theme.txt }]}>Categories</Text>
              <Text style={[style.r12, { color: theme.disable }]}>See all</Text>
            </View>

            <Image
              source={require("../../assets/image/a16.png")}
              resizeMode="stretch"
              style={{ height: height / 7, width: width - 40, marginTop: 10 }}
            ></Image>
            <Image
              source={require("../../assets/image/a17.png")}
              resizeMode="stretch"
              style={{ height: height / 7, width: width - 40, marginTop: 15 }}
            ></Image>
            <Image
              source={require("../../assets/image/a18.png")}
              resizeMode="stretch"
              style={{
                height: height / 7,
                width: width - 40,
                marginTop: 15,
                marginBottom: 20,
              }}
            ></Image>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
