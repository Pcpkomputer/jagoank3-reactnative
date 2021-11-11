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

export default function WebinarScreen(props){

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
                    <Text style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>Webinar</Text>
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
                        <TextInput placeholder="Cari E-Book..." style={{height:EStyleSheet.value("35rem"),color:"grey",flex:1}}></TextInput>
                        <View style={{paddingHorizontal:EStyleSheet.value("5rem"),paddingRight:EStyleSheet.value("15rem"),justifyContent:"center",alignItems:"center"}}>
                            <AntDesign name="closecircle" size={EStyleSheet.value("18rem")} color="rgba(0,0,0,0.3)" />
                        </View>
                    </View>
                </View>
                <FlatList
                contentContainerStyle={{paddingHorizontal:EStyleSheet.value("20rem")}}
                keyExtractor={(item,index)=>`modulpelatihan-${index}`}
                data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}
                renderItem={({item,index})=>{
                    return (
                        <Pressable
                        onPress={()=>{
                            //props.navigation.navigate("DetailModulPelatihan");
                        }}
                        >
                        <LinearGradient 
                        colors={['#24b596', '#04a280', '#04a280']}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={{backgroundColor:"#24b596",overflow:"hidden",marginBottom:EStyleSheet.value("15rem"),borderRadius:EStyleSheet.value("5rem"),display:"flex",flexDirection:"row"}}>
                            <View style={{width:EStyleSheet.value("70rem"),justifyContent:"center",alignItems:"center",height:EStyleSheet.value("60rem")}}>
                                <Svg
                                    style={{marginTop:EStyleSheet.value("5rem")}}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={EStyleSheet.value("35rem")}
                                    height={EStyleSheet.value("35rem")}
                                    viewBox="0 0 130 130"
                                    {...props}
                                    >
                                    <Path fill="white" d="M104.097 25.769c-.146-.09-.301-.148-.454-.219a13.196 13.196 0 00-4.054-1.765l-2.828 2.845-2.739-2.876c-.011.002-.021.002-.028.006a13.067 13.067 0 00-3.898 1.646 4.462 4.462 0 00-.885.372c-1.756.987-3.428 1.18-5.256.61-6.06-1.888-11.703-11.133-13.365-14.531a4.358 4.358 0 00-2.01-2.005l-1.208-.402a4.372 4.372 0 00-2.668.37 4.404 4.404 0 00-2.038 5.886c.257.531 1.219 2.447 2.778 4.889l1.039 1.57c3.252 4.732 8.389 10.611 14.829 12.627 1.274.399 2.56.621 3.837.688v23.214c0 1.199.236 2.315.648 3.341-.028.219-.067.436-.067.664l.003 42.183a5.206 5.206 0 0010.413 0l-.002-36.202c.207.01.412.025.619.025.041 0 .082-.004.123-.006l-.002 36.183a5.207 5.207 0 0010.414 0V63.499c.274.262.572.502.92.692a4.407 4.407 0 005.976-1.766c12.426-22.841-4.525-33.238-10.097-36.656zM96.79 49.088h-.053l-2.736-3.745 2.736-18.291h.053l2.736 18.291-2.736 3.745zm11.586 4.996V41.487c1.683 3.182 2.06 7.211 0 12.597z" />
                                    <Circle cx={96.763} cy={11.78} r={11.347} />
                                    <Path fill="white" d="M71.708 63.768H16.112a6.412 6.412 0 01-6.404-6.405V6.404A6.412 6.412 0 0116.112 0h55.596a6.411 6.411 0 016.404 6.404v50.958c-.001 3.532-2.873 6.406-6.404 6.406zM16.112 4.27a2.136 2.136 0 00-2.135 2.135v50.958c0 1.177.957 2.135 2.135 2.135h55.596a2.137 2.137 0 002.135-2.135V6.404a2.136 2.136 0 00-2.135-2.135l-55.596.001z" />
                                    <Circle cx={26.429} cy={79.091} r={8.983} />
                                    <Path fill="white" d="M16.021 108.576c-.267-2.463.231-4.483 1.213-6.188v6.188h9.134l-2.126-2.91 2.166-14.483h.042l2.166 14.483-2.126 2.91h9.134v-6.172c.975 1.701 1.47 3.718 1.204 6.172h7.031c.808-10.78-8.032-16.215-11.455-18.314-.151-.092-.31-.158-.468-.226a10.413 10.413 0 00-3.27-1.44l-2.238 2.252-2.17-2.277-.023.004a10.343 10.343 0 00-3.332 1.464 3.15 3.15 0 00-.461.223c-3.423 2.101-12.263 7.534-11.455 18.313h7.034v.001z" />
                                    <Circle cx={61.403} cy={79.091} r={8.983} />
                                    <Path fill="white" d="M50.996 108.576c-.268-2.463.232-4.483 1.214-6.188v6.188h9.134l-2.126-2.91 2.166-14.483h.042l2.167 14.483-2.127 2.91H70.6v-6.172c.976 1.701 1.47 3.718 1.204 6.172h7.031c.808-10.78-8.031-16.215-11.455-18.314-.15-.092-.31-.158-.469-.226-1-.667-2.123-1.159-3.27-1.44l-2.238 2.252-2.17-2.277-.022.004a10.339 10.339 0 00-3.333 1.464 3.19 3.19 0 00-.46.223c-3.424 2.101-12.263 7.534-11.455 18.313h7.032v.001zM5.53 111.373h102.723v12.803H5.53zM67.021 25.858L49.198 31.8l-9.376-7.133-6.777 6.291-13.824-13.824v37.778h-1.828v1.519h52.053v-1.519h-2.425V25.858zm-1.464 9.363l-16.341 5.448-9.43-4.668-7.018 4.01-12.08-13.661v-5.676l12.32 12.32 6.908-6.414 9.01 6.856 16.63-5.542.001 7.327z" />
                                    </Svg>
                            </View>
                            <View style={{flex:1,justifyContent:"center"}}>
                                <Text style={{color:"white",marginBottom:EStyleSheet.value("2rem"),fontSize:EStyleSheet.value("10rem")}}>WEBINAR</Text>
                                <Text numberOfLines={1} style={{fontWeight:"bold",color:"white"}}>Pengaruh Bitcoin Pada Pasar Indonesia</Text>
                            </View>
                            <View style={{justifyContent:"center",flexDirection:"row",justifyContent:"center",alignItems:"center",width:EStyleSheet.value("50rem")}}>
                                <Ionicons name="md-arrow-forward-circle" size={EStyleSheet.value("22rem")} color="white" />
                            </View>
                        </LinearGradient>
                        </Pressable>
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