import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef, useContext} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, Pressable, ActivityIndicator, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 
import Svg, { Path, Circle } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

import { StatusBarHeight } from '../utils/HeightUtils';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {endpoint} from '../utils/endpoint';
import {GlobalContext} from '../App';

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

export default function ModulPelatihanScreen(props){

    let timer = useRef();

    let globalContext = useContext(GlobalContext);

    let [query, setQuery] = useState("");

    let [pelatihan, setPelatihan] = useState([]);

    let [dataLoaded, setDataLoaded] = useState(false);

    let fetchModulPemesanan = async()=>{
        setDataLoaded(false);
        let request = await fetch(`${endpoint}/getmodulpemesanan`,{
            method:"POST",
            headers:{
                "Authorization":`Bearer ${globalContext.credentials.token}`
            }
        });
        let response = await request.json();
        console.log(response);
        setPelatihan(response.map((el)=>{
            return {
                ...el,
                visible:true
            }
        }));
        setDataLoaded(true);
    }

    useEffect(()=>{    
        fetchModulPemesanan();
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
                    <Text style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>Modul Pelatihan</Text>
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
                        <TextInput 
                        onChangeText={(text)=>{
                            clearTimeout(timer.current);
                            setQuery(text);
                            timer.current = setTimeout(() => {
                                setPelatihan((prev)=>{
                                    let filtered = prev.map((el)=>{
                                        let regex = new RegExp(`${text}`,"i");
                                        if(el.namatraining.match(regex)){
                                            return {
                                                ...el,
                                                visible:true
                                            }
                                        }
                                        else{
                                            return {
                                                ...el,
                                                visible:false
                                            }
                                        }
                                    })
                                    return filtered;
                                })
                            }, 100);
                        }}
                        value={query}
                        placeholder="Cari..." style={{height:EStyleSheet.value("35rem"),color:"grey",flex:1}}></TextInput>
                        <TouchableOpacity 
                        onPress={()=>{
                            setQuery("");
                            setPelatihan((prev)=>{
                                return prev.map((el)=>{
                                    return {
                                        ...el,
                                        visible:true
                                    }
                                })
                            })
                        }}
                        activeOpacity={0.8}
                        style={{paddingHorizontal:EStyleSheet.value("5rem"),flex:1,paddingRight:EStyleSheet.value("15rem"),justifyContent:"center",alignItems:"center"}}>
                            <AntDesign name="closecircle" size={EStyleSheet.value("18rem")} color="rgba(0,0,0,0.3)" />
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    (pelatihan.length===0) ?
                    <View style={{justifyContent:"center",alignItems:"center",marginTop:EStyleSheet.value("20rem")}}>
                        <Text style={{paddingHorizontal:EStyleSheet.value("50rem"),textAlign:"center"}}>Lakukan pemesanan untuk mendapatkan modul pelatihan...</Text>
                    </View>
                    :
                    <FlatList
                    contentContainerStyle={{paddingHorizontal:EStyleSheet.value("20rem")}}
                    keyExtractor={(item,index)=>`modulpelatihan-${index}`}
                    data={pelatihan}
                    renderItem={({item,index})=>{
                        if(item.visible){
                            return (
                                <Pressable
                                onPress={()=>{
                                    props.navigation.navigate("DetailModulPelatihan",{ item:item});
                                }}
                                >
                                <LinearGradient 
                                colors={['#24b596', '#04a280', '#04a280']}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 1 }}
                                style={{...shadow,backgroundColor:"#24b596",overflow:"hidden",marginBottom:EStyleSheet.value("15rem"),borderRadius:EStyleSheet.value("5rem"),display:"flex",flexDirection:"row"}}>
                                    <View style={{width:EStyleSheet.value("70rem"),justifyContent:"center",alignItems:"center",height:EStyleSheet.value("60rem")}}>
                                                <Svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 489.9 489.9"
                                                style={{backgroundColor:"#24b596"}}
                                                height={EStyleSheet.value("40rem")} 
                                                width={EStyleSheet.value("40rem")}
                                                >
                                                <Path fill="white" d="M131.75 409.1c-28.8 0-52.1 18.3-52.1 40.4 0 22.6 23.3 40.4 52.1 40.4h278.4c-22.6-24.1-22.6-56.8 0-80.9h-278.4v.1zM120.15 1.9c-23.3 7-40.4 32.7-40.4 63.8v342.2c10.5-9.3 24.9-15.9 40.4-17.9V1.9zM244.95 0v99.2l-40.1-25.3-40 25.3V0h-24.9v388.9h270.3V0z" />
                                                </Svg>
                                    </View>
                                    <View style={{flex:1,justifyContent:"center"}}>
                                        <Text style={{color:"white",marginBottom:EStyleSheet.value("2rem"),fontSize:EStyleSheet.value("10rem")}}>MODUL PELATIHAN</Text>
                                        <Text numberOfLines={1} style={{fontWeight:"bold",color:"white"}}>{item.namatraining}</Text>
                                    </View>
                                    <LinearGradient 
                                    colors={['#24b596', '#04a280', '#04a280']}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 1 }}
                                    style={{width:EStyleSheet.value("80rem"),backgroundColor:"whitesmoke",justifyContent:"center",alignItems:"center",borderTopLeftRadius:EStyleSheet.value("10rem"),borderBottomLeftRadius:EStyleSheet.value("10rem")}}>
                                        <Text style={{color:"white",fontSize:EStyleSheet.value("15rem")}}>{JSON.parse(item.modulyoutube).length}</Text>
                                        <Text style={{color:"white",marginTop:EStyleSheet.value("5rem"),fontSize:EStyleSheet.value("11rem")}}>MODUL</Text>
                                    </LinearGradient>
                                </LinearGradient>
                                </Pressable>
                            )
                            }
                        }}
                        />
                        
                }
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