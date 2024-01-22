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

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Recipe() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <StatusBar backgroundColor="transparent"  translucent={true} />
            <ImageBackground source={require('../../assets/image/s9.png')} resizeMode='stretch' style={{ height: height / 3.5, }} >
                <AppBar
                    elevation={0}
                    style={{ paddingHorizontal: 20, paddingTop: 20, backgroundColor: 'transparent' }}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                        <Icon name="arrow-back" color={Colors.secondary} size={25} />
                    </TouchableOpacity>
                    }
                    trailing={<HStack>
                        <Icon name="bookmark-outline" color={Colors.secondary} size={25} style={{ marginRight: 10 }} />
                        <Icon name="ellipsis-vertical" color={Colors.secondary} size={25} />
                    </HStack>}
                />
            </ImageBackground>
            <View style={{ flex: 1, backgroundColor: theme.bg, paddingHorizontal: 20 }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                    <Text style={[style.subtitle, { color: theme.txt, marginTop: 10, }]}>Vegetable Pasta</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Avatar.Image source={require('../../assets/image/s2.png')} size={36} style={{ backgroundColor: theme.bg, alignSelf: 'center', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.m12, { color: Colors.primary, }]}>Tania Adams</Text>
                            <Text style={[style.r12, { color: theme.disable, }]}>on 9 Dec 2021</Text>
                        </View>
                        <View style={{ paddingHorizontal: 15, paddingVertical: 10, backgroundColor: Colors.primary, borderRadius: 25 }}>
                            <Text style={[style.m12, { color: Colors.secondary }]}>Follow</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="time" color='#B1B1B1' size={24} style={{ marginRight: 5 }} />
                            <Text style={[style.r12, { color: theme.disable }]}>30 min</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                            <Icon name="person" color='#B1B1B1' size={20} style={{ marginRight: 5 }} />
                            <Text style={[style.r12, { color: theme.disable }]}>2 serve</Text>
                        </View>
                    </View>

                    <Text style={[style.r12, { color: theme.disable, marginTop: 10 }]}>Pasta mixed with fresh vegetables and doused with a delicious sauce with a high taste, this food is rich in nutrients and is very suitable for... <Text style={{ color: Colors.primary }}>Read more </Text></Text>
                    <Text style={[style.m16, { color: theme.txt, marginTop: 20, }]}>Ingredients (8)</Text>

                    <View style={[style.inputContainer, { borderColor: theme.input, borderWidth: 1, backgroundColor: theme.input, marginTop: 15 }]}>
                        <Text style={[style.r14, { color: theme.txt, flex: 1 }]}>Pasta</Text>
                        <Text style={[style.r12, { color: theme.disable, }]}>1 pack</Text>
                    </View>

                    <View style={[style.inputContainer, { borderColor: theme.input, borderWidth: 1, backgroundColor: theme.input, marginTop: 15 }]}>
                        <Text style={[style.r14, { color: theme.txt, flex: 1 }]}>Vegetable</Text>
                        <Text style={[style.r12, { color: theme.disable, }]}>6 Slides</Text>
                    </View>

                    <View style={[style.inputContainer, { borderColor: theme.input, borderWidth: 1, backgroundColor: theme.input, marginTop: 15 }]}>
                        <Text style={[style.r14, { color: theme.txt, flex: 1 }]}>Chicken meat</Text>
                        <Text style={[style.r12, { color: theme.disable, }]}>300 G</Text>
                    </View>

                    <View style={[style.inputContainer, { borderColor: theme.input, borderWidth: 1, backgroundColor: theme.input, marginTop: 15 }]}>
                        <Text style={[style.r14, { color: theme.txt, flex: 1 }]}>Black papper</Text>
                        <Text style={[style.r12, { color: theme.disable, }]}>3/4 Tea spoon</Text>
                    </View>

                    <View style={[style.inputContainer, { borderColor: theme.input, borderWidth: 1, backgroundColor: theme.input, marginTop: 15 }]}>
                        <Text style={[style.r14, { color: theme.txt, flex: 1 }]}>Avocado</Text>
                        <Text style={[style.r12, { color: theme.disable, }]}>40 G</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Direction')}
                        style={[style.btn,{marginVertical:20}]}>
                        <Text style={style.btntxt}>Let's cook</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}