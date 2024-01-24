import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  // CheckBox
} from "react-native";
import React, { useState, useContext } from "react";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
// import { useLogin } from "../hooks/auth/login";



export default function Login() {
  // const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  // const [isSelected, setIsSelected] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { mutateAsync, isPending } = useLogin(
  //   (data) => {
  //     console.log(data)
  //     if (data.error) {
  //       alert(data.message || "Something went wrong"); ;
  //       return;
  //     }
  //     navigation.navigate("MyTabs");
  //   },
  //   (err) => console.log(err)
  // )

  // const handleLogin = async () => {
  //   const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
  //     email
  //   )
  //   if(!isValidEmail || email.length === 0) {
  //     alert("Please enter a valid email address")
  //     return
  //   }
  //   if(password.length < 6) {
  //     alert("Password must be at least 6 characters")
  //     return
  //   }
  //   mutateAsync({ email, password });
  // }

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <StatusBar translucent={false} backgroundColor={theme.bg} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={[style.main, { backgroundColor: theme.bg, marginTop: 35 }]}>
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
                value={email}
                onChangeText={(text) => setEmail(text)}
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
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Password"
                onFocus={() => setIsFocused("Password")}
                onBlur={() => setIsFocused(false)}
                secureTextEntry
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
                onPress={() => {
                  navigation.navigate("MyTabs");
                }}
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
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
