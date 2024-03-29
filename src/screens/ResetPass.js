import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
// import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import { useResetPassword } from "../hooks/auth/resetPassword";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppSelector } from "../store";
import { selectToken } from "../redux/auth";
// import CheckBox from "@react-native-community/checkbox";

const width = Dimensions.get("screen").width;
// const height = Dimensions.get("screen").height;

export default function ResetPass() {
  const token = useAppSelector(selectToken)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
  const [email, setEmail] = useState("");
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const getEmailFromStorage = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem("email");
        setEmail(storedEmail || "");
      } catch (error) {
        console.error("Error retrieving email from storage:", error);
      }
    };
    getEmailFromStorage();
  }, []);

  const { resetPassword, resettingPassword } = useResetPassword(
    (data) => {
      if (data.error) {
        alert(data.message);
        return;
      }
      alert("Password reset successfully");
      navigation.navigate("Login");
    },
    (err) => {
      console.log(err);
    }
  );

  const handleResetPassword = () => {
    // check if email is a valid email using regex
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    )
    if (!isValidEmail || email.length === 0) {
      alert("Please enter a valid email address");
      return;
    }
    if(password.length === 0) {
      alert("Password must be at least 6 characters long");
      return;
    }
    if(password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    resetPassword({
      token,
      password: password,
      email: email,
    });
  };

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <StatusBar translucent={false} backgroundColor={theme.bg} />
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
              This will change the password for the email...
              {email}
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
                value={password}
                onChangeText={(e) => setPassword(e)}
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
                value={confirmPassword}
                onChangeText={(e) => setConfirmPassword(e)}
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

            {/* <View
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
            </View> */}

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
              />
            </View>

            {/* <Text style={[style.r12, { color: theme.disable, marginTop: 15 }]}>
              Your password is strong, nice work!
            </Text> */}

            <View style={{ marginTop: 30, marginBottom: 20 }}>
              <TouchableOpacity
                onPress={handleResetPassword}
                style={style.btn}
                disable={resettingPassword}
              >
                {resettingPassword ? (
                  <Text style={style.btntxt}>Please wait</Text>
                ) : (
                  <Text style={style.btntxt}>Reset password</Text>
                )}
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
