import { View, Text, SafeAreaView, Switch, StatusBar, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
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

export default function Notification1() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [ison, setIsOn] = useState(true);
    const toggle = () => setIsOn(previousState => !previousState);

    const [ison1, setIsOn1] = useState(false);
    const toggle1 = () => setIsOn1(previousState => !previousState);

    const [ison2, setIsOn2] = useState(true);
    const toggle2 = () => setIsOn2(previousState => !previousState);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <StatusBar translucent={false} backgroundColor={theme.bg}></StatusBar>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <AppBar
                    color={theme.bg}
                    title='Notification'
                    titleStyle={[style.r16, { color: theme.txt, }]}
                    centerTitle={true}
                    style={{ marginHorizontal: 20,  }}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                        <Icon name="arrow-back" color={theme.txt} size={25} />
                    </TouchableOpacity>
                    }
                />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ paddingVertical: 7, backgroundColor: '#75757510', paddingHorizontal: 20 }}>
                        <Text style={[style.r16, { color: theme.disable, }]}>Push notification</Text>
                    </View>

                    <View style={{ marginHorizontal: 20 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={[style.r16, { color: theme.txt, }]}>Recomendation</Text>
                                <Text style={[style.r12, { color: theme.disable, marginTop: 5 }]}>Including trending recipes, event recommendations curated by our team</Text>
                            </View>
                            <Switch
                                trackColor={{ false: Colors.disable, true: Colors.primary }}
                                thumbColor={isEnabled ? Colors.secondary : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Comment')} style={{ flex: 1 }}>
                                <Text style={[style.r16, { color: theme.txt, }]}>Comments</Text>
                                <Text style={[style.r12, { color: theme.disable, marginTop: 5 }]}>Comment on your recipes, including tags in comments, as well as replies to your comments on other people's recipes</Text>
                            </TouchableOpacity>
                            <Switch
                                trackColor={{ false: Colors.disable, true: Colors.primary }}
                                thumbColor={ison ? Colors.secondary : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggle}
                                value={ison}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={[style.r16, { color: theme.txt, }]}>Recipe Activity</Text>
                                <Text style={[style.r12, { color: theme.disable, marginTop: 5 }]}>Activities on your recipe, such as likes, comments</Text>
                            </View>
                            <Switch
                                trackColor={{ false: Colors.disable, true: Colors.primary }}
                                thumbColor={ison1 ? Colors.secondary : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggle1}
                                value={ison1}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={[style.r16, { color: theme.txt, }]}>Tag</Text>
                                <Text style={[style.r12, { color: theme.disable, marginTop: 5 }]}>When someone mentions you, either in comments, replies to comments, or in a recipe post</Text>
                            </View>
                            <Switch
                                trackColor={{ false: Colors.disable, true: Colors.primary }}
                                thumbColor={ison2 ? Colors.secondary : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggle2}
                                value={ison2}
                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}