import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef, useContext} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, Pressable, ActivityIndicator, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 
import Svg, { Path, Circle } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

import { StatusBarHeight } from '../utils/HeightUtils';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { GlobalContext } from '../App';

import { formatRupiah } from '../utils/utils';

import Collapsible from 'react-native-collapsible';

import {endpoint} from '../utils/endpoint';

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

export default function DetailItemCheckoutShopScreen(props){

    let globalContext = useContext(GlobalContext);

    let [dataLoaded, setDataLoaded] = useState(false);

    let [deskripsiHidden, setDeskripsHidden] = useState(false);

    let [totalDibayar, setTotalDibayar] = useState(0);

    let hitungTotalBayar = ()=>{
        let total = 0;
        let list = globalContext.keranjangShop;
        list.forEach((item)=>{
            total=total+item.harga;
        })
        return total;
    }

    useEffect(()=>{    
        setTimeout(() => {
            setDataLoaded(true);
        }, 1000);
    },[]);

    useEffect(()=>{
        let total = hitungTotalBayar();
        setTotalDibayar(total);
    },[globalContext.keranjangShop])

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
                    <Text style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>Pemesanan Anda</Text>
                </View>
            </View>
            {
                (dataLoaded) &&
                <Pressable 
                onPress={()=>{
                    if(globalContext.keranjangShop.length>0){
                        props.navigation.navigate("DetailIdentitasCheckoutShop", {totalDibayar});
                    }
                }}
                android_ripple={{
                    color:"#e8e8e8"
                }}
                style={{position:"absolute",bottom:0,zIndex:999,backgroundColor:"rgb(38, 180, 149)",justifyContent:"center",alignItems:"center",paddingHorizontal:EStyleSheet.value("30rem"),width:"100%",height:EStyleSheet.value("60rem")}}>
                    <Text style={{color:"white",fonPressableght:"bold",fontSize:EStyleSheet.value("18rem")}}>Proses Pemesanan</Text>
                </Pressable>
            }
            {
                (dataLoaded) &&
                <ScrollView style={{backgroundColor:"whitesmoke"}}>
                    <View style={{paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("70rem"),paddingBottom:EStyleSheet.value("20rem"),zIndex:1,paddingTop:EStyleSheet.value("20rem")}}>
                        <View style={{...shadow,backgroundColor:"white",paddingBottom:EStyleSheet.value("30rem"),borderBottomRightRadius:EStyleSheet.value("20rem"),borderBottomLeftRadius:EStyleSheet.value("20rem"),borderTopRightRadius:EStyleSheet.value("20rem"),borderTopLeftRadius:EStyleSheet.value("20rem")}}>
                            <Text style={{color:"rgb(38, 180, 149)",padding:EStyleSheet.value("20rem"),fontWeight:"bold",fontSize:EStyleSheet.value("18rem")}}>Pemesanan Anda</Text>
                            
                            {
                                globalContext.keranjangShop.length > 0 ?
                                globalContext.keranjangShop.map((item,index)=>{
                                    return (
                                        <View style={{paddingHorizontal:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("10rem")}}>
                                            <View style={{borderTopWidth:0.5,flexDirection:"row",paddingVertical:EStyleSheet.value("15rem"),borderColor:"grey"}}>
                                                <View style={{flex:1}}>
                                                    <Text style={{fontWeight:"bold"}}>{item.nama_barang}</Text>
                                                    <View style={{marginTop:EStyleSheet.value("5rem")}}>
                                                        <Text>Rp. {formatRupiah(item.harga)}</Text>
                                                    </View>
                                                </View>
                                                <View>
                                                    <View style={{width:EStyleSheet.value("80rem"),height:EStyleSheet.value("80rem"),backgroundColor:"whitesmoke"}}>
                                                        <Image style={{height:"100%",width:"100%"}} source={{uri:`${endpoint.replace("/api","")}/storage/public/shop/${item.gambar_barang}`}}></Image>
                                                    </View>
                                                </View>
                                            </View>
                                            
                                        </View>
                                    )
                                })
                                :
                                <View style={{paddingHorizontal:EStyleSheet.value("20rem"),justifyContent:"center",alignItems:"center",height:EStyleSheet.value("200rem")}}>
                                    <Text style={{color:"grey",paddingHorizontal:EStyleSheet.value("20rem"),textAlign:"center"}}>Belum ada barang yang dipesan...</Text>
                                </View>
                            }

                            {/* <View style={{paddingHorizontal:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("10rem")}}>
                                <View style={{borderTopWidth:0.5,flexDirection:"row",paddingVertical:EStyleSheet.value("15rem"),borderColor:"grey"}}>
                                    <View style={{flex:1}}>
                                        <Text style={{fontWeight:"bold"}}>Barang ABCDEFG</Text>
                                        <View style={{marginTop:EStyleSheet.value("5rem")}}>
                                            <Text>Rp. 5.000.000</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <View style={{width:EStyleSheet.value("80rem"),height:EStyleSheet.value("80rem"),backgroundColor:"whitesmoke"}}>
                                            <Text>1</Text>
                                        </View>
                                    </View>
                                </View>
                                
                            </View> */}



                          


                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("10rem")}}>
                                <View style={{flexDirection:"row",paddingVertical:EStyleSheet.value("15rem"),borderTopWidth:0.5,borderColor:"grey"}}>
                                    <View style={{flex:1}}>
                                        <Text style={{fontWeight:"bold"}}>Jumlah Bayar</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontWeight:"bold"}}>Rp. {formatRupiah(totalDibayar)}</Text>
                                    </View>
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