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
import { Platform } from "react-native";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
// import { AppBar } from '@react-native-material/core';
import Icon from "react-native-vector-icons/Ionicons";
// import CheckBox from '@react-native-community/checkbox';

// const width = Dimensions.get('screen').width
// const height = Dimensions.get('screen').height

export default function Signup() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <StatusBar translucent={false} backgroundColor={theme.bg}></StatusBar>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[style.title, { color: theme.txt }]}>
              Create Account
            </Text>
            <Text style={[style.r14, { color: theme.disable }]}>
              Enter your name, email and password for sign up.
            </Text>
            <Text style={[style.m16, { color: theme.txt, marginTop: 25 }]}>
              Full Name
            </Text>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "Full Name" ? Colors.primary : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 5,
                },
              ]}
            >
              <TextInput
                placeholder="Full Name"
                onFocus={() => setIsFocused("Full Name")}
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

            <Text style={[style.m16, { color: theme.txt, marginTop: 20 }]}>
              Email address
            </Text>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "Email address"
                      ? Colors.primary
                      : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 5,
                },
              ]}
            >
              <TextInput
                placeholder="lauraharper@gmail.com"
                onFocus={() => setIsFocused("Email address")}
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
              <Icon name="checkmark-sharp" color={Colors.disable} size={20} />
            </View>

            <Text style={[style.m16, { color: theme.txt, marginTop: 20 }]}>
              Password
            </Text>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "Password" ? Colors.primary : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 5,
                },
              ]}
            >
              <TextInput
                placeholder="Password"
                onFocus={() => setIsFocused("Password")}
                onBlur={() => setIsFocused(false)}
                secureTextEntry={true}
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
              <Icon name="close" color={Colors.disable} size={20} />
            </View>

            <View style={{ marginVertical: 20 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("MyTabs")}
                style={style.btn}
              >
                <Text style={style.btntxt}>Sign up</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[style.r14, { color: theme.disable, marginTop: 5 }]}>
                Already have account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={{ color: Colors.primary }}> Login </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                marginVertical: 20,
              }}
            >
              <View
                style={[
                  style.divider,
                  { flex: 1, backgroundColor: theme.disable },
                ]}
              ></View>
              <Text
                style={[
                  style.r12,
                  { color: theme.disable, marginHorizontal: 10 },
                ]}
              >
                or continue with
              </Text>
              <View
                style={[
                  style.divider,
                  { flex: 1, backgroundColor: theme.disable },
                ]}
              ></View>
            </View>

            <View
              style={[
                style.inputContainer,
                {
                  backgroundColor: "#4285F4",
                  marginTop: 5,
                  borderColor: "#4285F4",
                },
              ]}
            >
              <Image
                source={require("../../assets/image/a1.png")}
                resizeMode="stretch"
                style={{ height: 30, width: 30 }}
              ></Image>
              <Text
                style={[
                  style.s12,
                  { color: Colors.secondary, textAlign: "center", flex: 1 },
                ]}
              >
                SIGN UP WITH GOOGLE
              </Text>
            </View>

            <View
              style={[
                style.inputContainer,
                {
                  backgroundColor: "#395998",
                  marginVertical: 15,
                  borderColor: "#395998",
                },
              ]}
            >
              <Image
                source={require("../../assets/image/a2.png")}
                resizeMode="stretch"
                style={{ height: 30, width: 30 }}
              ></Image>
              <Text
                style={[
                  style.s12,
                  { color: Colors.secondary, textAlign: "center", flex: 1 },
                ]}
              >
                SIGN UP WITH FACEBOOK
              </Text>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
