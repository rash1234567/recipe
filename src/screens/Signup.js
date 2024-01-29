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
import { useCreateAccount } from "../hooks/auth/register";
// import { AppBar } from '@react-native-material/core';
import Icon from "react-native-vector-icons/Ionicons";
import { useVerifyEmail } from "../hooks/auth/verifyEmail";

export default function Signup() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Register");
  const { verifyEmail, verifyingEmail} = useVerifyEmail(
    (data) => {
      if (data.error) {
        alert(data.message);
        return;
      }
      alert("email verified");
      navigation.navigate("Login");
    },
    (err) => console.log(err)
  );

  const { mutateAsync, isPending } = useCreateAccount(
    async (data) => {
      if (data.error) {
        alert(data.message);
        return;
      }
      alert(
        "Account created successfully please click the button to verify your email"
      );
      setButtonText("Verify Email");
    },
    (err) => console.log(err)
  );

  const handleRegister = async () => {
    //check if email is a valid email using regex
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    );
    if (!isValidEmail || email.length === 0) {
      alert("Please enter a valid email address");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    await mutateAsync({ email, password });
    console.log(email, password);
  };

  const handleVerifyEmail = async () => {
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    );
    if (!isValidEmail || email.length === 0) {
      alert("Please enter a valid email address");
      return;
    }
    await verifyEmail({ email });
  };

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <StatusBar translucent={false} backgroundColor={theme.bg} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View
          style={[style.main, { backgroundColor: theme.bg, marginTop: 35 }]}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: theme.bg }}
          >
            <Text style={[style.title, { color: theme.txt }]}>
              Create Account
            </Text>
            <Text style={[style.r14, { color: theme.disable }]}>
              Enter your name, email and password for sign up.
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
                onChangeText={(e) => setEmail(e)}
                placeholder="Please enter email address"
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
                onChangeText={(e) => setPassword(e)}
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

            {buttonText === "Verify Email" ? (
              <View style={{ marginVertical: 20 }}>
                <TouchableOpacity
                  onPress={handleVerifyEmail}
                  style={style.btn}
                  disabled={verifyingEmail}
                >
                  {isPending ? (
                    <Text style={style.btntxt}>verifying email...</Text>
                  ) : (
                    <Text style={style.btntxt}>{buttonText}</Text>
                  )}
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{ marginVertical: 20 }}>
                <TouchableOpacity
                  onPress={handleRegister}
                  style={style.btn}
                  disabled={isPending}
                >
                  {isPending ? (
                    <Text style={style.btntxt}>creating account...</Text>
                  ) : (
                    <Text style={style.btntxt}>{buttonText}</Text>
                  )}
                </TouchableOpacity>
              </View>
            )}

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[style.r14, { color: theme.disable, marginTop: 5 }]}>
                Already have account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={{ color: Colors.primary }}> Login </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
