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

export default function SertifikasiScreen(props){

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
                    <Text style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>Sertifikasi</Text>
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
                                    width={EStyleSheet.value("40rem")}
                                    height={EStyleSheet.value("40rem")}
                                    viewBox="0 0 80 80"
                                    {...props}
                                    >
                                    <Path fill="white" d="M54.203 0h-39.71a2.103 2.103 0 00-2.102 2.102v64.492c0 1.156.941 2.101 2.102 2.101h39.71a2.105 2.105 0 002.101-2.101V2.104C56.304.944 55.361 0 54.203 0zM29.024 3.272H39.67c.27 0 .49.231.49.517 0 .283-.221.517-.49.517H29.024c-.269 0-.488-.234-.488-.517a.5.5 0 01.488-.517zm5.713 62.934a2.477 2.477 0 11.002-4.954 2.477 2.477 0 01-.002 4.954zM52.1 58.359H16.595V7.031h2.151v7.3l2.273-1.906 2.273 1.906v-7.3H52.1v51.328zm-5.297-38.304H34.347v-1.824h12.456v1.824zm0 6.969H34.347v-1.825h12.456v1.825zM21.89 32.227h24.913v1.832H21.89v-1.832zm0 6.971h24.913v1.824H21.89v-1.824zm0 7.034h24.913v1.83H21.89v-1.83zm1.07-18.674h1.063l.649-2.008h3.747l.67 2.008H31.276l-3.497-9.883h-2.394l-3.497 9.883h1.072zm3.595-7.67l1.312 3.961h-2.623l1.311-3.961z" />
                                    </Svg>
                            </View>
                            <View style={{flex:1,justifyContent:"center"}}>
                                <Text style={{color:"white",marginBottom:EStyleSheet.value("2rem"),fontSize:EStyleSheet.value("10rem")}}>E-BOOK</Text>
                                <Text numberOfLines={1} style={{fontWeight:"bold",color:"white"}}>Cara mudah mendapatkan pacar?</Text>
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