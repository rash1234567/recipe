import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
} from "react-native";
import React, { useContext } from "react";
import { Colors } from "../theme/color";
import style from "../theme/style";
import themeContext from "../theme/themeContex";
import { useNavigation } from "@react-navigation/native";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import OtpInput from "../components/otp-inputs"

// import OtpInputs from 'react-native-otp-inputs'
// import Clipboard from '@react-native-clipboard/clipboard'

// const width = Dimensions.get("screen").width;
// const height = Dimensions.get("screen").height;

export default function Otp() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const handleOtpChange = (otp) => {
    // Handle OTP change logic here (e.g., verify OTP)
    console.log("OTP changed:", otp);
  };

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
            title="Enter Code"
            titleStyle={[style.r16, { color: theme.txt }]}
            centerTitle
            elevation={0}
            leading={
              <TouchableOpacity
                onPress={() => navigation.navigate("ResetPass")}
              >
                <Icon name="arrow-back" color={theme.txt} size={25} />
              </TouchableOpacity>
            }
          />

          <Text style={[style.title, { color: theme.txt, marginTop: 10 }]}>
            Enter your code
          </Text>
          <Text style={[style.r16, { color: theme.disable, marginTop: 10 }]}>
            Enter the code we sent to your email
          </Text>
          <View style={{ paddingTop: 50 }}>
            <OtpInput length={6} onOtpChange={handleOtpChange} />
            {/* <OtpInputs
              // Clipboard={Clipboard}
              numberOfInputs={4}
              selectionColor={Colors.primary}
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              inputStyles={{
                borderColor: theme.disable,
                backgroundColor: theme.input,
                borderRadius: 10,
                textAlign: "center",
                height: 56,
                width: 56,
                fontSize: 20,
                borderWidth: 1,
                color: theme.txt,
                fontFamily: "Poppins-SemiBold",
              }}
            /> */}
          </View>
          <Text style={[style.r16, { color: theme.disable, marginTop: 10 }]}>
            not receiving email? check on promotion page, spam or{" "}
            <Text style={{ color: Colors.primary }}>resend code</Text>
          </Text>
          <View
            style={{ flex: 1, justifyContent: "flex-end", marginBottom: 20 }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={style.btn}
            >
              <Text style={style.btntxt}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
