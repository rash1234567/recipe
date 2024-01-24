import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
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

export default function SR() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View
          style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}
        >
          <AppBar
            color={theme.bg}
            title="Search"
            titleStyle={[style.r16, { color: theme.txt }]}
            centerTitle
            elevation={0}
            leading={
              <TouchableOpacity onPress={() => navigation.navigate("Search2")}>
                <Icon name="arrow-back" color={theme.txt} size={25} />
              </TouchableOpacity>
            }
          />

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
            <Icon name="search" size={20} color={theme.txt} />
            <TextInput
              placeholder="Sushi"
              selectionColor={Colors.primary}
              placeholderTextColor={Colors.disable}
              style={[
                style.r12,
                { paddingHorizontal: 10, color: theme.txt, flex: 1 },
              ]}
            />
          </View>
          <Text style={[style.r14, { color: Colors.primary, marginTop: 10 }]}>
            1285 <Text style={{ color: theme.disable }}>Results</Text>
          </Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity onPress={() => navigation.navigate("Recipe")}>
              <ImageBackground
                source={require("../../assets/image/s10.png")}
                resizeMode="stretch"
                style={{
                  height: height / 4,
                  width: width - 40,
                  alignSelf: "center",
                  marginTop: 15,
                }}
              >
                <View
                  style={{ flex: 1, padding: 15, alignItems: "flex-start" }}
                >
                  <View
                    style={{
                      paddingHorizontal: 18,
                      paddingVertical: 8,
                      backgroundColor: "#FFFFFF30",
                      borderRadius: 25,
                    }}
                  >
                    <Text style={[style.m12, { color: Colors.secondary }]}>
                      Sushi
                    </Text>
                  </View>
                </View>
                <View
                  style={{ flex: 1, justifyContent: "flex-end", padding: 15 }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ flex: 1 }}>
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
                        height: 42,
                        width: 42,
                        borderRadius: 10,
                        backgroundColor: "#FFFFFF30",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        name="bookmark-outline"
                        color={Colors.secondary}
                        size={20}
                      />
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Recipe")}>
              <ImageBackground
                source={require("../../assets/image/s11.png")}
                resizeMode="stretch"
                style={{
                  height: height / 4,
                  width: width - 40,
                  alignSelf: "center",
                  marginTop: 15,
                }}
              >
                <View
                  style={{ flex: 1, padding: 15, alignItems: "flex-start" }}
                >
                  <View
                    style={{
                      paddingHorizontal: 18,
                      paddingVertical: 8,
                      backgroundColor: "#FFFFFF30",
                      borderRadius: 25,
                    }}
                  >
                    <Text style={[style.m12, { color: Colors.secondary }]}>
                      Sushi
                    </Text>
                  </View>
                </View>
                <View
                  style={{ flex: 1, justifyContent: "flex-end", padding: 15 }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ flex: 1 }}>
                      <Text
                        style={[style.subtitle, { color: Colors.secondary }]}
                      >
                        Salmon Sushi
                      </Text>
                      <Text style={[style.r12, { color: Colors.secondary }]}>
                        35 min | 2 serve
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 42,
                        width: 42,
                        borderRadius: 10,
                        backgroundColor: "#FFFFFF30",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        name="bookmark-outline"
                        color={Colors.secondary}
                        size={20}
                      />
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Recipe")}>
              <ImageBackground
                source={require("../../assets/image/s12.png")}
                resizeMode="stretch"
                style={{
                  height: height / 4,
                  width: width - 40,
                  alignSelf: "center",
                  marginTop: 15,
                  marginBottom: 20,
                }}
              >
                <View
                  style={{ flex: 1, padding: 15, alignItems: "flex-start" }}
                >
                  <View
                    style={{
                      paddingHorizontal: 18,
                      paddingVertical: 8,
                      backgroundColor: "#FFFFFF30",
                      borderRadius: 25,
                    }}
                  >
                    <Text style={[style.m12, { color: Colors.secondary }]}>
                      Sushi
                    </Text>
                  </View>
                </View>
                <View
                  style={{ flex: 1, justifyContent: "flex-end", padding: 15 }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ flex: 1 }}>
                      <Text
                        style={[style.subtitle, { color: Colors.secondary }]}
                      >
                        Sushi Plate
                      </Text>
                      <Text style={[style.r12, { color: Colors.secondary }]}>
                        35 min | 2 serve
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 42,
                        width: 42,
                        borderRadius: 10,
                        backgroundColor: "#FFFFFF30",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        name="bookmark-outline"
                        color={Colors.secondary}
                        size={20}
                      />
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
