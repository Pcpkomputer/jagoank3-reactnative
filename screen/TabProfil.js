import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef, useContext} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, Pressable, ActivityIndicator, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons,MaterialIcons, AntDesign } from '@expo/vector-icons'; 
import Svg, { Path, Circle } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

import { StatusBarHeight } from '../utils/HeightUtils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';

import {extractInisial} from '../utils/utils';
import {GlobalContext} from '../App';

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

let shadow2 = {
    shadowColor: "grey",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
}


export default function TabProfil(props){

    let focused = useIsFocused();

    let [dataLoaded, setDataLoaded] = useState(false);
    

    useEffect(()=>{    
        setTimeout(() => {
            setDataLoaded(true);
        }, 1000);
    },[])

    // useEffect(()=>{
    //     if(focused){
    //         setDataLoaded(false);
    //         setTimeout(() => {
    //             setDataLoaded(true);
    //         }, 1000);
    //     }
    // },[focused])

    let globalContext = useContext(GlobalContext);

    return (
        <View style={{flex:1,backgroundColor:"whitesmoke"}}>
            <View style={{height:StatusBarHeight}}></View>
            <View style={{...shadow,backgroundColor:"white",flexDirection:"row",paddingHorizontal:EStyleSheet.value("20rem"),alignItems:"center",height:EStyleSheet.value("55rem")}}>
                <View style={{position:"absolute",justifyContent:"center",alignItems:"center",width:Dimensions.get("screen").width}}>
                    <Text style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>Detail Profil</Text>
                </View>
            </View>
            {
                (dataLoaded) &&
                <ScrollView>
                    <View 
                    style={{backgroundColor:"rgb(38,180,149)",borderBottomLeftRadius:EStyleSheet.value("10rem"),borderBottomRightRadius:EStyleSheet.value("10rem"),paddingVertical:EStyleSheet.value("30rem")}}>
                       
                       <LinearGradient 
                        colors={['rgb(38, 180, 149)','rgb(38, 180, 149)','white']}
                       style={{height:EStyleSheet.value("50rem"),position:"absolute",bottom:0,width:"100%"}}>
                        </LinearGradient>

                       
                        <View style={{height:EStyleSheet.value("220rem"),marginHorizontal:EStyleSheet.value("20rem"),justifyContent:"flex-end"}}>
                            <View style={{backgroundColor:"white",height:EStyleSheet.value("145rem"),borderRadius:EStyleSheet.value("10rem")}}>
                                <View style={{backgroundColor:"#ff5715",justifyContent:"center",alignItems:"center",alignSelf:"center",position:"absolute",borderRadius:EStyleSheet.value("10rem"),bottom:EStyleSheet.value("100rem"),width:EStyleSheet.value("100rem"),height:EStyleSheet.value("100rem")}}>
                                    <Text style={{color:"white",fontSize:EStyleSheet.value("50rem"),fontWeight:"bold"}}>{extractInisial(globalContext.credentials.detail.nama)}</Text>
                                </View>
                                <View style={{marginTop:EStyleSheet.value("125rem")/2-EStyleSheet.value("5rem"),justifyContent:"center",alignItems:"center"}}>
                                    <Text style={{color:"grey",fontWeight:"bold"}}>{globalContext.credentials.detail.nama}</Text>
                                    <Text style={{color:"grey",fontSize:EStyleSheet.value("12rem"),marginTop:EStyleSheet.value("3rem")}}>{globalContext.credentials.detail.nama}</Text>
                                </View>
                                <View style={{flex:1,justifyContent:"flex-end"}}>
                                    <View style={{paddingVertical:EStyleSheet.value("7rem"),flexDirection:"row",borderTopWidth:0.5,borderColor:"grey",paddingHorizontal:EStyleSheet.value("10rem")}}>
                                        <Text style={{fontSize:EStyleSheet.value("12rem"),flex:1}}>Valid Thru:</Text>
                                        <Text style={{Flex:1,justifyContent:"center",alignItems:"center",fontWeight:"bold"}}>0 point</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                       
                    </View>

                    <View style={{marginTop:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("30rem"),paddingHorizontal:EStyleSheet.value("20rem"),paddingBottom:EStyleSheet.value("10rem")}}>
                        <View style={{...shadow,backgroundColor:"white",padding:EStyleSheet.value("10rem"),borderRadius:EStyleSheet.value("7rem")}}>
                            <View style={{flexDirection:"row",alignItems:"center",paddingVertical:EStyleSheet.value("12rem"),borderBottomWidth:0.5,borderColor:"grey"}}>
                                <View style={{paddingHorizontal:EStyleSheet.value("5rem")}}> 
                                    <Feather name="user" size={EStyleSheet.value("20rem")} color="black" />
                                </View>
                                <Text style={{paddingHorizontal:EStyleSheet.value("10rem")}}>Profil</Text>
                            </View>
                            <View style={{flexDirection:"row",alignItems:"center",paddingVertical:EStyleSheet.value("12rem"),borderBottomWidth:0.5,borderColor:"grey"}}>
                                <View style={{paddingHorizontal:EStyleSheet.value("5rem")}}> 
                                    <MaterialIcons name="history" size={EStyleSheet.value("20rem")} color="black" />
                                </View>
                                <Text style={{paddingHorizontal:EStyleSheet.value("10rem")}}>Riwayat Transaksi</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            }
            {
                (!dataLoaded) &&
                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <ActivityIndicator size="large" color="rgb(38, 180, 149)"/>
                </View>
            }
        </View>
    )
}