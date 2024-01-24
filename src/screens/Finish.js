import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useContext } from "react";
import style from "../theme/style";
import themeContext from "../theme/themeContex";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Finish() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <View style={{ flex: 2 }}>
        <Image
          source={require("../../assets/image/s6.png")}
          style={{ height: height / 1.8, width, resizeMode: "stretch" }}
        />
      </View>
      <View
        style={{ flex: 1, paddingHorizontal: 20, justifyContent: "flex-end" }}
      >
        <Text style={[style.title, { color: theme.txt, textAlign: "center" }]}>
          Horay! 🎉
        </Text>
        <Text
          style={[
            style.r16,
            {
              color: theme.disable,
              textAlign: "center",
              marginTop: 20,
              marginBottom: 30,
            },
          ]}
        >
          All steps have been completed, enjoy your meal!
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("MyTabs")}
          style={[style.btn, { marginVertical: 20 }]}
        >
          <Text style={style.btntxt}>Completed</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
