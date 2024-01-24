import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import React, { useContext } from "react";
import { Colors } from "../theme/color";
import style from "../theme/style";
import themeContext from "../theme/themeContex";
import Icon from "react-native-vector-icons/Ionicons";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Favourite() {
  const theme = useContext(themeContext);
  // const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <StatusBar
        translucent={false}
        backgroundColor={theme.bg}
        barStyle={theme.bar}
      />
      <View style={[style.main, { backgroundColor: theme.bg }]}>
        <Text style={[style.subtitle, { color: theme.txt, marginTop: 10 }]}>
          Saved 😍
        </Text>

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
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
            <Text style={[style.s12, { color: theme.txt }]}>
              by <Text style={{ color: Colors.primary }}>Tania Adams</Text>
            </Text>
          </View>
          <Icon name="bookmark" color={Colors.primary} size={25} />
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
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
            <Text style={[style.s12, { color: theme.txt }]}>
              by <Text style={{ color: Colors.primary }}>Tania Adams</Text>
            </Text>
          </View>
          <Icon name="bookmark" color={Colors.primary} size={25} />
        </View>
      </View>
    </SafeAreaView>
  );
}
