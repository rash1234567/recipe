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

export default function LiveD() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
    <ImageBackground source={require('../../assets/image/a11.png')} resizeMode='stretch' style={{height:height/4.2}}>
        <StatusBar backgroundColor={'transparent'} translucent={true}></StatusBar>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                <Icon name='arrow-back' size={25} color={Colors.active} style={{marginTop:40,marginHorizontal:20}}></Icon>
            </TouchableOpacity>
            <Image source={require('../../assets/image/a12.png')} resizeMode='stretch' style={{height:height/4.2,width:width/2.5,alignSelf:'flex-end'}}></Image>
        </View>
    </ImageBackground>
    <View style={[style.main,{backgroundColor:theme.bg,marginTop:15}]}>
    <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={[style.r12,{color:theme.txt}]}>👩‍🍳  4 Recipes</Text>
            <Text style={[style.r12,{color:theme.txt}]}>7 more days</Text>
        </View>

        <View style={{backgroundColor:theme.input,height:8,borderRadius:10,marginVertical:15,flex:1}}>
            <View style={{backgroundColor:Colors.primary,height:8,borderRadius:10,width:width/5}}></View>
        </View>

        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/image/a13.png')} resizeMode='stretch' style={{height:height/25,width:width/7}}></Image>
            <Text style={[style.r12,{color:theme.disable,marginLeft:10}]}>8 participants</Text>
        </View>

        <Text style={[style.m16,{color:theme.txt,marginTop:15}]}>Description</Text>

        <Text style={[style.r12,{color:theme.disable,marginTop:10}]}>In this collaboration event, I as the organizer will present an event entitled vegetable salad. If you have an accurate recipe for this... <Text style={[style.s12,{color:Colors.primary}]}>Read more</Text></Text>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
            <Text style={[style.m16,{color:theme.txt}]}>Recipes</Text>
            <TouchableOpacity onPress={() => navigation.navigate('UploadR')} 
            style={{backgroundColor:Colors.primary,height:height/26,width:width/3.4,alignItems:'center',justifyContent:'center',borderRadius:20}}>
                <Text style={[style.m12,{color:Colors.secondary}]}>Upload recipe</Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
            <Image source={require('../../assets/image/a15.png')} resizeMode='stretch' style={{height:height/9.5,width:width/4}}></Image>
            <View style={{flex:1,marginLeft:10}}>
                <Text style={[style.m16,{color:theme.txt}]}>Mayo salad</Text>
                <Text style={[style.r12,{color:theme.disable}]}>15 min | 1 serve</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={require('../../assets/image/d7.png')} resizeMode='stretch' style={{height:height/28,width:width/13}}></Image>
                    <Text style={[style.m12,{color:Colors.primary,marginLeft:10}]}>Gabriel</Text>
                </View>
            </View>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',marginTop:15}}>
            <Image source={require('../../assets/image/a14.png')} resizeMode='stretch' style={{height:height/9.5,width:width/4}}></Image>
            <View style={{flex:1,marginLeft:10}}>
                <Text style={[style.m16,{color:theme.txt}]}>Salad with shrimp</Text>
                <Text style={[style.r12,{color:theme.disable}]}>35 min | 2 serve</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={require('../../assets/image/d8.png')} resizeMode='stretch' style={{height:height/28,width:width/13}}></Image>
                    <Text style={[style.m12,{color:Colors.primary,marginLeft:10}]}>Samantha</Text>
                </View>
            </View>
        </View>

    </ScrollView>
    </View>
    </SafeAreaView>
  )
}