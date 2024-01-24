import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useContext } from "react";
import { Colors } from "../theme/color";
import style from "../theme/style";
import themeContext from "../theme/themeContex";
import { useNavigation } from "@react-navigation/native";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function EditProfile() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <StatusBar backgroundColor={theme.bg} translucent={false} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={[style.main, { backgroundColor: theme.bg }]}>
          <AppBar
            color={theme.bg}
            title="Edit Profile"
            titleStyle={[style.r16, { color: theme.txt }]}
            centerTitle
            elevation={0}
            leading={
              <TouchableOpacity onPress={() => navigation.navigate("MyTabs")}>
                <Icon name="arrow-back" color={theme.txt} size={25} />
              </TouchableOpacity>
            }
            trailing={
              <View
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  backgroundColor: "#A7F5B3",
                  borderRadius: 25,
                }}
              >
                <Text style={[style.m12, { color: Colors.secondary }]}>
                  Save
                </Text>
              </View>
            }
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <Image
              source={require("../../assets/image/s21.png")}
              style={{
                height: height / 8,
                width: width / 3.5,
                resizeMode: "stretch",
                alignSelf: "center",
                marginTop: 15,
              }}
            />
            <Text style={[style.m16, { color: theme.txt, marginTop: 10 }]}>
              Name
            </Text>

            <View
              style={[
                style.inputContainer,
                {
                  borderColor: theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 5,
                },
              ]}
            >
              <TextInput
                placeholder="Laura Harper"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  style.r12,
                  { paddingHorizontal: 10, color: theme.txt, flex: 1 },
                ]}
              />
            </View>

            <Text style={[style.m16, { color: theme.txt, marginTop: 10 }]}>
              User ame
            </Text>

            <View
              style={[
                style.inputContainer,
                {
                  borderColor: theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 5,
                },
              ]}
            >
              <TextInput
                placeholder="@lauraharper"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  style.r12,
                  { paddingHorizontal: 10, color: theme.txt, flex: 1 },
                ]}
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
