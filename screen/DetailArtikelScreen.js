import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, Pressable, ActivityIndicator, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 
import Svg, { Path, Circle } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

import { StatusBarHeight } from '../utils/HeightUtils';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

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



export default function DetailArtikelScreen(props){

    const { width } = useWindowDimensions();

    const source = {
        html: props.route.params.item.konten
      };

    let [dataLoaded, setDataLoaded] = useState(false);

    let [imageLoaded, setImageLoaded] = useState(false);

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
                    <Text style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>Artikel</Text>
                </View>
            </View>
            {
                (dataLoaded) &&
                <ScrollView>
                    <View style={{backgroundColor:"whitesmoke",justifyContent:"center",alignItems:"center",height:EStyleSheet.value("250rem")}}>
                           {
                               !imageLoaded &&
                               <ActivityIndicator style={{position:"absolute",zIndex:100}} color="rgb(38, 180, 149)"/>
                           }
                           <Image 
                            onLoad={()=>{
                                setImageLoaded(true);
                            }}
                            source={{uri:`${endpoint.replace("/api","")}/storage/public/shop/${props.route.params.item.gambar_artikel}`}} style={{width:"100%",height:"100%"}}></Image>
                    </View>
                    <View style={{paddingVertical:EStyleSheet.value("20rem")}}>
                           <RenderHtml
                            baseStyle={{paddingHorizontal:EStyleSheet.value("15rem")}}
                            contentWidth={width}
                            source={source}
                            enableExperimentalMarginCollapsing={true}
                            renderersProps={ {
                                img: {
                                  enableExperimentalPercentWidth: true
                                }
                              }}
                            />
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