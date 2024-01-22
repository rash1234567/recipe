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
import { Platform } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function UploadS() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={[style.main, { backgroundColor: theme.bg }]}>
          <AppBar
            color={theme.bg}
            title="Upload recipe"
            titleStyle={[style.r16, { color: theme.txt }]}
            // centerTitle={true}
            elevation={0}
            // style={{marginHorizontal:20}}
            leading={
              <TouchableOpacity onPress={() => navigation.navigate("MyTabs")}>
                <Icon name="arrow-back" color={theme.txt} size={25} />
              </TouchableOpacity>
            }
            trailing={
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: "#A7F5B3",
                    height: height / 26,
                    width: width / 3.6,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                  }}
                >
                  <Text style={[style.m12, { color: Colors.secondary }]}>
                    Upload recipe
                  </Text>
                </View>
              </TouchableOpacity>
            }
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 10 }}
          >
            <Image
              source={theme.a19}
              resizeMode="stretch"
              style={{ height: height / 6, width: width - 40 }}
            ></Image>

            <Text style={[style.m16, { color: theme.txt, marginTop: 20 }]}>
              Recipe title
            </Text>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "Recipe" ? Colors.primary : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 5,
                },
              ]}
            >
              <TextInput
                placeholder="Enter here"
                onFocus={() => setIsFocused("Recipe")}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  style.r12,
                  {
                    paddingHorizontal: 10,
                    color: theme.txt,
                    // fontFamily: "Poppins-Regular",
                    flex: 1,
                  },
                ]}
              />
              <Icon name="close" color={Colors.disable} size={20} />
            </View>

            <Text style={[style.m16, { color: theme.txt, marginTop: 20 }]}>
              Description
            </Text>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "Description" ? Colors.primary : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 5,
                  height: 100,
                },
              ]}
            >
              <TextInput
                placeholder="Enter here"
                onFocus={() => setIsFocused("Description")}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                multiline={true}
                textAlignVertical="top"
                placeholderTextColor={Colors.disable}
                style={[
                  style.r12,
                  {
                    paddingHorizontal: 10,
                    color: theme.txt,
                    // fontFamily: "Poppins-Regular",
                    height: 100,
                    flex: 1,
                  },
                ]}
              />
            </View>

            <Text style={[style.m16, { color: theme.txt, marginTop: 20 }]}>
              Time estimation
            </Text>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "Time" ? Colors.primary : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 5,
                },
              ]}
            >
              <TextInput
                placeholder="Enter here"
                onFocus={() => setIsFocused("Time")}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  style.r12,
                  {
                    paddingHorizontal: 10,
                    color: theme.txt,
                    // fontFamily: "Poppins-Regular",
                    flex: 1,
                  },
                ]}
              />
            </View>

            <Text style={[style.m16, { color: theme.txt, marginTop: 20 }]}>
              Ingredients
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={[
                  style.inputContainer,
                  {
                    borderColor:
                      isFocused === "Ingredients"
                        ? Colors.primary
                        : theme.input,
                    borderWidth: 1,
                    backgroundColor: theme.input,
                    marginTop: 5,
                    flex: 1,
                  },
                ]}
              >
                <TextInput
                  placeholder="Enter here"
                  onFocus={() => setIsFocused("Ingredients")}
                  onBlur={() => setIsFocused(false)}
                  selectionColor={Colors.primary}
                  placeholderTextColor={Colors.disable}
                  style={[
                    style.r12,
                    {
                      paddingHorizontal: 10,
                      color: theme.txt,
                    //   fontFamily: "Poppins-Regular",
                      flex: 1,
                    },
                  ]}
                />
              </View>
              <Icon
                name="trash"
                size={20}
                color={theme.disable}
                style={{ marginLeft: 10 }}
              ></Icon>
            </View>

            <View
              style={[
                style.inputContainer,
                {
                  borderColor: theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 10,
                  flex: 1,
                  justifyContent: "center",
                },
              ]}
            >
              <Icons name="plus-box" size={20} color={theme.disable}></Icons>
              <Text
                style={[style.m12, { color: theme.disable, marginLeft: 10 }]}
              >
                Add more ingredients
              </Text>
            </View>

            <Text style={[style.m16, { color: theme.txt, marginTop: 20 }]}>
              Category
            </Text>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "Category" ? Colors.primary : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 5,
                },
              ]}
            >
              <TextInput
                placeholder="Enter here"
                onFocus={() => setIsFocused("Category")}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  style.r12,
                  {
                    paddingHorizontal: 10,
                    color: theme.txt,
                    // fontFamily: "Poppins-Regular",
                    flex: 1,
                  },
                ]}
              />
            </View>

            <Text style={[style.m16, { color: theme.txt, marginTop: 20 }]}>
              Step by step
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Image
                source={theme.a20}
                resizeMode="stretch"
                style={{ height: height / 15, width: width / 4.5 }}
              ></Image>
              <Icon
                name="trash"
                size={20}
                color={theme.disable}
                style={{ marginLeft: 10 }}
              ></Icon>
            </View>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "a2" ? Colors.primary : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 10,
                  height: 70,
                },
              ]}
            >
              <TextInput
                placeholder="Enter here"
                onFocus={() => setIsFocused("a2")}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                multiline={true}
                textAlignVertical="top"
                placeholderTextColor={Colors.disable}
                style={[
                  style.r12,
                  {
                    paddingHorizontal: 10,
                    color: theme.txt,
                    // fontFamily: "Poppins-Regular",
                    height: 70,
                    flex: 1,
                  },
                ]}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Image
                source={theme.a21}
                resizeMode="stretch"
                style={{ height: height / 15, width: width / 4.5 }}
              ></Image>
              <Icon
                name="trash"
                size={20}
                color={theme.disable}
                style={{ marginLeft: 10 }}
              ></Icon>
            </View>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "a1" ? Colors.primary : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 10,
                  height: 70,
                },
              ]}
            >
              <TextInput
                placeholder="Enter here"
                onFocus={() => setIsFocused("a1")}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                multiline={true}
                textAlignVertical="top"
                placeholderTextColor={Colors.disable}
                style={[
                  style.r12,
                  {
                    paddingHorizontal: 10,
                    color: theme.txt,
                    // fontFamily: "Poppins-Regular",
                    height: 70,
                    flex: 1,
                  },
                ]}
              />
            </View>

            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "Ingredients" ? Colors.primary : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 10,
                  flex: 1,
                  justifyContent: "center",
                  marginBottom: 20,
                },
              ]}
            >
              <Icons name="plus-box" size={20} color={theme.disable}></Icons>
              <Text
                style={[style.m12, { color: theme.disable, marginLeft: 10 }]}
              >
                Add more steps
              </Text>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
