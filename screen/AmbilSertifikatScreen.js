import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef, useContext} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, Pressable, ActivityIndicator, Linking, TextInput, AsyncStorage } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 
import Svg, { Path, Circle } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

import { StatusBarHeight } from '../utils/HeightUtils';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {endpoint} from '../utils/endpoint';

import {GlobalContext} from '../App';

import {toLocaleTimestamp} from '../utils/utils';

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

export default function AmbilSertifikatScreen(props){

    let globalContext = useContext(GlobalContext);

    let [dataLoaded, setDataLoaded] = useState(false);

    let [simpanLoading, setSimpanLoading] = useState(false);

    let [detail, setDetail] = useState([]);


    ////
    let [nama, setNama] = useState("");
    let [username, setUsername] = useState("");
    let [nickname, setNickname] = useState("");
    let [email, setEmail] = useState("");
    let [notelepon, setNoTelepon] = useState("");

    ////

    let fetchRiwayatPemesanan = async ()=>{
        setDataLoaded(false);
        let request = await fetch(`${endpoint}/getriwayatpemesanan`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
                "authorization":`Bearer ${globalContext.credentials.token}`
            }
        });
        let response = await request.json();

        setDataLoaded(true)
        setDetail(response);

        console.log(response);
        
    }

    useEffect(()=>{
        fetchRiwayatPemesanan();
    },[])


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
                <View style={{position:"absolute",justifyContent:"center",alignItems:"center",width:Dimensions.get("screen").width}}>
                    <Text style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>Ambil Sertifikat</Text>
                </View>
            </View>
            {
                (dataLoaded) &&
                <ScrollView>
                    {
                        detail.map((item,index)=>{
                            if(item.status==="Sudah Dibayar"){
                                return (
                                    <View style={{...shadow,padding:EStyleSheet.value("15rem"),backgroundColor:"white",borderRadius:EStyleSheet.value("5rem"),marginBottom:EStyleSheet.value("20rem"),marginTop:(index===0) ? EStyleSheet.value("25rem"):undefined,marginHorizontal:EStyleSheet.value("20rem")}}>
                                        <View style={{flexDirection:"row",marginBottom:EStyleSheet.value("10rem")}}>
                                            <Text style={{fontWeight:"bold"}}>Kode Invoice : </Text>
                                            <Text style={{marginLeft:EStyleSheet.value("5rem"),flex:1}}>{item.kode_invoice}</Text>
                                        </View>
                                        <View style={{flexDirection:"row",marginBottom:EStyleSheet.value("10rem")}}>
                                            <Text style={{fontWeight:"bold"}}>Nama Training : </Text>
                                            <Text style={{marginLeft:EStyleSheet.value("5rem"),flex:1}}>{item.namatraining}</Text>
                                        </View>
                                        <View style={{flexDirection:"row",marginBottom:EStyleSheet.value("10rem")}}>
                                            <Text style={{fontWeight:"bold"}}>Tanggal Pemesanan : </Text>
                                            <Text style={{marginLeft:EStyleSheet.value("5rem"),flex:1}}>{toLocaleTimestamp(item.tanggalpemesanan.replace(/-/g,"/"))}</Text>
                                        </View>
                                        <View style={{flexDirection:"row",marginBottom:EStyleSheet.value("10rem")}}>
                                            <Text style={{fontWeight:"bold"}}>Status Pemesanan : </Text>
                                            <Text style={{marginLeft:EStyleSheet.value("5rem"),flex:1}}>{item.status}</Text>
                                        </View>
                                        <Pressable 
                                        android_ripple={{
                                            color:"white"
                                        }}
                                        style={{marginTop:EStyleSheet.value("10rem"),borderRadius:EStyleSheet.value("5rem"),backgroundColor:"rgb(38, 180, 149)",paddingVertical:EStyleSheet.value("10rem"),justifyContent:"center",alignItems:"center"}}>
                                            <Text style={{color:"white"}}>Ambil Sertifikat</Text>
                                        </Pressable>
                                    </View>
                                )
                            }
                            
                        })
                    }
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