import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import React, { useContext } from "react";
import { Colors } from "../theme/color";
import style from "../theme/style";
import themeContext from "../theme/themeContex";
import { useNavigation } from "@react-navigation/native";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Profile() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <StatusBar backgroundColor="transparent" translucent />
      <ImageBackground
        source={require("../../assets/image/s1.png")}
        resizeMode="stretch"
        style={{ height: height / 3.5 }}
      >
        <AppBar
          elevation={0}
          style={{
            paddingHorizontal: 20,
            paddingTop: 15,
            backgroundColor: "transparent",
          }}
          leading={
            <TouchableOpacity onPress={() => navigation.navigate("Search2")}>
              <Icon name="arrow-back" color={Colors.secondary} size={25} />
            </TouchableOpacity>
          }
          trailing={
            <Icon name="share-social" color={Colors.secondary} size={25} />
          }
        />
      </ImageBackground>

      <View
        style={{
          backgroundColor: theme.bg,
          flex: 1,
          marginTop: -50,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 20,
        }}
      >
        <Avatar.Image
          source={require("../../assets/image/s2.png")}
          size={80}
          style={{
            backgroundColor: theme.bg,
            alignSelf: "center",
            marginTop: -40,
          }}
        />

        <Text
          style={[
            style.s16,
            { color: theme.txt, marginTop: 10, textAlign: "center" },
          ]}
        >
          Tania Adams
        </Text>
        <Text
          style={[style.r12, { color: theme.disable, textAlign: "center" }]}
        >
          @taniaadams
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={[style.s16, { color: theme.txt }]}>5.8K</Text>
              <Text style={[style.r12, { color: theme.disable, marginTop: 5 }]}>
                Followers
              </Text>
            </View>
            <View
              style={[
                style.verticaldivider,
                { backgroundColor: theme.disable, height: "100%" },
              ]}
            />
            <View style={{ alignItems: "center" }}>
              <Text style={[style.s16, { color: theme.txt }]}>5.8K</Text>
              <Text style={[style.r12, { color: theme.disable, marginTop: 5 }]}>
                Following
              </Text>
            </View>
            <View
              style={[
                style.verticaldivider,
                { backgroundColor: theme.disable, height: "100%" },
              ]}
            />
            <View style={{ alignItems: "center" }}>
              <Text style={[style.s16, { color: theme.txt }]}>12</Text>
              <Text style={[style.r12, { color: theme.disable, marginTop: 5 }]}>
                Recipes
              </Text>
            </View>
          </View>

          <TouchableOpacity style={[style.btn, { marginTop: 20 }]}>
            <Text style={style.btntxt}>Follow</Text>
          </TouchableOpacity>

          <Text style={[style.m16, { color: theme.txt, marginTop: 20 }]}>
            The Recipe
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Image
              source={require("../../assets/image/s3.png")}
              style={{
                height: height / 9,
                width: width / 4,
                resizeMode: "stretch",
              }}
            />
            <View style={{ marginLeft: 10, flex: 1 }}>
              <Text style={[style.m16, { color: theme.txt }]}>Fish Burger</Text>
              <Text
                style={[style.r12, { color: theme.disable, marginVertical: 7 }]}
              >
                20 min | 1 serve
              </Text>
              <Text style={[style.r12, { color: theme.disable }]}>
                25 December 2021
              </Text>
            </View>
            <Icon name="bookmark" color={Colors.primary} size={25} />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Image
              source={require("../../assets/image/s4.png")}
              style={{
                height: height / 9,
                width: width / 4,
                resizeMode: "stretch",
              }}
            />
            <View style={{ marginLeft: 10, flex: 1 }}>
              <Text style={[style.m16, { color: theme.txt }]}>
                Blueberry toast
              </Text>
              <Text
                style={[style.r12, { color: theme.disable, marginVertical: 7 }]}
              >
                15 min | 2 serve
              </Text>
              <Text style={[style.r12, { color: theme.disable }]}>
                10 December 2021
              </Text>
            </View>
            <Icon name="bookmark" color={Colors.primary} size={25} />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <Image
              source={require("../../assets/image/s5.png")}
              style={{
                height: height / 9,
                width: width / 4,
                resizeMode: "stretch",
              }}
            />
            <View style={{ marginLeft: 10, flex: 1 }}>
              <Text style={[style.m16, { color: theme.txt }]}>
                Sandwich with egg
              </Text>
              <Text
                style={[style.r12, { color: theme.disable, marginVertical: 7 }]}
              >
                20 min | 1 serve
              </Text>
              <Text style={[style.r12, { color: theme.disable }]}>
                29 December 2021
              </Text>
            </View>
            <Icon name="bookmark-outline" color={theme.disable} size={25} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
