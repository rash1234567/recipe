import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Live() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <View style={[style.main, { backgroundColor: theme.bg }]}>
        <Text
          style={[
            style.apptitle,
            { color: theme.txt, marginTop: 10, marginBottom: 20 },
          ]}
        >
          Collaboration
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={() => navigation.navigate("LiveD")}>
            <Image
              source={require("../../assets/image/a4.png")}
              resizeMode="stretch"
              style={{ height: height / 5.8, width: width - 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("LiveD")}>
            <Image
              source={require("../../assets/image/a8.png")}
              resizeMode="stretch"
              style={{ height: height / 5.8, width: width - 40, marginTop: 15 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("LiveD")}>
            <Image
              source={require("../../assets/image/a9.png")}
              resizeMode="stretch"
              style={{ height: height / 5.8, width: width - 40, marginTop: 15 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("LiveD")}>
            <Image
              source={require("../../assets/image/a10.png")}
              resizeMode="stretch"
              style={{
                height: height / 5.8,
                width: width - 40,
                marginTop: 15,
                marginBottom: 80,
              }}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
