import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Switch,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { Colors } from "../theme/color";
import style from "../theme/style";
import themeContext from "../theme/themeContex";
import { useNavigation } from "@react-navigation/native";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import { EventRegister } from "react-native-event-listeners";

// const width = Dimensions.get("screen").width;
// const height = Dimensions.get("screen").height;

export default function Theme() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState("false");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  useEffect(() => {
    if (Date.now() === 0) {
      toggleSwitch();
    } else {
    }
  });
  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <StatusBar translucent={false} backgroundColor={theme.bg} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <AppBar
          color={theme.bg}
          title="Theme"
          titleStyle={[style.r16, { color: theme.txt }]}
          centerTitle
          style={{ marginHorizontal: 20 }}
          elevation={0}
          leading={
            <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
              <Icon name="arrow-back" color={theme.txt} size={25} />
            </TouchableOpacity>
          }
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingVertical: 7,
              backgroundColor: theme.s1,
              paddingHorizontal: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={[style.r16, { color: theme.txt }]}>Light mode</Text>
            <Icon name="checkmark" color={Colors.primary} size={25} />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
              paddingHorizontal: 20,
            }}
          >
            <Text style={[style.r16, { color: theme.disable }]}>Dark mode</Text>
            <Switch
              trackColor={{ false: Colors.primary, true: Colors.primary }}
              thumbColor={isEnabled ? Colors.secondary : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              value={darkMode}
              onValueChange={(value) => {
                setDarkMode(value);
                EventRegister.emit("ChangeTheme", value);
              }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
