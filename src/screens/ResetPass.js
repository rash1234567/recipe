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
import CheckBox from "@react-native-community/checkbox";
import { Platform } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function ResetPass() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <StatusBar translucent={false} backgroundColor={theme.bg}></StatusBar>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View
          style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[style.title, { color: theme.txt }]}>
              Reset Password
            </Text>
            <Text style={[style.r14, { color: theme.disable }]}>
              This will change the password for the email
              Haileesteinfield@gmail.com
            </Text>

            <Text style={[style.m16, { color: theme.txt, marginTop: 20 }]}>
              New Password
            </Text>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "New Password" ? Colors.primary : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 5,
                },
              ]}
            >
              <TextInput
                placeholder="New Password"
                onFocus={() => setIsFocused("New Password")}
                onBlur={() => setIsFocused(false)}
                secureTextEntry={isPasswordVisible}
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
              <TouchableOpacity
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <Icon name={isPasswordVisible ? "eye-off" : "eye"} size={20} />
              </TouchableOpacity>
            </View>

            <Text style={[style.m16, { color: theme.txt, marginTop: 20 }]}>
              Confirm Password
            </Text>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "Confirm Password"
                      ? Colors.primary
                      : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 5,
                },
              ]}
            >
              <TextInput
                placeholder="Confirm Password"
                onFocus={() => setIsFocused("Confirm Password")}
                onBlur={() => setIsFocused(false)}
                secureTextEntry={isPasswordVisible1}
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
              <TouchableOpacity
                onPress={() => setIsPasswordVisible1(!isPasswordVisible1)}
              >
                <Icon name={isPasswordVisible1 ? "eye-off" : "eye"} size={20} />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 30,
              }}
            >
              <Text style={[style.m12, { color: theme.txt }]}>
                Password Strength
              </Text>
              <Text style={[style.m12, { color: Colors.primary }]}>
                Strong😎
              </Text>
            </View>

            <View
              style={{
                backgroundColor: theme.input,
                height: 8,
                borderRadius: 10,
                marginTop: 15,
                flex: 1,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.primary,
                  height: 8,
                  borderRadius: 10,
                  width: width / 1.5,
                }}
              ></View>
            </View>

            <Text style={[style.r12, { color: theme.disable, marginTop: 15 }]}>
              Your password is strong, nice work!
            </Text>

            <View style={{ marginTop: 30, marginBottom: 20 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Otp")}
                style={style.btn}
              >
                <Text style={style.btntxt}>Reset password</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
