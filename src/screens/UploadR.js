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

export default function UploadR() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
    <StatusBar translucent={false} backgroundColor={theme.bg}></StatusBar>
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
    <View style={[style.main,{backgroundColor:theme.bg,marginTop:5}]}>
        <AppBar
            color={theme.bg}
            title='Upload recipe'
            titleStyle={[style.r16, { color: theme.txt, }]}
            // centerTitle={true}
            elevation={0}
            // style={{marginHorizontal:20}}
            leading={<TouchableOpacity onPress={() => navigation.navigate('LiveD')}>
                <Icon name="arrow-back" color={theme.txt} size={25} />
            </TouchableOpacity>
            }
            trailing={<TouchableOpacity >
                <View style={{backgroundColor:Colors.primary,height:height/26,width:width/3.8,alignItems:'center',justifyContent:'center',borderRadius:20,}}>
                    <Text style={[style.m12,{color:Colors.secondary}]}>Write recipe</Text>
            </View>
            </TouchableOpacity>
            }
        />
    <ScrollView showsVerticalScrollIndicator={false}>

        <ImageBackground source={require('../../assets/image/a5.png')} resizeMode='stretch' style={{height:height/4.4,width:width-40,marginTop:10}}>
            <View style={{backgroundColor:'#FFFFFF50',borderRadius:25,height:height/30,width:width/6,margin:20,alignItems:'center',justifyContent:'center'}}>
                <Text style={[style.m12,{color:Colors.secondary}]}>Pasta</Text>
            </View>
            <View style={{flex:1,justifyContent:'flex-end',marginVertical:15,marginHorizontal:20}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <View >
                        <Text style={[style.subtitle,{color:Colors.secondary}]}>Seafood Pasta</Text>
                        <Text style={[style.r12,{color:Colors.secondary}]}>35 min | 2 serve</Text>
                    </View>
                    <View style={{backgroundColor:'#FFFFFF50',borderRadius:10,height:height/25,width:width/10,alignItems:'center',justifyContent:'center'}}>
                        <Icon name='bookmark-outline' size={20} color={Colors.secondary}></Icon>
                    </View>
                </View>
            </View>
        </ImageBackground>

        <ImageBackground source={require('../../assets/image/a6.png')} resizeMode='stretch' style={{height:height/4.4,width:width-40,marginTop:15}}>
            <View style={{backgroundColor:'#FFFFFF50',borderRadius:25,height:height/30,width:width/6,margin:20,alignItems:'center',justifyContent:'center'}}>
                <Text style={[style.m12,{color:Colors.secondary}]}>Pasta</Text>
            </View>
            <View style={{flex:1,justifyContent:'flex-end',marginVertical:15,marginHorizontal:20}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <View >
                        <Text style={[style.subtitle,{color:Colors.secondary}]}>Vegetable pasta</Text>
                        <Text style={[style.r12,{color:Colors.secondary}]}>35 min | 2 serve</Text>
                    </View>
                    <View style={{backgroundColor:'#FFFFFF50',borderRadius:10,height:height/25,width:width/10,alignItems:'center',justifyContent:'center'}}>
                        <Icon name='bookmark-outline' size={20} color={Colors.secondary}></Icon>
                    </View>
                </View>
            </View>
        </ImageBackground>

        <ImageBackground source={require('../../assets/image/a7.png')} resizeMode='stretch' style={{height:height/4.4,width:width-40,marginTop:15,marginBottom:80}}>
            <View style={{backgroundColor:'#FFFFFF50',borderRadius:25,height:height/30,width:width/6,margin:20,alignItems:'center',justifyContent:'center'}}>
                <Text style={[style.m12,{color:Colors.secondary}]}>Sushi</Text>
            </View>
            <View style={{flex:1,justifyContent:'flex-end',marginVertical:15,marginHorizontal:20}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <View >
                        <Text style={[style.subtitle,{color:Colors.secondary}]}>Sushi</Text>
                        <Text style={[style.r12,{color:Colors.secondary}]}>35 min | 2 serve</Text>
                    </View>
                    <View style={{backgroundColor:'#FFFFFF50',borderRadius:10,height:height/25,width:width/10,alignItems:'center',justifyContent:'center'}}>
                        <Icon name='bookmark-outline' size={20} color={Colors.secondary}></Icon>
                    </View>
                </View>
            </View>
        </ImageBackground>

    </ScrollView>
    </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}