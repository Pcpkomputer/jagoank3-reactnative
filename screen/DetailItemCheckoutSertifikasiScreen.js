import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, Pressable, ActivityIndicator, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 
import Svg, { Path, Circle } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

import { StatusBarHeight } from '../utils/HeightUtils';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

export default function DetailItemCheckoutSertifikasiScreen(props){

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
                <Entypo name="chevron-left" size={EStyleSheet.value("20rem")} color="rgb(38, 180, 149)" />
                <View style={{position:"absolute",justifyContent:"center",alignItems:"center",width:Dimensions.get("screen").width}}>
                    <Text style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>Pemesanan Anda</Text>
                </View>
            </View>
            {
                (dataLoaded) &&
                <Pressable 
                onPress={()=>{
                    props.navigation.navigate("InvoiceSertifikasi");
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
                                
                            </View>



                            {/* Batas Garis */}
                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("10rem")}}>
                                <View style={{borderTopWidth:0.5,flexDirection:"row",paddingVertical:EStyleSheet.value("15rem"),borderColor:"grey"}}>
                                    <View style={{flex:1}}>
                                        <Text style={{fontWeight:"bold"}}>Kode Voucher</Text>
                                        <View style={{marginTop:EStyleSheet.value("12rem")}}>
                                            <Text style={{backgroundColor:"whitesmoke",color:"grey",paddingVertical:EStyleSheet.value("8rem"),borderRadius:EStyleSheet.value("5rem"),paddingHorizontal:EStyleSheet.value("8rem")}}>#####</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("10rem")}}>
                                <View style={{borderTopWidth:0.5,flexDirection:"row",borderBottomWidth:0.5,paddingVertical:EStyleSheet.value("15rem"),borderColor:"grey"}}>
                                    <View style={{flex:1}}>
                                        <Text style={{fontWeight:"bold"}}>Promo Ahli K3 Batch Enak</Text>
                                    </View>
                                    <View>
                                        <Text>Rp. 8.000.000</Text>
                                    </View>
                                </View>
                            </View>


                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("10rem")}}>
                                <View style={{flexDirection:"row",paddingVertical:EStyleSheet.value("15rem"),borderColor:"grey"}}>
                                    <View style={{flex:1}}>
                                        <Text style={{fontWeight:"bold"}}>Jumlah Bayar</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontWeight:"bold"}}>Rp. 8.000.000</Text>
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