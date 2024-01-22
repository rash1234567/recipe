import { View, Text, SafeAreaView, TextInput, Dimensions, ImageBackground,StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Orboard() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();

  return (
    <SafeAreaView style={[style.area, { backgroundColor: Colors.active, }]}>
        <ImageBackground  source={require('../../assets/image/bor.png')} style={{flex:1}}>
            <StatusBar backgroundColor={'transparent'} translucent={true}></StatusBar>
            <View style={{flex:1,marginHorizontal:20,justifyContent:'flex-end',}}>
                <Text style={[style.s28,{color:Colors.secondary,textAlign:'center'}]}>Cooking with great experiences</Text>
                <Text style={[style.r16,{color:Colors.disable,textAlign:'center'}]}>The best experience is given based on the ingredients you have at home</Text>
                <View style={{ marginVertical: 20 }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Signup')}
                        style={style.btn}>
                        <Text style={style.btntxt}>Register</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <Text style={[style.r16,{color:Colors.secondary,textAlign:'center',marginBottom:40}]}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </SafeAreaView>
  )
}