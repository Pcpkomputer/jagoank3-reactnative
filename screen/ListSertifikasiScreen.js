import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, Pressable, ActivityIndicator, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons, AntDesign, MaterialIcons } from '@expo/vector-icons'; 
import Svg, { Path, Circle } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

import { StatusBarHeight } from '../utils/HeightUtils';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })


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
        height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 3,
}

export default function ListSertifikasiScreen(props){

    let refSwiper = useRef();

    let getMonth = (month) =>{

        let monthIndex = new Date(month).getMonth()+1;

        switch (monthIndex) {
            case 1:
                return "Januari"+" "+new Date(month).getFullYear();
                break;
            case 2:
                return "Februari"+" "+new Date(month).getFullYear();
                break;
            case 3:
                return "Maret"+" "+new Date(month).getFullYear();
                break;
            case 4:
                return "April"+" "+new Date(month).getFullYear();
                break;
            case 5:
                return "Mei"+" "+new Date(month).getFullYear();
                break;
            case 6:
                return "Juni"+" "+new Date(month).getFullYear();
                break;
            case 7:
                return "Juli"+" "+new Date(month).getFullYear();
                break;
            case 8:
                return "Agustus"+" "+new Date(month).getFullYear();
                break;
            case 9:
                return "September"+" "+new Date(month).getFullYear();
                break;
            case 10:
                return "Oktober"+" "+new Date(month).getFullYear();
                break;
            case 11:
                return "November"+" "+new Date(month).getFullYear();
                break;
            case 12:
                return "Desember"+" "+new Date(month).getFullYear();
                break;
            default:
                break;
        }
    }

    let [dataLoaded, setDataLoaded] = useState(false);

    let [selectedSwipeIndex, setSelectedSwipeIndex] = useState(0);

    useEffect(()=>{    
        setTimeout(() => {
            setDataLoaded(true);
        }, 1000);
    },[])

    useEffect(()=>{
       
    },[])

    return (
        <View style={{flex:1,backgroundColor:"white"}}>
            <View style={{height:StatusBarHeight}}></View>
            <View style={{...shadow,backgroundColor:"white",flexDirection:"row",paddingHorizontal:EStyleSheet.value("20rem"),alignItems:"center",height:EStyleSheet.value("55rem")}}>
                <Entypo name="chevron-left" size={EStyleSheet.value("20rem")} color="rgb(38, 180, 149)" />
                <View style={{position:"absolute",justifyContent:"center",alignItems:"center",width:Dimensions.get("screen").width}}>
                    <Text style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>Sertifikasi ...</Text>
                </View>
            </View>
            {
                (dataLoaded) &&
                <ScrollView>
                    <View style={{marginVertical:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem")}}>
                        <View style={{backgroundColor:"#f3f3f3",borderWidth:1.5,borderColor:"#e8e8e8",flexDirection:"row",paddingVertical:EStyleSheet.value("5rem"),borderRadius:EStyleSheet.value("30rem")}}>
                            <View style={{paddingHorizontal:EStyleSheet.value("10rem"),paddingLeft:EStyleSheet.value("15rem"),justifyContent:"center",alignItems:"center"}}>
                                <Ionicons name="search" size={EStyleSheet.value("18rem")} color="rgba(0,0,0,0.3)" />
                            </View>
                            <TextInput placeholder="Cari Sertifikasi..." style={{height:EStyleSheet.value("35rem"),color:"grey",flex:1}}></TextInput>
                            <View style={{paddingHorizontal:EStyleSheet.value("5rem"),paddingRight:EStyleSheet.value("15rem"),justifyContent:"center",alignItems:"center"}}>
                                <AntDesign name="closecircle" size={EStyleSheet.value("18rem")} color="rgba(0,0,0,0.3)" />
                            </View>
                        </View>
                    </View>
                    <View style={{paddingHorizontal:EStyleSheet.value("20rem"),flexDirection:"row",marginBottom:EStyleSheet.value("20rem")}}>
                        <Pressable 
                        android_ripple={{
                            color:"#e8e8e8"
                        }}
                        onPress={()=>{
                            if(selectedSwipeIndex===2){
                                setSelectedSwipeIndex(0);
                                refSwiper.current.scrollBy(-2);
                            }
                            else if(selectedSwipeIndex>0){
                                setSelectedSwipeIndex(0);
                                refSwiper.current.scrollBy(-1);
                            }
                            else{
                                setSelectedSwipeIndex(0);
                            }
                           
                        }}
                        style={{backgroundColor:(selectedSwipeIndex===0) ? "rgb(38, 180, 149)":"white",flex:1,justifyContent:"center",alignItems:"center",paddingVertical:EStyleSheet.value("10rem"),paddingHorizontal:EStyleSheet.value("5rem"),borderRadius:EStyleSheet.value("5rem")}}>
                            <Text style={{color:(selectedSwipeIndex===0) ? "white":"grey"}}>{getMonth(new Date(new Date().setMonth(new Date().getMonth())).toString())}</Text>
                        </Pressable>
                        <Pressable 
                        android_ripple={{
                            color:"#e8e8e8"
                        }}
                        onPress={()=>{
                            if(selectedSwipeIndex>1){
                                setSelectedSwipeIndex(1);
                                refSwiper.current.scrollBy(-1);
                            }
                            else if(selectedSwipeIndex<1){
                                setSelectedSwipeIndex(1);
                                refSwiper.current.scrollBy(1);
                            }
                            else{
                                setSelectedSwipeIndex(1);
                            }
                        }}
                        style={{backgroundColor:(selectedSwipeIndex===1) ? "rgb(38, 180, 149)":"white",flex:1,justifyContent:"center",alignItems:"center",paddingVertical:EStyleSheet.value("10rem"),paddingHorizontal:EStyleSheet.value("5rem"),borderRadius:EStyleSheet.value("5rem")}}>
                            <Text style={{color:(selectedSwipeIndex===1) ? "white":"grey"}}>{getMonth(new Date(new Date().setMonth(new Date().getMonth()+1)).toString())}</Text>
                        </Pressable>
                        <Pressable 
                        android_ripple={{
                            color:"#e8e8e8"
                        }}
                        onPress={()=>{
                            if(selectedSwipeIndex===0){
                                setSelectedSwipeIndex(2);
                                refSwiper.current.scrollBy(2);
                            }
                            else if(selectedSwipeIndex>2){
                                setSelectedSwipeIndex(2);
                                refSwiper.current.scrollBy(-1);
                            }
                            else if(selectedSwipeIndex<2){
                                setSelectedSwipeIndex(2);
                                refSwiper.current.scrollBy(1);
                            }
                            else{
                                setSelectedSwipeIndex(2);
                            }
                        }}
                        style={{backgroundColor:(selectedSwipeIndex===2) ? "rgb(38, 180, 149)":"white",flex:1,justifyContent:"center",alignItems:"center",paddingVertical:EStyleSheet.value("10rem"),paddingHorizontal:EStyleSheet.value("5rem"),borderRadius:EStyleSheet.value("5rem")}}>
                            <Text style={{color:(selectedSwipeIndex===2) ? "white":"grey"}}>{getMonth(new Date(new Date().setMonth(new Date().getMonth()+2)).toString())}</Text>
                        </Pressable>
                    </View>
                    <Swiper 
                    ref={refSwiper}
                    onIndexChanged={(index)=>{
                        if(index<0){
                            setSelectedSwipeIndex(0);
                        }
                        else if(index>2){
                            setSelectedSwipeIndex(2);
                        }
                        else{
                            setSelectedSwipeIndex(index);
                        }
                        
                    }}
                    style={{height:"100%"}} showsPagination={false} loop={false} showsButtons={false}>
                        <View style={{}}>
                            <FlatList
                            contentContainerStyle={{padding:EStyleSheet.value("20rem"),paddingVertical:0}}
                            data={[1,2,3,4,5]}
                            renderItem={({item,index})=>{
                                return (
                                    <Pressable 
                                    onPress={()=>{
                                        props.navigation.navigate("DetailSertifikasi");
                                    }}
                                    style={{...shadow2,borderRadius:EStyleSheet.value("10rem"),backgroundColor:"white",marginBottom:EStyleSheet.value("15rem"),padding:EStyleSheet.value("20rem")}}>
                                        <Text style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>Insiden Investigasi Batch 6</Text>
                                        <View style={{flexDirection:"row",marginTop:EStyleSheet.value("10rem")}}>
                                            <View style={{flex:1}}>
                                                <View style={{flexDirection:"row",alignItems:"center"}}>
                                                    <MaterialIcons name="date-range" size={EStyleSheet.value("16rem")} style={{marginRight:EStyleSheet.value("3rem")}} color="black" />
                                                    <Text style={{fontSize:EStyleSheet.value("13rem"),fontWeight:"bold",marginBottom:EStyleSheet.value("3rem")}}>20 November 2021</Text>
                                                </View>
                                                <View style={{flexDirection:"row",alignItems:"center",marginTop:EStyleSheet.value("5rem")}}>
                                                    <MaterialIcons name="place" size={EStyleSheet.value("15rem")} color="black" />
                                                    <Text style={{fontSize:EStyleSheet.value("13rem"),fontWeight:"bold"}}>-</Text>
                                                </View>
                                               
                                            </View>
                                            <View style={{flex:1,alignItems:"flex-end"}}>
                                                <Text style={{fontWeight:"bold",color:"red",textDecorationLine:"line-through"}}>Rp. 7.000.000</Text>
                                                <Text style={{fontWeight:"bold",fontSize:EStyleSheet.value("15rem")}}>Rp. 4.500.000</Text>
                                            </View>
                                        </View>
                                    </Pressable>
                                )
                            }}
                            />
                        </View>
                        <View>
                        <FlatList
                            contentContainerStyle={{padding:EStyleSheet.value("20rem"),paddingVertical:0}}
                            data={[1,2,3,4,5]}
                            renderItem={({item,index})=>{
                                return (
                                    <View style={{...shadow2,borderRadius:EStyleSheet.value("10rem"),backgroundColor:"white",marginBottom:EStyleSheet.value("15rem"),padding:EStyleSheet.value("20rem")}}>
                                        <Text style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>Insiden Investigasi Batch 6</Text>
                                        <View style={{flexDirection:"row",marginTop:EStyleSheet.value("10rem")}}>
                                            <View style={{flex:1}}>
                                                <View style={{flexDirection:"row",alignItems:"center"}}>
                                                    <MaterialIcons name="date-range" size={EStyleSheet.value("16rem")} style={{marginRight:EStyleSheet.value("3rem")}} color="black" />
                                                    <Text style={{fontSize:EStyleSheet.value("13rem"),fontWeight:"bold",marginBottom:EStyleSheet.value("3rem")}}>20 November 2021</Text>
                                                </View>
                                                <View style={{flexDirection:"row",alignItems:"center",marginTop:EStyleSheet.value("5rem")}}>
                                                    <MaterialIcons name="place" size={EStyleSheet.value("15rem")} color="black" />
                                                    <Text style={{fontSize:EStyleSheet.value("13rem"),fontWeight:"bold"}}>-</Text>
                                                </View>
                                               
                                            </View>
                                            <View style={{flex:1,alignItems:"flex-end"}}>
                                                <Text style={{fontWeight:"bold",color:"red",textDecorationLine:"line-through"}}>Rp. 7.000.000</Text>
                                                <Text style={{fontWeight:"bold",fontSize:EStyleSheet.value("15rem")}}>Rp. 4.500.000</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            }}
                            />
                        </View>
                        <View>
                        <FlatList
                            contentContainerStyle={{padding:EStyleSheet.value("20rem"),paddingVertical:0}}
                            data={[1,2,3,4,5]}
                            renderItem={({item,index})=>{
                                return (
                                    <View style={{...shadow2,borderRadius:EStyleSheet.value("10rem"),backgroundColor:"white",marginBottom:EStyleSheet.value("15rem"),padding:EStyleSheet.value("20rem")}}>
                                        <Text style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>Insiden Investigasi Batch 6</Text>
                                        <View style={{flexDirection:"row",marginTop:EStyleSheet.value("10rem")}}>
                                            <View style={{flex:1}}>
                                                <View style={{flexDirection:"row",alignItems:"center"}}>
                                                    <MaterialIcons name="date-range" size={EStyleSheet.value("16rem")} style={{marginRight:EStyleSheet.value("3rem")}} color="black" />
                                                    <Text style={{fontSize:EStyleSheet.value("13rem"),fontWeight:"bold",marginBottom:EStyleSheet.value("3rem")}}>20 November 2021</Text>
                                                </View>
                                                <View style={{flexDirection:"row",alignItems:"center",marginTop:EStyleSheet.value("5rem")}}>
                                                    <MaterialIcons name="place" size={EStyleSheet.value("15rem")} color="black" />
                                                    <Text style={{fontSize:EStyleSheet.value("13rem"),fontWeight:"bold"}}>-</Text>
                                                </View>
                                               
                                            </View>
                                            <View style={{flex:1,alignItems:"flex-end"}}>
                                                <Text style={{fontWeight:"bold",color:"red",textDecorationLine:"line-through"}}>Rp. 7.000.000</Text>
                                                <Text style={{fontWeight:"bold",fontSize:EStyleSheet.value("15rem")}}>Rp. 4.500.000</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            }}
                            />
                        </View>
                    </Swiper>
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