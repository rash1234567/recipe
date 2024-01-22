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
import { Platform } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Home() {
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={[style.r16, { color: theme.txt }]}>
              Hello,
              <Text style={[style.m16, { color: theme.txt }]}> Laura 🖐️</Text>
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
            >
              <Image
                source={require("../../assets/image/a3.png")}
                resizeMode="stretch"
                style={{ height: height / 32, width: width / 17 }}
              ></Image>
            </TouchableOpacity>
          </View>

          <View
            style={[
              style.inputContainer,
              {
                borderColor:
                  isFocused === "Type to find recipes.."
                    ? Colors.primary
                    : theme.input,
                borderWidth: 1,
                backgroundColor: theme.input,
                marginTop: 15,
              },
            ]}
          >
            <TouchableOpacity onPress={() => navigation.navigate("ScreenS")}>
              <Icon name="search" size={20} color={theme.disable}></Icon>
            </TouchableOpacity>
            <TextInput
              placeholder="Type to find recipes.."
              onFocus={() => setIsFocused("Type to find recipes..")}
              onBlur={() => setIsFocused(false)}
              selectionColor={Colors.primary}
              placeholderTextColor={Colors.disable}
              style={[
                {
                  paddingHorizontal: 10,
                  color: theme.txt,
                //   fontFamily: "Urbanist-Regular",
                  flex: 1,
                },
              ]}
            />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 20 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={[style.m16, { color: theme.txt }]}>
                Collaboration
              </Text>
              <TouchableOpacity>
                <Text style={[style.r12, { color: theme.disable }]}>
                  See all
                </Text>
              </TouchableOpacity>
            </View>

            <Image
              source={require("../../assets/image/a4.png")}
              resizeMode="stretch"
              style={{ height: height / 5.5, width: width - 40, marginTop: 10 }}
            ></Image>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text style={[style.m16, { color: theme.txt, marginTop: 20 }]}>
                Following
              </Text>
              <Text style={[style.r12, { color: theme.disable }]}>See all</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Recipe")}>
              <ImageBackground
                source={require("../../assets/image/a5.png")}
                resizeMode="stretch"
                style={{
                  height: height / 4.4,
                  width: width - 40,
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#FFFFFF50",
                    borderRadius: 25,
                    height: height / 30,
                    width: width / 6,
                    margin: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={[style.m12, { color: Colors.secondary }]}>
                    Pasta
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    marginVertical: 15,
                    marginHorizontal: 20,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text
                        style={[style.subtitle, { color: Colors.secondary }]}
                      >
                        Seafood Pasta
                      </Text>
                      <Text style={[style.r12, { color: Colors.secondary }]}>
                        35 min | 2 serve
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: "#FFFFFF50",
                        borderRadius: 10,
                        height: height / 25,
                        width: width / 10,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        name="bookmark-outline"
                        size={20}
                        color={Colors.secondary}
                      ></Icon>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Recipe")}>
              <ImageBackground
                source={require("../../assets/image/a6.png")}
                resizeMode="stretch"
                style={{
                  height: height / 4.4,
                  width: width - 40,
                  marginTop: 15,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#FFFFFF50",
                    borderRadius: 25,
                    height: height / 30,
                    width: width / 6,
                    margin: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={[style.m12, { color: Colors.secondary }]}>
                    Pasta
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    marginVertical: 15,
                    marginHorizontal: 20,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text
                        style={[style.subtitle, { color: Colors.secondary }]}
                      >
                        Vegetable pasta
                      </Text>
                      <Text style={[style.r12, { color: Colors.secondary }]}>
                        35 min | 2 serve
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: "#FFFFFF50",
                        borderRadius: 10,
                        height: height / 25,
                        width: width / 10,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        name="bookmark-outline"
                        size={20}
                        color={Colors.secondary}
                      ></Icon>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Recipe")}>
              <ImageBackground
                source={require("../../assets/image/a7.png")}
                resizeMode="stretch"
                style={{
                  height: height / 4.4,
                  width: width - 40,
                  marginTop: 15,
                  marginBottom: 80,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#FFFFFF50",
                    borderRadius: 25,
                    height: height / 30,
                    width: width / 6,
                    margin: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={[style.m12, { color: Colors.secondary }]}>
                    Sushi
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    marginVertical: 15,
                    marginHorizontal: 20,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text
                        style={[style.subtitle, { color: Colors.secondary }]}
                      >
                        Sushi
                      </Text>
                      <Text style={[style.r12, { color: Colors.secondary }]}>
                        35 min | 2 serve
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: "#FFFFFF50",
                        borderRadius: 10,
                        height: height / 25,
                        width: width / 10,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        name="bookmark-outline"
                        size={20}
                        color={Colors.secondary}
                      ></Icon>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
