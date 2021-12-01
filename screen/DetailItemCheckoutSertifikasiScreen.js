import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef, useContext} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, Pressable, ActivityIndicator, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 
import Svg, { Path, Circle } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

import { StatusBarHeight } from '../utils/HeightUtils';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Collapsible from 'react-native-collapsible';
import { GlobalContext } from '../App';

import {toLocaleTimestamp, formatRupiah} from '../utils/utils';
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

export default function DetailItemCheckoutSertifikasiScreen(props){

    let globalContext = useContext(GlobalContext);

    let [dataLoaded, setDataLoaded] = useState(false);

    let [deskripsiHidden, setDeskripsHidden] = useState(false);

    let [pemesananLoading, setPemesananLoading] = useState(false);

    useEffect(()=>{    
        setTimeout(() => {
            setDataLoaded(true);
        }, 1000);
    },[])

    let [jumlahBayar, setJumlahBayar] = useState(0);

    let stillPromo = (date)=>{
        let now = new Date().getTime();
        let d = new Date(date.replace(/-/g,"/")).getTime();
        return d>now;
    }



    useEffect(()=>{
        let total = 0;
        let diskon = 0;
        globalContext.pemesanan.keranjang.map((item,index)=>{
            if(item.itemtraining.sedangpromo){
                let promosudahlewat = new Date().getTime()>new Date(item.itemtraining.tanggalpromoberakhir.replace(/-/g,"/")).getTime();
                if(promosudahlewat){
                    total = total+item.itemtraining.hargapaketpelatihan;
                }
                else{
                    total = total+item.itemtraining.hargapromopaketpelatihan;
                }
            }
            else{
                total = total+item.itemtraining.hargapaketpelatihan;
            }
        });
        
        if(globalContext.pemesanan.diskon===null){
            diskon = 0;
        }
        else{
            diskon = globalContext.pemesanan.diskon.nominal;
        }
    
        // if(referral){
        //     referral = globalContext.pemesanan?.keranjang[0]?.training.nominalpemotonganreferral || 0;
        // }   
        // else{
        //     referral=0;
        // }
    
        let t = total-(diskon);
        setJumlahBayar(t);
    
      },[]);


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
                (dataLoaded) ?
                (pemesananLoading) ?
                <View
                style={{position:"absolute",bottom:0,zIndex:999,backgroundColor:"rgb(38, 180, 149)",justifyContent:"center",alignItems:"center",paddingHorizontal:EStyleSheet.value("30rem"),width:"100%",height:EStyleSheet.value("60rem")}}>
                    <ActivityIndicator color="white"/>
                </View>
                :
                <Pressable 
                onPress={async ()=>{

                    setPemesananLoading(true);
                    
                    let payload = {
                        pemesanan:globalContext.pemesanan,
                        credentials:globalContext.credentials,
                        referral:null,
                        totaldibayarfrontend:jumlahBayar

                    };

                   
                    let request = await fetch(`${endpoint}/createinvoice`,{
                        method:"POST",
                        headers:{
                            "content-type":"application/json",
                            "authorization":`Bearer ${globalContext.credentials.token}`
                        },
                        body:JSON.stringify(payload)
                    });
                    let json = await request.json();

                    console.log(json);

                    if(json.success){
                        props.navigation.navigate("InvoiceSertifikasi",{item:json});
                        setPemesananLoading(false);
                    }
                    else{
                        alert(json.msg);
                        setPemesananLoading(false);
                    }


                    
                }}
                android_ripple={{
                    color:"#e8e8e8"
                }}
                style={{position:"absolute",bottom:0,zIndex:999,backgroundColor:"rgb(38, 180, 149)",justifyContent:"center",alignItems:"center",paddingHorizontal:EStyleSheet.value("30rem"),width:"100%",height:EStyleSheet.value("60rem")}}>
                    <Text style={{color:"white",fonPressableght:"bold",fontSize:EStyleSheet.value("18rem")}}>Proses Pemesanan</Text>
                </Pressable>
                :
                null
            }
            {
                (dataLoaded) &&
                <ScrollView style={{backgroundColor:"whitesmoke"}}>
                    <View style={{paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("70rem"),paddingBottom:EStyleSheet.value("20rem"),zIndex:1,paddingTop:EStyleSheet.value("20rem")}}>
                        <View style={{...shadow,backgroundColor:"white",paddingBottom:EStyleSheet.value("30rem"),borderBottomRightRadius:EStyleSheet.value("20rem"),borderBottomLeftRadius:EStyleSheet.value("20rem"),borderTopRightRadius:EStyleSheet.value("20rem"),borderTopLeftRadius:EStyleSheet.value("20rem")}}>
                            <Text style={{color:"rgb(38, 180, 149)",padding:EStyleSheet.value("20rem"),fontWeight:"bold",fontSize:EStyleSheet.value("18rem")}}>Pemesanan Anda</Text>
                            {
                                globalContext.pemesanan.keranjang.map((item,index)=>{
                                    console.log(item);
                                    return (
                                         <View style={{paddingHorizontal:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("10rem")}}>
                                            <View style={{borderTopWidth:0.5,flexDirection:"row",paddingVertical:EStyleSheet.value("15rem"),borderColor:"grey"}}>
                                                <View style={{flex:1}}>
                                                    <Text style={{fontWeight:"bold"}}>{item.training.namatraining}</Text>
                                                    <View style={{marginTop:EStyleSheet.value("5rem")}}>
                                                        <Text>{toLocaleTimestamp(item.training.jadwaltraining)}</Text>
                                                        <Text style={{marginTop:EStyleSheet.value("5rem"),fontWeight:"bold"}}>Rp. {stillPromo(item.itemtraining.tanggalpromoberakhir) ? formatRupiah(item.itemtraining.hargapromopaketpelatihan):formatRupiah(item.itemtraining.hargapaketpelatihan)}</Text>
                                                    </View>
                                                </View>
                                                <View>
                                                    <View style={{width:EStyleSheet.value("80rem"),height:EStyleSheet.value("80rem"),backgroundColor:"whitesmoke"}}>
                                                         <Image style={{width:"100%",height:"100%"}} source={{uri:`${endpoint.replace("/api","")}/storage/public/training/${item.foto}`}}/>
                                                    </View>
                                                </View>
                                            </View>
                                            
                                        </View>
                                    )
                                })
                            }
                            
                            {/* <View style={{paddingHorizontal:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("10rem")}}>
                                <View style={{borderTopWidth:0.5,flexDirection:"row",paddingVertical:EStyleSheet.value("15rem"),borderColor:"grey"}}>
                                    <View style={{flex:1}}>
                                        <Text style={{fontWeight:"bold"}}>Ahli K3 Umum Batch 121</Text>
                                        <View style={{marginTop:EStyleSheet.value("5rem")}}>
                                            <Text>22 November 2021</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <View style={{width:EStyleSheet.value("80rem"),height:EStyleSheet.value("80rem"),backgroundColor:"whitesmoke"}}>
                                            <Text>1</Text>
                                        </View>
                                    </View>
                                </View>
                                
                            </View>
                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("10rem")}}>
                                <View style={{borderTopWidth:0.5,flexDirection:"row",paddingVertical:EStyleSheet.value("15rem"),borderColor:"grey"}}>
                                    <View style={{flex:1}}>
                                        <Text style={{fontWeight:"bold"}}>Ahli K3 Umum Batch 121</Text>
                                        <View style={{marginTop:EStyleSheet.value("5rem")}}>
                                            <Text>22 November 2021</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <View style={{width:EStyleSheet.value("80rem"),height:EStyleSheet.value("80rem"),backgroundColor:"whitesmoke"}}>
                                            <Text>1</Text>
                                        </View>
                                    </View>
                                </View>
                                 */}
                            {/* </View> */}



                            {/* Batas Garis */}
                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("10rem")}}>
                                <View style={{borderTopWidth:0.5,flexDirection:"row",paddingVertical:EStyleSheet.value("15rem"),borderColor:"grey"}}>
                                    <View style={{flex:1}}>
                                        <Text style={{fontWeight:"bold"}}>Kode Voucher</Text>
                                        {
                                            globalContext.pemesanan.voucher!==null ? 
                                            <View style={{marginTop:EStyleSheet.value("12rem")}}>
                                                <Text style={{backgroundColor:"whitesmoke",color:"grey",paddingVertical:EStyleSheet.value("8rem"),borderRadius:EStyleSheet.value("5rem"),paddingHorizontal:EStyleSheet.value("8rem")}}>{globalContext.pemesanan.voucher.kode_voucher}</Text>
                                            </View>
                                            :
                                            <View style={{marginTop:EStyleSheet.value("12rem")}}>
                                            <Text style={{backgroundColor:"whitesmoke",color:"grey",paddingVertical:EStyleSheet.value("8rem"),borderRadius:EStyleSheet.value("5rem"),paddingHorizontal:EStyleSheet.value("8rem")}}>#####</Text>
                                        </View>
                                        }
                                    </View>
                                </View>
                            </View>

                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("10rem")}}>
                                <View style={{borderTopWidth:0.5,flexDirection:"row",borderBottomWidth:0.5,paddingVertical:EStyleSheet.value("15rem"),borderColor:"grey"}}>
                                    <View style={{flex:1}}>
                                        {
                                            globalContext.pemesanan.voucher!==null && 
                                            <Text style={{fontWeight:"bold"}}>Promo Voucher {globalContext.pemesanan.voucher.kode_voucher}</Text>
                                        }
                                    </View>
                                   {
                                       globalContext.pemesanan.voucher!==null &&
                                       <View>
                                       <Text>Rp. {formatRupiah(globalContext.pemesanan.voucher.nominal)}</Text>
                                   </View>
                                   }
                                </View>
                            </View>


                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("10rem")}}>
                                <View style={{flexDirection:"row",paddingVertical:EStyleSheet.value("15rem"),borderColor:"grey"}}>
                                    <View style={{flex:1}}>
                                        <Text style={{fontWeight:"bold"}}>Jumlah Bayar</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontWeight:"bold"}}>Rp. {formatRupiah(jumlahBayar)}</Text>
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