import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, Pressable, ActivityIndicator, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 
import Svg, { Path, Circle } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

import { StatusBarHeight } from '../utils/HeightUtils';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { CommonActions } from '@react-navigation/native';

import Collapsible from 'react-native-collapsible';

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
        height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,

    elevation: 3,
}

export default function InvoiceShopScreen(props){

    let [dataLoaded, setDataLoaded] = useState(false);

    let [deskripsiHidden, setDeskripsHidden] = useState(false);

    useEffect(()=>{    
        setTimeout(() => {
            setDataLoaded(true);
        }, 1000);
    },[])

    return (
        <View style={{flex:1,backgroundColor:"white"}}>
            <View style={{height:StatusBarHeight}}></View>
            <View style={{...shadow,backgroundColor:"white",flexDirection:"row",paddingHorizontal:EStyleSheet.value("20rem"),alignItems:"center",height:EStyleSheet.value("55rem")}}>
                 {/* <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=>{
                    props.navigation.goBack();
                }}
                >
                    <Entypo name="chevron-left" size={EStyleSheet.value("20rem")} color="rgb(38, 180, 149)" />
                </TouchableOpacity> */}
                <View style={{position:"absolute",justifyContent:"center",alignItems:"center",width:Dimensions.get("screen").width}}>
                    <Text style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>Invoice</Text>
                </View>
            </View>
            {
                (dataLoaded) &&
                <Pressable 
                onPress={()=>{
                    props.navigation.dispatch(state => {
                        // Remove the home route from the stack
                        const routes = state.routes.filter(r => {
                            return r.name.match(/(Dashboard)/);
                        });
                      
                        return CommonActions.reset({
                          ...state,
                          routes,
                          index: routes.length - 1,
                        });
                      });
                }}
                android_ripple={{
                    color:"#e8e8e8"
                }}
                style={{position:"absolute",bottom:0,zIndex:999,backgroundColor:"rgb(38, 180, 149)",justifyContent:"center",alignItems:"center",paddingHorizontal:EStyleSheet.value("30rem"),width:"100%",height:EStyleSheet.value("60rem")}}>
                    <Text style={{color:"white",fonPressableght:"bold",fontSize:EStyleSheet.value("18rem")}}>Kembali Ke Menu Utama</Text>
                </Pressable>
            }
            {
                (dataLoaded) &&
                <ScrollView style={{backgroundColor:"whitesmoke"}}>
                    <View style={{paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("70rem"),paddingBottom:EStyleSheet.value("20rem"),zIndex:1,paddingTop:EStyleSheet.value("20rem")}}>
                        
                        <View style={{...shadow,backgroundColor:"white",marginBottom:EStyleSheet.value("20rem"),paddingBottom:EStyleSheet.value("30rem"),borderBottomRightRadius:EStyleSheet.value("20rem"),borderBottomLeftRadius:EStyleSheet.value("20rem"),borderTopRightRadius:EStyleSheet.value("20rem"),borderTopLeftRadius:EStyleSheet.value("20rem")}}>
                            <Text style={{color:"rgb(38, 180, 149)",textAlign:"center",padding:EStyleSheet.value("20rem"),fontWeight:"bold",fontSize:EStyleSheet.value("18rem")}}>Terma Kasih</Text>
                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("10rem")}}>
                                <View style={{borderTopWidth:0.5,flexDirection:"row",paddingVertical:EStyleSheet.value("15rem"),borderColor:"grey"}}>
                                    <View style={{flex:1}}>
                                        <Text style={{fontWeight:"bold"}}>Status</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{fontWeight:"bold"}}>Menunggu Pembayaran</Text>
                                    </View>
                                </View>
                                <View style={{borderTopWidth:0.5,flexDirection:"row",paddingVertical:EStyleSheet.value("15rem"),borderColor:"grey"}}>
                                    <View style={{flex:1}}>
                                        <Text style={{fontWeight:"bold"}}>Nomor Invoice</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{fontWeight:"bold"}}>123131247193712893729837219873219873129387</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        
                        
                        <View style={{...shadow,backgroundColor:"white",marginBottom:EStyleSheet.value("20rem"),paddingBottom:EStyleSheet.value("30rem"),borderBottomRightRadius:EStyleSheet.value("20rem"),borderBottomLeftRadius:EStyleSheet.value("20rem"),borderTopRightRadius:EStyleSheet.value("20rem"),borderTopLeftRadius:EStyleSheet.value("20rem")}}>
                            <Text style={{color:"rgb(38, 180, 149)",textAlign:"center",padding:EStyleSheet.value("20rem"),fontWeight:"bold",fontSize:EStyleSheet.value("18rem")}}>Detail Pembayaran</Text>
                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("10rem")}}>
                                <View style={{borderTopWidth:0.5,flexDirection:"row",paddingVertical:EStyleSheet.value("15rem"),borderColor:"grey"}}>
                                    <View style={{flex:1}}>
                                        <Text style={{}}>Tanggal</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{fontWeight:"bold"}}>12 Agustus 2021</Text>
                                    </View>
                                </View>
                                <View style={{borderTopWidth:0.5,flexDirection:"row",paddingVertical:EStyleSheet.value("15rem"),borderColor:"grey"}}>
                                    <View style={{flex:1}}>
                                        <Text style={{}}>Metode Pembayaran</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{fontWeight:"bold"}}>Mandiri</Text>
                                    </View>
                                </View>
                                <View style={{borderTopWidth:0.5,flexDirection:"row",paddingVertical:EStyleSheet.value("15rem"),borderColor:"grey"}}>
                                    <View style={{flex:1}}>
                                        <Text style={{}}>Nomor Rekening</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{fontWeight:"bold"}}>16555123129032139</Text>
                                    </View>
                                </View>
                                <View style={{borderTopWidth:0.5,flexDirection:"row",paddingVertical:EStyleSheet.value("15rem"),borderColor:"grey"}}>
                                    <View style={{flex:1}}>
                                        <Text style={{}}>Total Pembayaran</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{fontWeight:"bold"}}>5.000.000</Text>
                                    </View>
                                </View>
                                <View style={{marginTop:EStyleSheet.value("10rem")}}>
                                    <Text style={{lineHeight:25,color:"red",fontWeight:"bold"}}>Silakan lakukan konfirmasi pembayaran ke nomor whatsapp berikut 08180344572 setelah berhasil melakukan pembayaran.</Text>
                                </View>
                            </View>
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