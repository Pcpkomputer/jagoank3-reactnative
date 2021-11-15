import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, Pressable, ActivityIndicator, TextInput } from 'react-native';
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

export default function DetailSertifikasiScreen(props){

    let [dataLoaded, setDataLoaded] = useState(false);

    useEffect(()=>{    
        setTimeout(() => {
            setDataLoaded(true);
        }, 1000);
    },[])

    return (
        <View style={{flex:1,backgroundColor:"white"}}>
            <View style={{height:StatusBarHeight}}></View>
            <View style={{...shadow,backgroundColor:"white",flexDirection:"row",paddingHorizontal:EStyleSheet.value("20rem"),alignItems:"center",height:EStyleSheet.value("55rem")}}>
                <Entypo name="chevron-left" size={EStyleSheet.value("20rem")} color="rgb(38, 180, 149)" />
                <View style={{position:"absolute",justifyContent:"center",alignItems:"center",width:Dimensions.get("screen").width}}>
                    <Text style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>Insiden Investigasi Batch 6</Text>
                </View>
            </View>
            {
                (dataLoaded) &&
                <ScrollView style={{backgroundColor:"whitesmoke"}}>
                    <View style={{paddingHorizontal:EStyleSheet.value("20rem"),zIndex:1,paddingTop:EStyleSheet.value("20rem")}}>
                        <View style={{...shadow,backgroundColor:"white",borderTopRightRadius:EStyleSheet.value("20rem"),borderTopLeftRadius:EStyleSheet.value("20rem")}}>
                            <Text style={{color:"grey",padding:EStyleSheet.value("20rem")}}>Pembinaan & Sertifikasi Operator K3 Umum BNSP</Text>
                            <View style={{backgroundColor:"#e8e8e8",height:EStyleSheet.value("450rem")}}>
                                <Text>555</Text>
                            </View>
                            <View style={{marginTop:EStyleSheet.value("15rem"),marginBottom:EStyleSheet.value("10rem"),paddingHorizontal:EStyleSheet.value("20rem")}}>
                                <Text style={{fontSize:EStyleSheet.value("12rem"),color:"grey",marginBottom:EStyleSheet.value("5rem")}}>Jadwal Training</Text>
                                <Text>4 - 11 Desember 2021</Text>
                            </View>
                            <View style={{height:EStyleSheet.value("10rem")}}>
                            </View>
                        </View>
                    </View>
                    <View style={{backgroundColor:"rgb(38, 180, 149)",zIndex:100}}>
                        <View style={{height:EStyleSheet.value("50rem"),justifyContent:"center",alignItems:"center"}}>
                            <Text style={{fontSize:EStyleSheet.value("16rem"),fontWeight:"bold",color:"white"}}>Diskon Saat Ini</Text>
                        </View>
                        <View style={{paddingHorizontal:EStyleSheet.value("35rem")}}>
                            <Text>5555</Text>
                        </View>
                    </View>
                </ScrollView>
            }
            {
                (!dataLoaded) &&
                <View style={{flex:1,justifyContent:"center",backgroundColor:"whitesmoke",alignItems:"center"}}>
                    <ActivityIndicator size="large" color="rgb(38, 180, 149)"/>
                </View>
            }
        </View>
    )
}