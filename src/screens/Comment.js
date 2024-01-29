import { View, Text, SafeAreaView, StatusBar, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import { Platform } from "react-native";

// const width = Dimensions.get("screen").width;
// const height = Dimensions.get("screen").height;

export default function Comment() {
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
            title="Comments"
            titleStyle={[style.r16, { color: theme.txt }]}
            centerTitle
            elevation={0}
            leading={
              <TouchableOpacity
                onPress={() => navigation.navigate("Notification1")}
              >
                <Icon name="arrow-back" color={theme.txt} size={25} />
              </TouchableOpacity>
            }
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
              }}
            >
              <Avatar.Image
                source={require("../../assets/image/s22.png")}
                size={42}
                style={{ backgroundColor: theme.bg, alignSelf: "center" }}
              />
              <View style={{ marginLeft: 10, flex: 1 }}>
                <Text style={[style.m12, { color: theme.txt }]}>
                  Aini Febiya
                </Text>
                <Text style={[style.r12, { color: theme.disable }]}>
                  2 days ago
                </Text>
              </View>
              <Icon name="ellipsis-vertical" color={theme.txt} size={24} />
            </View>
            <Text
              style={[
                style.r12,
                { color: theme.disable, marginTop: 10, marginLeft: 52 },
              ]}
            >
              This is great!! thank you so much
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
                marginLeft: 52,
              }}
            >
              <Icon
                name="chatbox-ellipses-outline"
                color={theme.disable}
                size={24}
              />
              <Text
                style={[style.r12, { color: theme.disable, marginLeft: 8 }]}
              >
                Reply
              </Text>
            </View>

            <View
              style={[
                style.divider,
                { backgroundColor: Colors.border, marginTop: 15 },
              ]}
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
              }}
            >
              <Avatar.Image
                source={require("../../assets/image/s23.png")}
                size={42}
                style={{ backgroundColor: theme.bg, alignSelf: "center" }}
              />
              <View style={{ marginLeft: 10, flex: 1 }}>
                <Text style={[style.m12, { color: theme.txt }]}>Melina</Text>
                <Text style={[style.r12, { color: theme.disable }]}>
                  3 days ago
                </Text>
              </View>
              <Icon name="ellipsis-vertical" color={theme.txt} size={24} />
            </View>
            <Text
              style={[
                style.r12,
                { color: theme.disable, marginTop: 10, marginLeft: 52 },
              ]}
            >
              I added a little flavoring and it tastes really good, you should
              try it
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
                marginLeft: 52,
              }}
            >
              <Icon
                name="chatbox-ellipses-outline"
                color={theme.disable}
                size={24}
              />
              <Text
                style={[style.r12, { color: theme.disable, marginLeft: 8 }]}
              >
                Reply
              </Text>
            </View>

            <View
              style={[
                style.divider,
                { backgroundColor: Colors.border, marginTop: 15 },
              ]}
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
              }}
            >
              <Avatar.Image
                source={require("../../assets/image/s24.png")}
                size={42}
                style={{ backgroundColor: theme.bg, alignSelf: "center" }}
              />
              <View style={{ marginLeft: 10, flex: 1 }}>
                <Text style={[style.m12, { color: theme.txt }]}>Jason</Text>
                <Text style={[style.r12, { color: theme.disable }]}>
                  4 days ago
                </Text>
              </View>
              <Icon name="ellipsis-vertical" color={theme.txt} size={24} />
            </View>
            <Text
              style={[
                style.r12,
                { color: theme.disable, marginTop: 10, marginLeft: 52 },
              ]}
            >
              This recipe is very delicious, with ingredients that are easy to
              get, I think anyone can make itThis recipe is very delicious, with
              ingredients that are easy to get, I think anyone can make it
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
                marginLeft: 52,
              }}
            >
              <Icon
                name="chatbox-ellipses-outline"
                color={theme.disable}
                size={24}
              />
              <Text
                style={[style.r12, { color: theme.disable, marginLeft: 8 }]}
              >
                Reply
              </Text>
            </View>

            <View
              style={[
                style.divider,
                {
                  backgroundColor: Colors.border,
                  marginTop: 15,
                  marginBottom: 20,
                },
              ]}
            />
          </ScrollView>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <Avatar.Image
              source={require("../../assets/image/s16.png")}
              size={42}
              style={{ backgroundColor: theme.bg }}
            />
            <View
              style={[
                style.inputContainer,
                {
                  borderColor: theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginHorizontal: 10,
                  flex: 1,
                },
              ]}
            >
              <TextInput
                placeholder="Type your comment"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  style.r12,
                  { paddingHorizontal: 10, color: theme.txt, flex: 1 },
                ]}
              />
            </View>
            <Avatar.Image
              source={require("../../assets/image/s25.png")}
              size={42}
              style={{ backgroundColor: theme.bg }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
