import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React, { useContext } from "react";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
// import { useNavigation } from "@react-navigation/native";
import TopNavigator from "../navigator/TopNavigator";

// const width = Dimensions.get("screen").width;
// const height = Dimensions.get("screen").height;

export default function Recipetab() {
  const theme = useContext(themeContext);
  // const navigation = useNavigation();

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <StatusBar backgroundColor={theme.bg} translucent={false} />
      <View style={[style.main, { backgroundColor: theme.bg }]}>
        <Text style={[style.title, { color: theme.txt }]}>Recipes👩‍🍳</Text>

        <TopNavigator />
      </View>
    </SafeAreaView>
  );
}
