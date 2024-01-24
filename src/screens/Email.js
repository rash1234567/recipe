import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";

// const width = Dimensions.get("screen").width;
// const height = Dimensions.get("screen").height;

export default function Email() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <StatusBar translucent={false} backgroundColor={theme.bg} />
      <View style={[style.main, { backgroundColor: theme.bg }]}>
        <AppBar
          color={theme.bg}
          title="Forgot password"
          titleStyle={[style.r16, { color: theme.txt }]}
          centerTitle
          elevation={0}
          leading={
            <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
              <Icon name="arrow-back" color={theme.txt} size={25} />
            </TouchableOpacity>
          }
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 10 }}
        >
          <Text style={[style.title, { color: theme.txt }]}>Email Sent</Text>
          <Text style={[style.r14, { color: theme.disable }]}>
            not receiving email? check on promotion page, spam.{" "}
            <Text style={{ color: Colors.primary }}>Having problem?</Text>
          </Text>

          <View style={{ marginVertical: 20 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ResetPass")}
              style={style.btn}
            >
              <Text style={style.btntxt}>Resend</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
