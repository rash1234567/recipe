import { View, Text, SafeAreaView, StatusBar, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper';
import { Platform } from "react-native";

// const width = Dimensions.get("screen").width;
// const height = Dimensions.get("screen").height;

export default function Search2() {
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
            <TouchableOpacity onPress={() => navigation.navigate("SR")}>
              <Icon name="search" size={20} color={theme.txt} />
            </TouchableOpacity>
            <TextInput
              placeholder="Sushi"
              selectionColor={Colors.primary}
              placeholderTextColor={Colors.disable}
              style={[
                style.r12,
                { paddingHorizontal: 10, color: theme.txt, flex: 1 },
              ]}
            />
            <Icon name="close" size={20} color={theme.txt} />
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[style.m16, { color: theme.txt, marginTop: 20 }]}>
              Recipe
            </Text>

            <Text style={[style.r16, { color: theme.txt, marginTop: 15 }]}>
              Sush<Text style={{ color: theme.disable }}>i Maki</Text>
            </Text>
            <Text style={[style.r16, { color: theme.txt, marginTop: 10 }]}>
              Sush<Text style={{ color: theme.disable }}>i TeMaki</Text>
            </Text>
            <Text style={[style.r16, { color: theme.txt, marginTop: 10 }]}>
              Sush<Text style={{ color: theme.disable }}>i UraMaki</Text>
            </Text>
            <Text style={[style.r16, { color: theme.txt, marginTop: 10 }]}>
              Sush<Text style={{ color: theme.disable }}>i Nigiri</Text>
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={[style.m16, { color: theme.txt }]}>Profile</Text>
              <Text style={[style.r12, { color: theme.disable }]}>See all</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Profile")}
                >
                  <Avatar.Image
                    source={require("../../assets/image/s13.png")}
                    size={85}
                    style={{ backgroundColor: theme.bg, alignSelf: "center" }}
                  />
                </TouchableOpacity>
                <Text style={[style.r12, { color: theme.txt, marginTop: 10 }]}>
                  Sushi Lover
                </Text>
                <Text style={[style.r12, { color: theme.disable }]}>
                  24 recipes
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Profile")}
                >
                  <Avatar.Image
                    source={require("../../assets/image/s14.png")}
                    size={85}
                    style={{ backgroundColor: theme.bg, alignSelf: "center" }}
                  />
                </TouchableOpacity>
                <Text style={[style.r12, { color: theme.txt, marginTop: 10 }]}>
                  Sushi Boy
                </Text>
                <Text style={[style.r12, { color: theme.disable }]}>
                  24 recipes
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Profile")}
                >
                  <Avatar.Image
                    source={require("../../assets/image/s2.png")}
                    size={85}
                    style={{ backgroundColor: theme.bg, alignSelf: "center" }}
                  />
                </TouchableOpacity>
                <Text style={[style.r12, { color: theme.txt, marginTop: 10 }]}>
                  Sushi Heart
                </Text>
                <Text style={[style.r12, { color: theme.disable }]}>
                  8 recipes
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
