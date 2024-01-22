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
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Forgot() {
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
        <View style={[style.main, { backgroundColor: theme.bg }]}>
          <AppBar
            color={theme.bg}
            title="Forgot password"
            titleStyle={[style.r16, { color: theme.txt }]}
            centerTitle={true}
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
                onPress={() => navigation.navigate("Email")}
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
