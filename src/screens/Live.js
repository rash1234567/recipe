import { View, Text, SafeAreaView, TextInput, Dimensions, ImageBackground,StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Live() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
    <View style={[style.main,{backgroundColor:theme.bg}]}>
        <Text style={[style.apptitle,{color:theme.txt,marginTop:10,marginBottom:20}]}>Collaboration</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity onPress={() => navigation.navigate('LiveD')}>
                <Image source={require('../../assets/image/a4.png')} resizeMode='stretch' style={{height:height/5.8,width:width-40}}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LiveD')}>
                <Image source={require('../../assets/image/a8.png')} resizeMode='stretch' style={{height:height/5.8,width:width-40,marginTop:15}}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LiveD')}>
                <Image source={require('../../assets/image/a9.png')} resizeMode='stretch' style={{height:height/5.8,width:width-40,marginTop:15}}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LiveD')}>
                <Image source={require('../../assets/image/a10.png')} resizeMode='stretch' style={{height:height/5.8,width:width-40,marginTop:15,marginBottom:80}}></Image>
            </TouchableOpacity>
        </ScrollView>
    </View>
    </SafeAreaView>
  )
}