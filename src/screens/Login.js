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
// import CheckBox from '@react-native-community/checkbox';
import { Platform } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
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
        <View style={[style.main, { backgroundColor: theme.bg, marginTop: 5 }]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[style.title, { color: theme.txt }]}>Welcome</Text>
            <Text style={[style.r14, { color: theme.disable }]}>
              Enter your Phone number or Email address for sign in
            </Text>

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

            <View
              style={{
                flexDirection: "row",
                marginVertical: 20,
                alignItems: "center",
              }}
            >
              {/* <CheckBox
                    value={isSelected}
                    onValueChange={() => setIsSelected(!isSelected)}
                    tintColors={{ true: theme.txt, false: theme.txt }}
                    boxType={'square'}
                    onTintColor={theme.txt}
                    onCheckColor={theme.bg}
                    onFillColor={theme.txt}
                /> */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flex: 1,
                }}
              >
                <Text
                  style={[style.r12, { marginLeft: 5, color: theme.disable }]}
                >
                  Remember me
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
                  <Text
                    style={[style.r12, { marginLeft: 5, color: theme.disable }]}
                  >
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ marginVertical: 20 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("MyTabs")}
                style={style.btn}
              >
                <Text style={style.btntxt}>Login</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[style.r14, { color: theme.disable, marginTop: 5 }]}>
                Don’t have account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={{ color: Colors.primary }}> Create Account</Text>
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
