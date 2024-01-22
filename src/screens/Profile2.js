import { View, Text, SafeAreaView, StatusBar, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper'
import Icon1 from 'react-native-vector-icons/Feather';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Profile2() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <StatusBar backgroundColor={"transparent"} translucent={true} />
            <ImageBackground source={require('../../assets/image/s15.png')} resizeMode='stretch' style={{ height: height / 3.5, }} >
                <AppBar
                    elevation={0}
                    style={{ paddingHorizontal: 20, paddingTop: 15, backgroundColor: 'transparent' }}
                    leading={<Text></Text>}
                    trailing={<HStack>
                        <TouchableOpacity onPress={() => navigation.navigate('Insight')}>
                        <Icon1 name="bar-chart-2" color={Colors.secondary} size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                        <Icon name="settings-sharp" color={Colors.secondary} size={25} style={{ marginLeft: 10 }} />
                        </TouchableOpacity>
                    </HStack>}
                />
            </ImageBackground>

            <View style={{ backgroundColor: theme.bg, flex: 1, marginTop: -60, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 20 }}>
                <Avatar.Image source={require('../../assets/image/s16.png')} size={80} style={{ backgroundColor: theme.bg, alignSelf: 'center', marginTop: -40 }} />

                <Text style={[style.s16, { color: theme.txt, marginTop: 10, textAlign: 'center' }]}>Laura Harper</Text>
                <Text style={[style.r12, { color: theme.disable, textAlign: 'center' }]}>@lauraharper</Text>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[style.s16, { color: theme.txt, }]}>5.8K</Text>
                            <Text style={[style.r12, { color: theme.disable, marginTop: 5 }]}>Followers</Text>
                        </View>
                        <View style={[style.verticaldivider, { backgroundColor: theme.disable, height: '100%' }]}></View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[style.s16, { color: theme.txt, }]}>5.8K</Text>
                            <Text style={[style.r12, { color: theme.disable, marginTop: 5 }]}>Following</Text>
                        </View>
                        <View style={[style.verticaldivider, { backgroundColor: theme.disable, height: '100%' }]}></View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[style.s16, { color: theme.txt, }]}>12</Text>
                            <Text style={[style.r12, { color: theme.disable, marginTop: 5 }]}>Recipes</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}
                        style={[style.btn, { marginTop: 20, backgroundColor: theme.bg, borderColor: theme.disable, borderWidth: 1 }]}>
                        <Text style={[style.m12, { color: theme.disable }]}>Edit profile</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                        <Text style={[style.m16, { color: theme.txt, }]}>My recipes</Text>
                        <Text style={[style.r12, { color: theme.disable, }]}>12 recipes</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <Image source={require('../../assets/image/s17.png')} style={{ height: height / 8, width: width / 3.5, resizeMode: 'stretch' }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.r12, { color: Colors.primary }]}>Soup</Text>
                            <Text style={[style.m16, { color: theme.txt, }]}>Curry salmon soup</Text>
                            <Text style={[style.r12, { color: theme.disable, marginVertical: 5 }]}>60 min    |    3  serve</Text>
                            <Text style={[style.r12, { color: theme.disable, }]}>Uploaded 6 days ago</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20,marginBottom:80 }}>
                        <Image source={require('../../assets/image/s18.png')} style={{ height: height / 8, width: width / 3.5, resizeMode: 'stretch' }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.r12, { color: Colors.primary }]}>Soup</Text>
                            <Text style={[style.m16, { color: theme.txt, }]}>Beef ramen</Text>
                            <Text style={[style.r12, { color: theme.disable, marginVertical: 5 }]}>35 min    |    3  serve</Text>
                            <Text style={[style.r12, { color: theme.disable, }]}>Uploaded 6 days ago</Text>
                        </View>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}