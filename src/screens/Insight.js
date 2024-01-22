import { View, Text, SafeAreaView, StatusBar, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper';
import { Platform } from "react-native";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Insight() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <StatusBar backgroundColor={theme.bg} translucent={false} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg, }]}>
                    <AppBar
                        color={theme.bg}
                        title='Insights'
                        titleStyle={[style.r16, { color: theme.txt, }]}
                        centerTitle={true}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                            <Icon name="arrow-back" color={theme.txt} size={25} />
                        </TouchableOpacity>
                        }
                    />
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                            <View style={{ paddingHorizontal: 10, paddingVertical: 5, borderColor: '#75757550', borderWidth: 1, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={[style.r12, { color: theme.txt, marginRight: 10 }]}>Last 7 Days</Text>
                                <Icon name="chevron-down" color={theme.disable} size={20} />
                            </View>
                            <Text style={[style.r12, { color: theme.txt }]}>23 Jan - 29 Jan 2021</Text>
                        </View>

                        <Text style={[style.m16, { color: theme.txt, marginTop: 30 }]}>Account Insights</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Text style={[style.r12, { color: theme.txt, flex: 1 }]}>Visitor</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ marginRight: 10, alignItems: 'flex-end' }}>
                                    <Text style={[style.r12, { color: theme.txt, }]}>109</Text>
                                    <Text style={[style.m12, { color: Colors.primary, }]}>+ 200%</Text>
                                </View>
                                <Icon name="chevron-forward" color={theme.disable} size={24} />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Text style={[style.r12, { color: theme.txt, flex: 1 }]}>Interaction</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ marginRight: 10, alignItems: 'flex-end' }}>
                                    <Text style={[style.r12, { color: theme.txt, }]}>109</Text>
                                    <Text style={[style.m12, { color: Colors.primary, }]}>+ 200%</Text>
                                </View>
                                <Icon name="chevron-forward" color={theme.disable} size={24} />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Text style={[style.r12, { color: theme.txt, flex: 1 }]}>Total Followers</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ marginRight: 10, alignItems: 'flex-end' }}>
                                    <Text style={[style.r12, { color: theme.txt, }]}>5.8K</Text>
                                    <Text style={[style.m12, { color: Colors.primary, }]}>+ 98%</Text>
                                </View>
                                <Icon name="chevron-forward" color={theme.disable} size={24} />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Text style={[style.m16, { color: theme.txt, }]}>My popular recipes</Text>
                            <Avatar.Image source={require('../../assets/image/s19.png')} size={24} style={{ backgroundColor: theme.bg, alignSelf: 'center', marginLeft: 10 }} />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20,justifyContent:'space-between' }}>
                            <View>
                                <Image source={require('../../assets/image/s18.png')} style={{ height: height / 8.5, width: width / 3.8, resizeMode: 'stretch' }} />
                                <Avatar.Image source={require('../../assets/image/s20.png')} size={24} style={{ backgroundColor: theme.bg, alignSelf: 'center', position:'absolute',right:-8,top:-8 }} />
                                <Text style={[style.m12, { color: theme.txt, marginTop:8}]}>Beef Ramen</Text>
                                <Text style={[style.r12, { color: theme.disable }]}>520K views</Text>
                            </View>
                            <View>
                                <Image source={require('../../assets/image/s17.png')} style={{ height: height / 8.5, width: width / 3.8, resizeMode: 'stretch' }} />
                                <Text style={[style.m12, { color: theme.txt, marginTop:8}]}>Curry salmon... </Text>
                                <Text style={[style.r12, { color: theme.disable }]}>245K views</Text>
                            </View>
                            <View>
                                <Image source={require('../../assets/image/s18.png')} style={{ height: height / 8.5, width: width / 3.8, resizeMode: 'stretch' }} />
                                <Text style={[style.m12, { color: theme.txt, marginTop:8}]}>Cereal with sa...</Text>
                                <Text style={[style.r12, { color: theme.disable }]}>200K views</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}