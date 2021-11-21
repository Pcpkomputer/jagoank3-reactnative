import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef, useContext} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, Pressable, ActivityIndicator, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 
import Svg, { Path, Circle } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

import { StatusBarHeight } from '../utils/HeightUtils';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { CommonActions } from '@react-navigation/native';
import Collapsible from 'react-native-collapsible';

import {GlobalContext} from '../App';
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

export default function DetailIdentitasCheckoutShopScreen(props){

    let globalContext = useContext(GlobalContext);

    let [pembayaranLoading, setPembayaranLoading] = useState(false);

    let [invoice, setInvoice] = useState(null);

    let [dataLoaded, setDataLoaded] = useState(false);

    let [deskripsiHidden, setDeskripsHidden] = useState(false);

    useEffect(()=>{    
        //console.log(globalContext.credentials);
        setTimeout(() => {
            setDataLoaded(true);
        }, 1000);
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
                    <Text style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>Detail Kontak</Text>
                </View>
            </View>
            {
                (dataLoaded) &&
                (pembayaranLoading) ?
                <View
                style={{position:"absolute",bottom:0,opacity:0.5,zIndex:999,backgroundColor:"rgb(38, 180, 149)",justifyContent:"center",alignItems:"center",paddingHorizontal:EStyleSheet.value("30rem"),width:"100%",height:EStyleSheet.value("60rem")}}>
                    <ActivityIndicator color="white"/>
                </View>
                :
                <Pressable 
                onPress={async ()=>{
                    if(globalContext.keranjangShop.length>0){
                        setPembayaranLoading(true);
                    let payload = {
                        credentials:globalContext.credentials,
                        pemesanan:globalContext.keranjangShop,
                        totaldibayarfrontend:props.route.params.totalDibayar
                    };
                    let request = await fetch(`${endpoint}/createinvoiceshop`,{
                        method:"POST",
                        headers:{
                            "content-type":"application/json",
                            "authorization":`Bearer ${globalContext.credentials.token}`
                        },
                        body:JSON.stringify(payload)
                    });
                    let response = await request.json();
                    
                    setPembayaranLoading(false);

                    if(response.success){
                        globalContext.setKeranjangShop([]);
                        setInvoice(response);
                        props.navigation.dispatch(state => {
                            // Remove the home route from the stack
                            let routes = state.routes.filter(r => !r.name.match(/(DetailItemCheckoutShop|DetailIdentitasCheckoutShop)/));

                            routes = [
                                ...routes,
                                {
                                    name:"InvoiceShop",
                                    params:{
                                        item:response
                                    }
                                }
                            ];
                          
                            return CommonActions.reset({
                              ...state,
                              routes,
                              index: routes.length - 1,
                            });
                          });
                    }
                    else{
                        alert(response.msg);
                    }
                    

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
                            <Text style={{color:"rgb(38, 180, 149)",padding:EStyleSheet.value("20rem"),fontWeight:"bold",fontSize:EStyleSheet.value("18rem")}}>Data Peserta</Text>
                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("10rem")}}>
                                <Text style={{color:"grey"}}>Nama Lengkap</Text>
                                <View style={{backgroundColor:"whitesmoke",marginTop:EStyleSheet.value("10rem"),borderBottomWidth:0.7,borderColor:"grey"}}>
                                        <TextInput disabled={true} value={globalContext.credentials.detail.nama} style={{paddingHorizontal:EStyleSheet.value("10rem")}} />
                                </View>
                            </View>
                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("10rem")}}>
                                <Text style={{color:"grey"}}>No. Hp</Text>
                                <View style={{backgroundColor:"whitesmoke",marginTop:EStyleSheet.value("10rem"),borderBottomWidth:0.7,borderColor:"grey"}}>
                                        <TextInput disabled={true} value={globalContext.credentials.detail.notelepon} style={{paddingHorizontal:EStyleSheet.value("10rem")}}/>
                                </View>
                            </View>
                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("10rem")}}>
                                <Text style={{color:"grey"}}>Email</Text>
                                <View style={{backgroundColor:"whitesmoke",marginTop:EStyleSheet.value("10rem"),borderBottomWidth:0.7,borderColor:"grey"}}>
                                        <TextInput disabled={true} value={globalContext.credentials.detail.email} style={{paddingHorizontal:EStyleSheet.value("10rem")}}/>
                                </View>
                            </View>
                            {/* <View style={{paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("10rem")}}>
                                <Text style={{color:"grey"}}>Kode Referral</Text>
                                <View style={{backgroundColor:"white",marginTop:EStyleSheet.value("10rem"),borderBottomWidth:0.7,borderColor:"grey"}}>
                                        <TextInput disabled={true} style={{paddingHorizontal:EStyleSheet.value("10rem")}}/>
                                </View>
                            </View> */}
                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),marginTop:EStyleSheet.value("10rem")}}>
                                <Text style={{lineHeight:25,color:"grey"}}>Masukkan kode referral dapatkan potongan hingga 100ribu.</Text>
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