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

export default function ShopScreen(props){

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
                    <Text style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>Shop</Text>
                </View>
            </View>
            {
                (dataLoaded) &&
                <ScrollView>
                <View style={{marginVertical:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem")}}>
                    <View style={{backgroundColor:"white",borderWidth:1.5,borderColor:"#e8e8e8",flexDirection:"row",paddingVertical:EStyleSheet.value("5rem"),borderRadius:EStyleSheet.value("30rem")}}>
                        <View style={{paddingHorizontal:EStyleSheet.value("10rem"),paddingLeft:EStyleSheet.value("15rem"),justifyContent:"center",alignItems:"center"}}>
                            <Ionicons name="search" size={EStyleSheet.value("18rem")} color="rgba(0,0,0,0.3)" />
                        </View>
                        <TextInput placeholder="Cari Produk..." style={{height:EStyleSheet.value("35rem"),color:"grey",flex:1}}></TextInput>
                        <View style={{paddingHorizontal:EStyleSheet.value("5rem"),paddingRight:EStyleSheet.value("15rem"),justifyContent:"center",alignItems:"center"}}>
                            <AntDesign name="closecircle" size={EStyleSheet.value("18rem")} color="rgba(0,0,0,0.3)" />
                        </View>
                    </View>
                </View>
                {/* <View style={{backgroundColor:"red",marginHorizontal:EStyleSheet.value("20rem")}}><Text>debug</Text></View> */}
                <FlatList
                numColumns={2}
                contentContainerStyle={{paddingHorizontal:EStyleSheet.value("20rem")}}
                keyExtractor={(item,index)=>`modulpelatihan-${index}`}
                data={["tes123","Member Card Gratis + E-Card Flazz + Jaket Bomber Paket A","Member Card Gratis + E-Card Flazz + Jaket Bombeasdasdsadsadsadsadsadadsadr Paket A",4,5,6,7,8,9,10,11,12,13,14,15]}
                renderItem={({item,index})=>{
                    return (
                        <View style={{backgroundColor:"white",overflow:"hidden",borderRadius:EStyleSheet.value("15rem"),borderWidth:1.5,borderColor:"#e8e8e8",marginBottom:EStyleSheet.value("15rem"),width:EStyleSheet.value('162.5rem'),marginRight:EStyleSheet.value("15rem")}}>
                            <View style={{backgroundColor:"whitesmoke",height:EStyleSheet.value("140rem")}}>
                                <Text>123</Text>
                            </View>
                            <View style={{marginTop:EStyleSheet.value("10rem"),height:EStyleSheet.value("60rem"),paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text numberOfLines={3}>{item}</Text>
                            </View>
                            <View style={{marginTop:EStyleSheet.value("5rem"),paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{color:"grey",fontSize:EStyleSheet.value("12rem")}}>1 pcs, Harga</Text>
                            </View>
                            <View style={{marginTop:EStyleSheet.value("10rem"),paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold"}}>Rp. 300000</Text>
                            </View>
                            <View style={{backgroundColor:"rgb(38, 180, 149)",flex:1,overflow:"hidden",marginTop:EStyleSheet.value("15rem"),justifyContent:"center",alignItems:"center",padding:EStyleSheet.value("15rem")}}>
                                <Text numberOfLines={1} style={{fontSize:EStyleSheet.value("13rem"),color:"white"}}>Tambah Ke Keranjang</Text>
                            </View>
                        </View>
                      )
                }}
                />
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