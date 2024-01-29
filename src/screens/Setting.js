import { View, Text, SafeAreaView, StatusBar, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper'
import Icon1 from 'react-native-vector-icons/MaterialIcons';

// const width = Dimensions.get("screen").width;
// const height = Dimensions.get("screen").height;

export default function Setting() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <StatusBar translucent={false} backgroundColor={theme.bg} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <AppBar
          color={theme.bg}
          title="Settings"
          titleStyle={[style.r16, { color: theme.txt }]}
          centerTitle
          style={{ marginHorizontal: 20 }}
          elevation={0}
          leading={
            <TouchableOpacity onPress={() => navigation.navigate("MyTabs")}>
              <Icon name="arrow-back" color={theme.txt} size={25} />
            </TouchableOpacity>
          }
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingVertical: 7,
              backgroundColor: "#75757510",
              paddingHorizontal: 20,
            }}
          >
            <Text style={[style.r16, { color: theme.disable }]}>Profile</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Account")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 15,
              paddingHorizontal: 20,
            }}
          >
            <Avatar.Image
              source={require("../../assets/image/s16.png")}
              size={80}
              style={{ backgroundColor: theme.bg }}
            />
            <View style={{ marginLeft: 10, flex: 1 }}>
              <Text style={[style.subtitle, { color: theme.txt }]}>
                Laura Harper
              </Text>
              <Text style={[style.r16, { color: theme.disable }]}>
                @lauraharper
              </Text>
            </View>
            <Icon name="chevron-forward" color={theme.disable} size={25} />
          </TouchableOpacity>

          <View
            style={{
              paddingVertical: 7,
              backgroundColor: "#75757510",
              paddingHorizontal: 20,
            }}
          >
            <Text style={[style.r16, { color: theme.disable }]}>Settings</Text>
          </View>

          <View style={{ marginHorizontal: 20 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification1")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Icons name="bell" color="#B1B1B1" size={25} />
              <Text
                style={[
                  style.r16,
                  { color: theme.txt, marginLeft: 15, flex: 1 },
                ]}
              >
                Notifications
              </Text>
              <Icon name="chevron-forward" color={theme.disable} size={25} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Language")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Icon1 name="language" color="#B1B1B1" size={25} />
              <Text
                style={[
                  style.r16,
                  { color: theme.txt, marginLeft: 15, flex: 1 },
                ]}
              >
                Language
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={[style.r12, { color: theme.disable, marginRight: 10 }]}
                >
                  English
                </Text>
                <Icon name="chevron-forward" color={theme.disable} size={25} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Theme")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Icon name="moon" color="#B1B1B1" size={25} />
              <Text
                style={[
                  style.r16,
                  { color: theme.txt, marginLeft: 15, flex: 1 },
                ]}
              >
                Theme
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={[style.r12, { color: theme.disable, marginRight: 10 }]}
                >
                  light
                </Text>
                <Icon name="chevron-forward" color={theme.disable} size={25} />
              </View>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Icons name="help-circle" color="#B1B1B1" size={25} />
              <Text
                style={[
                  style.r16,
                  { color: theme.txt, marginLeft: 15, flex: 1 },
                ]}
              >
                Help
              </Text>
              <Icon name="chevron-forward" color={theme.disable} size={25} />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Icon1 name="logout" color="#E23D24" size={25} />
              <Text
                style={[
                  style.r16,
                  { color: "#E23D24", marginLeft: 15, flex: 1 },
                ]}
              >
                Log out
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
