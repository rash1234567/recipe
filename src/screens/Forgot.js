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
} from "react-native";
import React, { useState, useContext } from "react";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import {useForgotPassword} from "../hooks/auth/forgotPassword"


// const width = Dimensions.get("screen").width;
// const height = Dimensions.get("screen").height;

export default function Forgot() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [email,setEmail] = useState("")
  const {forgotPassword,requestingPassword } = useForgotPassword(
    (data) => {
      if (data.error) {
        alert(data.message);
        return;
      }
      navigation.navigate("otp");
    },
    (error)=> console.log(error)
  )

  const handleForgotPassword = () => {
    //check if email is a valid email using regex
    // const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    //   email
    // );
    // if (!isValidEmail || email.length === 0) {
    //   alert("Please enter a valid email address");
    //   return;
    // }
    // forgotPassword(email);
    navigation.navigate("Otp");
  }

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <StatusBar translucent={false} backgroundColor={theme.bg} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={[style.main, { backgroundColor: theme.bg }]}>
          <AppBar
            color={theme.bg}
            title="Forgot password"
            titleStyle={[style.r16, { color: theme.txt }]}
            centerTitle
            elevation={0}
            leading={
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Icon name="arrow-back" color={theme.txt} size={25} />
              </TouchableOpacity>
            }
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 10 }}
          >
            <Text style={[style.title, { color: theme.txt }]}>
              Forgot Password
            </Text>
            <Text style={[style.r14, { color: theme.disable }]}>
              Enter your email address and we will send you a reset
              instructions.
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
                onChangeText={(e)=>setEmail(e)}
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
              <Icon name="close-sharp" color={Colors.disable} size={20} />
            </View>

            <View style={{ marginVertical: 20 }}>
              <TouchableOpacity
                onPress={handleForgotPassword}
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
