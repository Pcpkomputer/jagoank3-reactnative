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

export default function DetailSertifikasiScreen(props){

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
                 <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=>{
                    props.navigation.goBack();
                }}
                >
                    <Entypo name="chevron-left" size={EStyleSheet.value("20rem")} color="rgb(38, 180, 149)" />
                </TouchableOpacity>
                <View style={{position:"absolute",justifyContent:"center",alignItems:"center",width:Dimensions.get("screen").width}}>
                    <Text style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>Insiden Investigasi Batch 6</Text>
                </View>
            </View>
            {
                (dataLoaded) &&
                <Pressable 
                onPress={()=>{
                    props.navigation.navigate("DetailIdentitasCheckoutSertifikasi");
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
                    <View style={{paddingHorizontal:EStyleSheet.value("20rem"),zIndex:1,paddingTop:EStyleSheet.value("20rem")}}>
                        <View style={{...shadow,backgroundColor:"white",borderTopRightRadius:EStyleSheet.value("20rem"),borderTopLeftRadius:EStyleSheet.value("20rem")}}>
                            <Text style={{color:"grey",padding:EStyleSheet.value("20rem"),justifyContent:"center",alignItems:"center",textAlign:"center"}}>Pembinaan & Sertifikasi Operator K3 Umum BNS asdsadsadasdsandsiadnaidnaidnaaskldalkdsalkdsamldmakP</Text>
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
                        <View style={{paddingHorizontal:EStyleSheet.value("20rem"),paddingBottom:EStyleSheet.value("20rem")}}>
                            <View style={{backgroundColor:"#fafafa",paddingBottom:EStyleSheet.value("10rem"),marginBottom:EStyleSheet.value("20rem"),borderRadius:EStyleSheet.value("10rem"),borderWidth:5,borderColor:"#fe0000"}}>
                                <View style={{paddingVertical:EStyleSheet.value("10rem"),justifyContent:"center",alignItems:"center",paddingHorizontal:EStyleSheet.value("50rem")}}>
                                    <Text style={{textAlign:"center",fontWeight:'bold',color:"#fe0000"}}>Harga Earlybird Operator K3 Umum akan berakhir dalammmmmmmmmmmmmmmksmksmadkddnaskdmamdsmdsamdmsmmmmmmmmmmsdfkjdsfjsdfjsldjfsdklfjdsklfjsdlkfjdlsfjdslfjdslfj</Text>
                                </View>
                                <View style={{paddingVertical:EStyleSheet.value("10rem"),marginBottom:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("10rem"),flexDirection:"row",marginTop:EStyleSheet.value("10rem")}}>
                                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                                        <View style={{backgroundColor:"#fe0000",justifyContent:"center",alignItems:"center",borderRadius:EStyleSheet.value("15rem"),width:EStyleSheet.value("50rem"),height:EStyleSheet.value("50rem")}}>
                                            <Text style={{color:"white",fontSize:EStyleSheet.value("23rem"),fontWeight:"bold"}}>08</Text>
                                        </View>
                                        <Text style={{marginTop:EStyleSheet.value("5rem"),fontSize:EStyleSheet.value("12rem"),color:"#fe0000",fontWeight:"bold"}}>HARI</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                                        <View style={{backgroundColor:"#fe0000",justifyContent:"center",alignItems:"center",borderRadius:EStyleSheet.value("15rem"),width:EStyleSheet.value("50rem"),height:EStyleSheet.value("50rem")}}>
                                            <Text style={{color:"white",fontSize:EStyleSheet.value("23rem"),fontWeight:"bold"}}>08</Text>
                                        </View>
                                        <Text style={{marginTop:EStyleSheet.value("5rem"),fontSize:EStyleSheet.value("12rem"),color:"#fe0000",fontWeight:"bold"}}>JAM</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                                        <View style={{backgroundColor:"#fe0000",justifyContent:"center",alignItems:"center",borderRadius:EStyleSheet.value("15rem"),width:EStyleSheet.value("50rem"),height:EStyleSheet.value("50rem")}}>
                                            <Text style={{color:"white",fontSize:EStyleSheet.value("23rem"),fontWeight:"bold"}}>08</Text>
                                        </View>
                                        <Text style={{marginTop:EStyleSheet.value("5rem"),fontSize:EStyleSheet.value("12rem"),color:"#fe0000",fontWeight:"bold"}}>MENIT</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                                        <View style={{backgroundColor:"#fe0000",justifyContent:"center",alignItems:"center",borderRadius:EStyleSheet.value("15rem"),width:EStyleSheet.value("50rem"),height:EStyleSheet.value("50rem")}}>
                                            <Text style={{color:"white",fontSize:EStyleSheet.value("23rem"),fontWeight:"bold"}}>08</Text>
                                        </View>
                                        <Text style={{marginTop:EStyleSheet.value("5rem"),fontSize:EStyleSheet.value("12rem"),color:"#fe0000",fontWeight:"bold"}}>DETIK</Text>
                                    </View>
                                </View>
                                <View style={{justifyContent:"flex-end",alignItems:"flex-end",paddingHorizontal:EStyleSheet.value("20rem")}}>
                                    <Text style={{fontWeight:"bold",color:"#fe0000",textDecorationLine:"line-through"}}>Rp. 5.500.000</Text>
                                </View>
                                <View style={{justifyContent:"space-between",flexDirection:"row",marginBottom:EStyleSheet.value("10rem"),alignItems:"space-between",paddingHorizontal:EStyleSheet.value("20rem")}}>
                                    <View style={{borderWidth:1.5,borderColor:"#fe0000",borderRadius:EStyleSheet.value("30rem"),paddingHorizontal:EStyleSheet.value("10rem"),paddingVertical:EStyleSheet.value("5rem")}}>
                                        <Text style={{color:"#fe0000"}}>Yang Anda Pilih</Text>
                                    </View>
                                    <Text style={{fontWeight:"bold",color:"#fe0000",fontSize:EStyleSheet.value("27rem"),color:"rgb(38, 180, 149)"}}>Rp. 5.500.000</Text>
                                </View>
                            </View>
                            <View style={{backgroundColor:"#fafafa",borderRadius:EStyleSheet.value("10rem"),padding:EStyleSheet.value("20rem")}}>
                                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                                     <Text style={{flex:1,paddingRight:EStyleSheet.value("20rem")}}>Promo Operator K3 Umsdaioasoidsaoindoiandioasndoiasndoiasndiosandosaindasum</Text>
                                     <Text style={{fontWeight:"bold",color:"#fe0000",textDecorationLine:"line-through"}}>Rp. 5.500.000</Text>
                                </View>
                                <View style={{flexDirection:"row",marginTop:EStyleSheet.value("10rem"),justifyContent:"space-between",alignItems:"center"}}>
                                    <View style={{borderWidth:1.5,borderColor:"#fe0000",opacity:0,borderRadius:EStyleSheet.value("30rem"),paddingHorizontal:EStyleSheet.value("10rem"),paddingVertical:EStyleSheet.value("5rem")}}>
                                        <Text style={{color:"#fe0000"}}>Yang Anda Pilih</Text>
                                    </View>
                                    <Text style={{fontWeight:"bold",color:"#fe0000",fontSize:EStyleSheet.value("27rem"),color:"rgb(38, 180, 149)"}}>Rp. 5.500.000</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("90rem")}}>
                        <View style={{...shadow,borderBottomLeftRadius:EStyleSheet.value("30rem"),borderBottomRightRadius:EStyleSheet.value("30rem"),backgroundColor:"white"}}>
                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),marginVertical:EStyleSheet.value("20rem")}}>
                                <View style={{backgroundColor:"#ededed",position:"relative",overflow:"hidden",height:EStyleSheet.value("40rem"),borderRadius:EStyleSheet.value("10rem")}}>
                                    <View style={{position:"absolute",width:"50%",backgroundColor:"rgb(38, 180, 140)",height:"100%"}}></View>
                                    <Text style={{color:"black",fontWeight:"bold",textAlign:"center",height:"100%",textAlignVertical:"center"}}>Tersisa 30 dari 30</Text>
                                </View>
                            </View>
                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("20rem")}}>
                                <View style={{backgroundColor:"white",borderColor:"#eb2d2a",borderWidth:1,position:"relative",overflow:"hidden",height:EStyleSheet.value("40rem"),borderRadius:EStyleSheet.value("10rem")}}>
                                    <Text style={{color:"#eb2d2a",fontWeight:"bold",textAlign:"center",height:"100%",textAlignVertical:"center",fontSize:EStyleSheet.value("13rem")}}>0 orang sudah mengikuti sertifikasi ini</Text>
                                </View>
                            </View>
                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("20rem")}}>
                                <Text style={{fontWeight:"bold"}}>Kode Voucher :</Text>
                                <View style={{marginTop:EStyleSheet.value("10rem"),flexDirection:"row",paddingBottom:EStyleSheet.value("0rem"),borderBottomWidth:1}}>
                                    <TextInput style={{flex:1,paddingRight:EStyleSheet.value("20rem")}}/>
                                    <View style={{paddingHorizontal:EStyleSheet.value("20rem"),backgroundColor:"rgb(38, 180, 140)",justifyContent:"center",alignItems:"center"}}>
                                        <Text style={{color:"white"}}>Check</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("20rem")}}>
                                <View style={{marginBottom:EStyleSheet.value("3rem")}}>
                                    <Pressable 
                                    onPress={()=>{
                                        setDeskripsHidden(!deskripsiHidden);
                                    }}
                                    style={{backgroundColor:"white",borderRadius:EStyleSheet.value("5rem"),...shadow2,paddingHorizontal:EStyleSheet.value("20rem"),paddingVertical:EStyleSheet.value("10rem")}}>
                                        <Text>Deskripsi</Text>
                                    </Pressable>
                                    <View style={{}}>
                                        <Collapsible  collapsed={deskripsiHidden}>
                                            <View style={{marginVertical:EStyleSheet.value("10rem")}}>
                                                <Text>123</Text>
                                            </View>
                                        </Collapsible>
                                    </View>
                                </View>
                                <View style={{marginBottom:EStyleSheet.value("3rem")}}>
                                    <Pressable 
                                    onPress={()=>{
                                        setDeskripsHidden(!deskripsiHidden);
                                    }}
                                    style={{backgroundColor:"white",borderRadius:EStyleSheet.value("5rem"),...shadow2,paddingHorizontal:EStyleSheet.value("20rem"),paddingVertical:EStyleSheet.value("10rem")}}>
                                        <Text>Deskripsi</Text>
                                    </Pressable>
                                    <View style={{marginBottom:EStyleSheet.value("50rem")}}>
                                        <Collapsible  collapsed={deskripsiHidden}>
                                            <View style={{marginVertical:EStyleSheet.value("10rem")}}>
                                                <Text>123</Text>
                                            </View>
                                        </Collapsible>
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