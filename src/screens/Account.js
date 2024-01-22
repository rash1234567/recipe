import { View, Text, SafeAreaView, StatusBar, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper'
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { Platform } from "react-native";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Account() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <StatusBar backgroundColor={theme.bg} translucent={false} />
            <View style={[style.main, { backgroundColor: theme.bg,}]}>
                <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                    <AppBar
                        color={theme.bg}
                        title='Account'
                        titleStyle={[style.r16, { color: theme.txt, }]}
                        centerTitle={true}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                            <Icon name="arrow-back" color={theme.txt} size={25} />
                        </TouchableOpacity>
                        }
                    />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={[style.m16, { color: theme.txt, marginTop: 15 }]}>Full Name</Text>
                        <View style={[style.inputContainer, { borderColor: theme.input, borderWidth: 1, backgroundColor: theme.input, marginTop: 5 }]}>
                            <TextInput placeholder='Laura Harper'
                                selectionColor={Colors.primary}
                                placeholderTextColor={Colors.disable}
                                style={[style.r12, { paddingHorizontal: 10, color: theme.txt, flex: 1 }]}
                            />
                        </View>

                        <Text style={[style.m16, { color: theme.txt, marginTop: 15 }]}>Email</Text>
                        <View style={[style.inputContainer, { borderColor: theme.input, borderWidth: 1, backgroundColor: theme.input, marginTop: 5 }]}>
                            <TextInput placeholder='lauraharper@gmail.com'
                                selectionColor={Colors.primary}
                                placeholderTextColor={Colors.disable}
                                style={[style.r12, { paddingHorizontal: 10, color: theme.txt, flex: 1 }]}
                            />
                        </View>

                        <Text style={[style.m16, { color: theme.txt, marginTop: 15 }]}>Place of birth</Text>
                        <View style={[style.inputContainer, { borderColor: theme.input, borderWidth: 1, backgroundColor: theme.input, marginTop: 5 }]}>
                            <TextInput placeholder='Jakarta, Indonesia'
                                selectionColor={Colors.primary}
                                placeholderTextColor={Colors.disable}
                                style={[style.r12, { paddingHorizontal: 10, color: theme.txt, flex: 1 }]}
                            />
                        </View>

                        <Text style={[style.m16, { color: theme.txt, marginTop: 15 }]}>Date of birth</Text>
                        <View style={[style.inputContainer, { borderColor: theme.input, borderWidth: 1, backgroundColor: theme.input, marginTop: 5 }]}>
                            <TextInput placeholder='30 December 2000'
                                selectionColor={Colors.primary}
                                placeholderTextColor={Colors.disable}
                                style={[style.r12, { paddingHorizontal: 10, color: theme.txt, flex: 1 }]}
                            />
                        </View>

                        <Text style={[style.m16, { color: theme.txt, marginTop: 15 }]}>Gender</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <View style={{ flex: 1 }}>
                                <View style={{ borderColor: theme.input, borderWidth: 1, backgroundColor: theme.input, alignItems: 'center', paddingVertical: 10, borderRadius: 12 }}>
                                    <Text style={[style.r12, { color: theme.disable, textAlign: 'center' }]}>Male</Text>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <View style={{ flex: 1 }}>
                                <View style={{ borderColor: Colors.primary, borderWidth: 1, backgroundColor: theme.input, alignItems: 'center', paddingVertical: 10, borderRadius: 12 }}>
                                    <Text style={[style.r12, { color: theme.disable, textAlign: 'center' }]}>Female</Text>
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('Setting')}
                            style={[style.btn, { marginVertical: 30 }]}>
                            <Text style={style.btntxt}>Save Change</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}
