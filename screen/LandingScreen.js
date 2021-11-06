import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, Pressable } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Entypo } from '@expo/vector-icons'; 


import { StatusBarHeight } from '../utils/HeightUtils';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LandingScreen(props){
    return (
        <ScrollView style={{flex:1,backgroundColor:"rgb(38, 180, 149)"}}>
            <View style={{height:StatusBarHeight}}></View>
            <View style={{height:EStyleSheet.value("100rem"),justifyContent:"center",alignItems:"center"}}>
                <Image style={{width:EStyleSheet.value("120rem"),height:EStyleSheet.value("150rem")}} source={require("../assets/jagoank3.png")}></Image>
            </View>
            <View style={{marginHorizontal:EStyleSheet.value("10rem"),height:EStyleSheet.value("220rem")}}>
                <Image resizeMode="stretch" style={{width:"100%",height:"100%"}} source={require("../assets/kids.png")}></Image>
            </View>
            <View style={{marginVertical:EStyleSheet.value("25rem"),paddingHorizontal:EStyleSheet.value("15rem")}}>
                <Text style={{textAlign:"center",color:"white",lineHeight:23}}>MiCCa Pro adalah Platform Pelatihan Online bersetifikasi Kemnaker RI/BNSP bagi para Penggiat K3 atau Ahli K3 yang dikembangkan oleh Jagoan K3</Text>
            </View>
            <View style={{marginVertical:EStyleSheet.value("5rem"),borderBottomWidth:EStyleSheet.value("1rem"),paddingBottom:EStyleSheet.value("30rem"),borderColor:"white",marginHorizontal:EStyleSheet.value("15rem")}}>
                <View style={{overflow:"hidden",backgroundColor:"#f9d408",height:EStyleSheet.value("50rem"),borderRadius:EStyleSheet.value("5rem")}}>
                    <Pressable 
                    style={{overflow:"hidden"}}
                    android_ripple={{
                        color:"white"
                    }}
                    onPress={()=>{
                        props.navigation.navigate("Daftar");
                    }}
                    style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                        <Text style={{textAlign:"center",color:"white",fontWeight:"bold"}}>Daftar Akun</Text>
                        <Entypo style={{paddingLeft:EStyleSheet.value("5rem"),position:"absolute",right:EStyleSheet.value("15rem"),top:EStyleSheet.value("33rem")/2}} name="arrow-long-right" size={EStyleSheet.value("20rem")} color="white" />
                    </Pressable>
                </View>
              
            </View>
            <View style={{marginTop:EStyleSheet.value("5rem"),paddingHorizontal:EStyleSheet.value("15rem"),flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{color:"white"}}>Sudah punya akun?</Text>
                <View style={{flexDirection:"row",overflow:"hidden",justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity
                    style={{overflow:"hidden"}}
                    onPress={()=>{
                        props.navigation.navigate("Login");
                    }}
                    activeOpacity={0.6}
                    >
                        <Text style={{color:"white"}}>Masuk</Text>
                    </TouchableOpacity>
                    <Entypo style={{paddingLeft:EStyleSheet.value("5rem")}} name="arrow-long-right" size={EStyleSheet.value("20rem")} color="white" />
                </View>
            </View>
        </ScrollView>
    )
}