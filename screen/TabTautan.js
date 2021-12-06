import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, Pressable, ActivityIndicator, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 
import Svg, { Path, Circle } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

import { StatusBarHeight } from '../utils/HeightUtils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';

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
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
}


export default function TabTautan(props){

    let focused = useIsFocused();

    let [dataLoaded, setDataLoaded] = useState(false);
    

    useEffect(()=>{    
        setTimeout(() => {
            setDataLoaded(true);
        }, 1000);
    },[])

    // useEffect(()=>{
    //     if(focused){
    //         setDataLoaded(false);
    //         setTimeout(() => {
    //             setDataLoaded(true);
    //         }, 1000);
    //     }
    // },[focused])

    return (
        <View style={{flex:1,backgroundColor:"white"}}>
            <View style={{height:StatusBarHeight}}></View>
            <View style={{...shadow,backgroundColor:"white",flexDirection:"row",paddingHorizontal:EStyleSheet.value("20rem"),alignItems:"center",height:EStyleSheet.value("55rem")}}>
                <View style={{position:"absolute",justifyContent:"center",alignItems:"center",width:Dimensions.get("screen").width}}>
                    <Text style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>Tautan</Text>
                </View>
            </View>
            {
                (dataLoaded) &&
                <ScrollView>
                    <View style={{flex:1,paddingHorizontal:EStyleSheet.value("20rem"),paddingTop:EStyleSheet.value("30rem"),paddingBottom:EStyleSheet.value("10rem")}}>
                            <Pressable 
                            onPress={()=>{
                                alert("123");
                            }}
                            style={{...shadow,marginBottom:EStyleSheet.value("15rem"),justifyContent:"flex-end",flexDirection:"row",backgroundColor:"white",borderRadius:EStyleSheet.value("5rem"),paddingVertical:EStyleSheet.value("10rem"),paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                                    <View style={{paddingHorizontal:EStyleSheet.value("5rem"),paddingVertical:EStyleSheet.value("5rem")}}>
                                        <MaterialCommunityIcons name="web" size={EStyleSheet.value("20rem")} color="rgb(38, 180, 149)" />
                                    </View>
                                    <Text style={{color:"grey",paddingHorizontal:EStyleSheet.value("10rem")}}>Official Website</Text>
                                </View>
                                <View style={{justifyContent:"center",alignItems:"center",paddingHorizontal:EStyleSheet.value("10rem")}}>
                                    <Entypo name="chevron-small-right" size={EStyleSheet.value("20rem")} color="black" />
                                </View>
                            </Pressable>
                            <Pressable 
                            onPress={()=>{
                                alert("333");
                            }}
                            style={{...shadow,marginBottom:EStyleSheet.value("15rem"),justifyContent:"flex-end",flexDirection:"row",backgroundColor:"white",borderRadius:EStyleSheet.value("5rem"),paddingVertical:EStyleSheet.value("10rem"),paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                                    <View style={{paddingHorizontal:EStyleSheet.value("5rem"),paddingVertical:EStyleSheet.value("5rem")}}>
                                        <Feather name="instagram" size={EStyleSheet.value("20rem")} color="rgb(38, 180, 149)" />
                                    </View>
                                    <Text style={{color:"grey",paddingHorizontal:EStyleSheet.value("10rem")}}>Instagram</Text>
                                </View>
                                <View style={{justifyContent:"center",alignItems:"center",paddingHorizontal:EStyleSheet.value("10rem")}}>
                                    <Entypo name="chevron-small-right" size={EStyleSheet.value("20rem")} color="black" />
                                </View>
                            </Pressable>
                    </View>
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