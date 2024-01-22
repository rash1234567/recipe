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

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Language() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
             <StatusBar translucent={false} backgroundColor={theme.bg}></StatusBar>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <AppBar
                    color={theme.bg}
                    title='Language'
                    titleStyle={[style.r16, { color: theme.txt, }]}
                    centerTitle={true}
                    style={{ marginHorizontal: 20,}}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                        <Icon name="arrow-back" color={theme.txt} size={25} />
                    </TouchableOpacity>
                    }
                />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ paddingVertical: 7, backgroundColor: theme.s1, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={[style.r16, { color: theme.txt, }]}>English</Text>
                        <Icon name="checkmark" color={Colors.primary} size={25} />
                    </View>
                    <View style={{ marginHorizontal: 20 }}>
                        <Text style={[style.r14, { color: theme.disable, marginTop: 20 }]}>Indonesia</Text>
                        <Text style={[style.r14, { color: theme.disable, marginTop: 20 }]}>Chinnese</Text>
                        <Text style={[style.r14, { color: theme.disable, marginTop: 20 }]}>Germany</Text>
                        <Text style={[style.r14, { color: theme.disable, marginTop: 20 }]}>Dutch</Text>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}