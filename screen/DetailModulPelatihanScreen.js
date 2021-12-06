import { StatusBar } from 'expo-status-bar';
import React, {useState, useEfffect, useRef} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, Pressable, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 
import Svg, { Path, Circle } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

import { WebView } from 'react-native-webview';

import { StatusBarHeight } from '../utils/HeightUtils';
import { TouchableOpacity } from 'react-native-gesture-handler';

let shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
}

export default function DetailModulPelatihanScreen(props){
    return (
        <View style={{flex:1,backgroundColor:"white"}}>
            <View style={{height:StatusBarHeight}}></View>
            <View style={{...shadow,backgroundColor:"white",flexDirection:"row",paddingHorizontal:EStyleSheet.value("20rem"),alignItems:"center",height:EStyleSheet.value("55rem")}}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=>{
                    props.navigation.goBack();
                }}
                >
                    <Entypo name="chevron-left" size={EStyleSheet.value("20rem")} color="rgb(38, 180, 149)" />
                </TouchableOpacity>
                <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                    <Text numberOfLines={1} style={{fontWeight:"bold",paddingHorizontal:EStyleSheet.value("30rem"),color:"rgb(38, 180, 149)",marginRight:EStyleSheet.value("20rem")}}>Modul Pelatihan - {props.route.params.item.namatraining}</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{height:EStyleSheet.value("20rem")}}>
                </View>
                {/* <View style={{marginVertical:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem")}}>
                    <View style={{backgroundColor:"white",borderWidth:1.5,borderColor:"#e8e8e8",flexDirection:"row",paddingVertical:EStyleSheet.value("5rem"),borderRadius:EStyleSheet.value("30rem")}}>
                        <View style={{paddingHorizontal:EStyleSheet.value("10rem"),paddingLeft:EStyleSheet.value("15rem"),justifyContent:"center",alignItems:"center"}}>
                            <Ionicons name="search" size={EStyleSheet.value("18rem")} color="rgba(0,0,0,0.3)" />
                        </View>
                        <TextInput placeholder="Cari Modul..." style={{height:EStyleSheet.value("35rem"),color:"grey",flex:1}}></TextInput>
                        <View style={{paddingHorizontal:EStyleSheet.value("5rem"),paddingRight:EStyleSheet.value("15rem"),justifyContent:"center",alignItems:"center"}}>
                            <AntDesign name="closecircle" size={EStyleSheet.value("18rem")} color="rgba(0,0,0,0.3)" />
                        </View>
                    </View>
                </View> */}
                <FlatList
                contentContainerStyle={{paddingHorizontal:EStyleSheet.value("20rem")}}
                keyExtractor={(item,index)=>`modulpelatihan-${index}`}
                data={JSON.parse(props.route.params.item.modulyoutube)}
                renderItem={({item,index})=>{
                    return (
                        <View
                        style={{backgroundColor:"#d0f3e3",flexDirection:"column",paddingVertical:EStyleSheet.value("15rem"),paddingHorizontal:EStyleSheet.value("20rem"),overflow:"hidden",marginBottom:EStyleSheet.value("15rem"),borderRadius:EStyleSheet.value("5rem"),display:"flex"}}>
                            <View style={{flex:1,justifyContent:"center",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                                <Text numberOfLines={1} style={{fontWeight:"bold",flex:1,color:"#5e737b",paddingRight:EStyleSheet.value("15rem")}}>https://www.youtube.com/watch?v={item}</Text>
                                <Ionicons name="md-arrow-forward-circle" size={EStyleSheet.value("22rem")} color="#24b596" />
                            </View>
                            <WebView 
                            style={{height:200,marginTop:EStyleSheet.value("20rem"),backgroundColor:"#d0f3e3",marginBottom:EStyleSheet.value("10rem")}}
                            source={{ uri: 'http://www.youtube.com/embed/'+item }}
                            />
                        </View>
                      )
                }}
                />
            </ScrollView>
        </View>
    )
}