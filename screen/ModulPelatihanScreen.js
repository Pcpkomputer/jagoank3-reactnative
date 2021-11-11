import { StatusBar } from 'expo-status-bar';
import React, {useState, useEfffect, useRef} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, Pressable, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 
import Svg, { Path, Circle } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

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

export default function ModulPelatihanScreen(props){
    return (
        <View style={{flex:1,backgroundColor:"white"}}>
            <View style={{height:StatusBarHeight}}></View>
            <View style={{...shadow,backgroundColor:"white",flexDirection:"row",paddingHorizontal:EStyleSheet.value("20rem"),alignItems:"center",height:EStyleSheet.value("55rem")}}>
                <Entypo name="chevron-left" size={EStyleSheet.value("20rem")} color="rgb(38, 180, 149)" />
                <View style={{position:"absolute",justifyContent:"center",alignItems:"center",width:Dimensions.get("screen").width}}>
                    <Text style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>Modul Pelatihan</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{marginVertical:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem")}}>
                    <View style={{backgroundColor:"white",borderWidth:1.5,borderColor:"#e8e8e8",flexDirection:"row",paddingVertical:EStyleSheet.value("5rem"),borderRadius:EStyleSheet.value("30rem")}}>
                        <View style={{paddingHorizontal:EStyleSheet.value("10rem"),paddingLeft:EStyleSheet.value("15rem"),justifyContent:"center",alignItems:"center"}}>
                            <Ionicons name="search" size={EStyleSheet.value("18rem")} color="rgba(0,0,0,0.3)" />
                        </View>
                        <TextInput placeholder="Cari..." style={{height:EStyleSheet.value("35rem"),color:"grey",flex:1}}></TextInput>
                        <View style={{paddingHorizontal:EStyleSheet.value("5rem"),paddingRight:EStyleSheet.value("15rem"),justifyContent:"center",alignItems:"center"}}>
                            <AntDesign name="closecircle" size={EStyleSheet.value("18rem")} color="rgba(0,0,0,0.3)" />
                        </View>
                    </View>
                </View>
                <FlatList
                contentContainerStyle={{paddingHorizontal:EStyleSheet.value("20rem")}}
                keyExtractor={(item,index)=>`modulpelatihan-${index}`}
                data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}
                renderItem={({item,index})=>{
                    return (
                        <Pressable
                        onPress={()=>{
                            props.navigation.navigate("DetailModulPelatihan");
                        }}
                        >
                        <LinearGradient 
                        colors={['#24b596', '#04a280', '#04a280']}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={{backgroundColor:"#24b596",overflow:"hidden",marginBottom:EStyleSheet.value("15rem"),borderRadius:EStyleSheet.value("5rem"),display:"flex",flexDirection:"row"}}>
                            <View style={{width:EStyleSheet.value("70rem"),justifyContent:"center",alignItems:"center",height:EStyleSheet.value("60rem")}}>
                                        <Svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 489.9 489.9"
                                        style={{backgroundColor:"#24b596"}}
                                        height={EStyleSheet.value("40rem")} 
                                        width={EStyleSheet.value("40rem")}
                                        >
                                        <Path fill="white" d="M131.75 409.1c-28.8 0-52.1 18.3-52.1 40.4 0 22.6 23.3 40.4 52.1 40.4h278.4c-22.6-24.1-22.6-56.8 0-80.9h-278.4v.1zM120.15 1.9c-23.3 7-40.4 32.7-40.4 63.8v342.2c10.5-9.3 24.9-15.9 40.4-17.9V1.9zM244.95 0v99.2l-40.1-25.3-40 25.3V0h-24.9v388.9h270.3V0z" />
                                        </Svg>
                            </View>
                            <View style={{flex:1,justifyContent:"center"}}>
                                <Text style={{color:"white",marginBottom:EStyleSheet.value("2rem"),fontSize:EStyleSheet.value("10rem")}}>SERTIFIKASI</Text>
                                <Text numberOfLines={1} style={{fontWeight:"bold",color:"white"}}>Sertifikasi Kemnaker RI</Text>
                            </View>
                            <LinearGradient 
                              colors={['#24b596', '#04a280', '#04a280']}
                              start={{ x: 0, y: 1 }}
                              end={{ x: 1, y: 1 }}
                            style={{width:EStyleSheet.value("80rem"),backgroundColor:"whitesmoke",justifyContent:"center",alignItems:"center",borderTopLeftRadius:EStyleSheet.value("10rem"),borderBottomLeftRadius:EStyleSheet.value("10rem")}}>
                                <Text style={{color:"white",fontSize:EStyleSheet.value("15rem")}}>24</Text>
                                <Text style={{color:"white",marginTop:EStyleSheet.value("5rem"),fontSize:EStyleSheet.value("11rem")}}>MODUL</Text>
                            </LinearGradient>
                        </LinearGradient>
                        </Pressable>
                      )
                }}
                />
            </ScrollView>
        </View>
    )
}