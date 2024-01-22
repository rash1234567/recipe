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

export default function Notification() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
        <StatusBar translucent={false} backgroundColor={theme.bg}></StatusBar>
        <AppBar
            color={theme.bg}
            title='Notifications'
            titleStyle={[style.r16, { color: theme.txt, }]}
            centerTitle={true}
            elevation={0}
            style={{marginHorizontal:20}}
            leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                <Icon name="arrow-back" color={theme.txt} size={25} />
            </TouchableOpacity>
            }
            trailing={<TouchableOpacity >
                <Icon name="ellipsis-vertical" color={theme.txt} size={20} />
            </TouchableOpacity>
            }
        />
    <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{backgroundColor:'#75757510',paddingVertical:10,paddingHorizontal:20}}>
            <Text style={[style.r16,{color:theme.disable}]}>Newest</Text>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:20,marginTop:20}}>
            <Image source={require('../../assets/image/d1.png')} resizeMode='stretch' style={{height:height/14,width:width/8}}></Image>
            <View style={{flex:1,marginHorizontal:10}}>
                <Text style={[style.r12,{color:Colors.primary}]}>Daniel <Text style={{color:theme.txt}}>comments on your recipe :</Text></Text>
                <Text style={[style.r12,{color:theme.disable}]}>it's beyond my expectation, it's so delicious</Text>
            </View>
            <Text style={[style.r12,{color:theme.disable}]}>1h ago</Text>
        </View>

        <View style={[style.divider,{backgroundColor:Colors.disable,marginHorizontal:20,marginTop:10}]}></View>

        <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:20,marginTop:20}}>
            <Image source={require('../../assets/image/d2.png')} resizeMode='stretch' style={{height:height/14,width:width/8}}></Image>
            <View style={{flex:1,marginHorizontal:10}}>
                <Text style={[style.r12,{color:Colors.primary}]}>Mia <Text style={{color:theme.txt}}> mentioned you in the comments :</Text></Text>
                <Text style={[style.r12,{color:theme.disable}]}>you can add more cheese on ...</Text>
            </View>
            <Text style={[style.r12,{color:theme.disable}]}>4 ago</Text>
        </View>

        <View style={[style.divider,{backgroundColor:Colors.disable,marginHorizontal:20,marginTop:10}]}></View>

        <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:20,marginTop:20}}>
            <Image source={require('../../assets/image/d3.png')} resizeMode='stretch' style={{height:height/14,width:width/8}}></Image>
            <View style={{flex:1,marginHorizontal:10}}>
                <Text style={[style.r12,{color:Colors.primary}]}>Jack <Text style={{color:theme.txt}}>started to following you </Text></Text>
            </View>
            <Text style={[style.r12,{color:theme.disable}]}>1d ago</Text>
        </View>

        <View style={{backgroundColor:'#75757510',paddingVertical:10,paddingHorizontal:20,marginTop:20}}>
            <Text style={[style.r16,{color:theme.disable}]}>Oldest</Text>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:20,marginTop:20}}>
            <Image source={require('../../assets/image/d4.png')} resizeMode='stretch' style={{height:height/14,width:width/8}}></Image>
            <View style={{flex:1,marginHorizontal:10}}>
                <Text style={[style.r12,{color:Colors.primary}]}>Tsana <Text style={{color:theme.txt}}>comments on your recipe :</Text></Text>
                <Text style={[style.r12,{color:theme.disable}]}>it's beyond my expectation, it's so delicious</Text>
            </View>
            <Text style={[style.r12,{color:theme.disable}]}>1h ago</Text>
        </View>

        <View style={[style.divider,{backgroundColor:Colors.disable,marginHorizontal:20,marginTop:10}]}></View>

        <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:20,marginTop:20}}>
            <Image source={require('../../assets/image/d5.png')} resizeMode='stretch' style={{height:height/14,width:width/8}}></Image>
            <View style={{flex:1,marginHorizontal:10}}>
                <Text style={[style.r12,{color:Colors.primary}]}>Aurora <Text style={{color:theme.txt}}> mentioned you in the comments :</Text></Text>
                <Text style={[style.r12,{color:theme.disable}]}>you can add more cheese on ...</Text>
            </View>
            <Text style={[style.r12,{color:theme.disable}]}>6d ago</Text>
        </View>

        <View style={[style.divider,{backgroundColor:Colors.disable,marginHorizontal:20,marginTop:10}]}></View>

        <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:20,marginTop:20}}>
            <Image source={require('../../assets/image/d6.png')} resizeMode='stretch' style={{height:height/14,width:width/8}}></Image>
            <View style={{flex:1,marginHorizontal:10}}>
                <Text style={[style.r12,{color:Colors.primary}]}>Farah <Text style={{color:theme.txt}}>started to following you </Text></Text>
            </View>
            <Text style={[style.r12,{color:theme.disable}]}>8d ago</Text>
        </View>

    </ScrollView>
    </SafeAreaView>
  )
}