import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useContext } from "react";
import { Colors } from "../theme/color";
import style from "../theme/style";
import themeContext from "../theme/themeContex";
import { useNavigation } from "@react-navigation/native";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
import { Platform } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Direction() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View
          style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}
        >
          <AppBar
            color={theme.bg}
            title="Direction"
            titleStyle={[style.r16, { color: theme.txt }]}
            centerTitle
            elevation={0}
            leading={
              <TouchableOpacity onPress={() => navigation.navigate("Recipe")}>
                <Icon name="arrow-back" color={theme.txt} size={25} />
              </TouchableOpacity>
            }
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginTop: 10 }}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled
              >
                <Image
                  source={require("../../assets/image/s7.png")}
                  style={{
                    height: height / 5,
                    width: width / 1.3,
                    resizeMode: "stretch",
                    alignSelf: "center",
                    marginRight: 10,
                  }}
                />
                <Image
                  source={require("../../assets/image/s8.png")}
                  style={{
                    height: height / 5,
                    width: width / 1.3,
                    resizeMode: "stretch",
                    alignSelf: "center",
                  }}
                />
              </ScrollView>
            </View>

            <Text style={[style.apptitle, { color: theme.txt, marginTop: 20 }]}>
              Prepare the ingredients
            </Text>
            <Text style={[style.r12, { color: theme.disable, marginTop: 5 }]}>
              Prepare ingredients such as pasta, vegetables (according to your
              taste), prepare pasta sauce and meat. After all the ingredients
              are prepared wash all the ingredients with running water.
            </Text>
          </ScrollView>

          <Text style={[style.r12, { color: Colors.primary }]}>
            Steps 1 <Text style={{ color: theme.disable }}>of 2</Text>
          </Text>
          <View
            style={{
              backgroundColor: theme.input,
              height: 8,
              borderRadius: 10,
              marginTop: 15,
            }}
          >
            <View
              style={{
                backgroundColor: Colors.primary,
                height: 8,
                borderRadius: 10,
                width: width / 10,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Finish")}
            style={[style.btn, { marginVertical: 20 }]}
          >
            <Text style={style.btntxt}>Next</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
