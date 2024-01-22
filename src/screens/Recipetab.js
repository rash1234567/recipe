import { View, Text, SafeAreaView, TextInput, Dimensions, ImageBackground,StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import TopNavigator from '../navigator/TopNavigator';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Recipetab() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
    <StatusBar backgroundColor={theme.bg} translucent={false} />
    <View style={[style.main,{backgroundColor:theme.bg}]}>
        <Text style={[style.title,{color:theme.txt}]}>Recipes👩‍🍳</Text>

        <TopNavigator></TopNavigator>
    </View>
    </SafeAreaView>
  )
}