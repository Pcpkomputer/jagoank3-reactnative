import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef, useContext} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, Pressable, ActivityIndicator, Linking, TextInput, AsyncStorage } from 'react-native';
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

export default function DetailProfilScreen(props){

    let globalContext = useContext(GlobalContext);

    let [dataLoaded, setDataLoaded] = useState(false);

    let [simpanLoading, setSimpanLoading] = useState(false);

    let [detail, setDetail] = useState({});


    ////
    let [nama, setNama] = useState("");
    let [username, setUsername] = useState("");
    let [nickname, setNickname] = useState("");
    let [email, setEmail] = useState("");
    let [notelepon, setNoTelepon] = useState("");

    ////

    let fetchDetailProfil = async ()=>{
        setDataLoaded(false);
        let request = await fetch(`${endpoint}/akunkamu`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
                "authorization":`Bearer ${globalContext.credentials.token}`
            }
        });
        let response = await request.json();

        setNama(response.nama);
        setUsername(response.username);
        setNickname(response.username);
        setEmail(response.email);
        setNoTelepon(response.no_telepon);

        setDataLoaded(true)
        setDetail(response);
        
    }

    useEffect(()=>{
        fetchDetailProfil();
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
                    <Text style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>Edit Profil</Text>
                </View>
            </View>
            {
                (dataLoaded) &&
                <ScrollView>
                    <View style={{marginTop:EStyleSheet.value("20rem"),paddingVertical:EStyleSheet.value("5rem"),paddingHorizontal:EStyleSheet.value("20rem")}}>
                        <View style={{...shadow,flexDirection:"row",marginBottom:EStyleSheet.value("15rem"),alignItems:"center",borderRadius:EStyleSheet.value("5rem"),paddingVertical:EStyleSheet.value("10rem"),backgroundColor:"white",paddingHorizontal:EStyleSheet.value("15rem")}}>
                            <Text style={{marginRight:EStyleSheet.value("5rem"),color:"rgb(38, 180, 149)",fontWeight:"bold"}}>Nama :</Text>
                            <TextInput 
                            onChangeText={(text)=>{
                                setNama(text);
                            }}
                            style={{fontSize:EStyleSheet.value("15rem"),flex:1,color:"grey"}} value={nama}/>
                        </View>
                        <View style={{...shadow,flexDirection:"row",marginBottom:EStyleSheet.value("15rem"),alignItems:"center",borderRadius:EStyleSheet.value("5rem"),paddingVertical:EStyleSheet.value("10rem"),backgroundColor:"white",paddingHorizontal:EStyleSheet.value("15rem")}}>
                            <Text style={{marginRight:EStyleSheet.value("5rem"),color:"rgb(38, 180, 149)",fontWeight:"bold"}}>Username :</Text>
                            <TextInput 
                               onChangeText={(text)=>{
                                setUsername(text);
                            }}
                            style={{fontSize:EStyleSheet.value("15rem"),flex:1,color:"grey"}} value={username}/>
                        </View>
                        <View style={{...shadow,flexDirection:"row",marginBottom:EStyleSheet.value("15rem"),alignItems:"center",borderRadius:EStyleSheet.value("5rem"),paddingVertical:EStyleSheet.value("10rem"),backgroundColor:"white",paddingHorizontal:EStyleSheet.value("15rem")}}>
                            <Text style={{marginRight:EStyleSheet.value("5rem"),color:"rgb(38, 180, 149)",fontWeight:"bold"}}>Nickname :</Text>
                            <TextInput 
                               onChangeText={(text)=>{
                                setNickname(text);
                            }}
                            style={{fontSize:EStyleSheet.value("15rem"),flex:1,color:"grey"}} value={nickname}/>
                        </View>
                        <View style={{...shadow,flexDirection:"row",marginBottom:EStyleSheet.value("15rem"),alignItems:"center",borderRadius:EStyleSheet.value("5rem"),paddingVertical:EStyleSheet.value("10rem"),backgroundColor:"white",paddingHorizontal:EStyleSheet.value("15rem")}}>
                            <Text style={{marginRight:EStyleSheet.value("5rem"),color:"rgb(38, 180, 149)",fontWeight:"bold"}}>Email :</Text>
                            <TextInput 
                               onChangeText={(text)=>{
                                setEmail(text);
                            }}
                            style={{fontSize:EStyleSheet.value("15rem"),flex:1,color:"grey"}} value={email}/>
                        </View>
                        <View style={{...shadow,flexDirection:"row",marginBottom:EStyleSheet.value("15rem"),alignItems:"center",borderRadius:EStyleSheet.value("5rem"),paddingVertical:EStyleSheet.value("10rem"),backgroundColor:"white",paddingHorizontal:EStyleSheet.value("15rem")}}>
                            <Text style={{marginRight:EStyleSheet.value("5rem"),color:"rgb(38, 180, 149)",fontWeight:"bold"}}>No. Telepon :</Text>
                            <TextInput 
                               onChangeText={(text)=>{
                                setNoTelepon(text);
                            }}
                            style={{fontSize:EStyleSheet.value("15rem"),flex:1,color:"grey"}} value={notelepon}/>
                        </View>
                        {
                            (simpanLoading) ?
                            <View
                            style={{flexDirection:"row",marginBottom:EStyleSheet.value("15rem"),justifyContent:"center",alignItems:"center",marginTop:EStyleSheet.value("20rem"),alignItems:"center",borderRadius:EStyleSheet.value("5rem"),paddingVertical:EStyleSheet.value("13rem"),backgroundColor:"rgb(38, 180, 149)",paddingHorizontal:EStyleSheet.value("15rem")}}>
                                <ActivityIndicator color="white"/>
                            </View>
                            :
                            <Pressable 
                            android_ripple={{
                                color:"white"
                            }}
                            onPress={async ()=>{
                                setSimpanLoading(true);

                                // $validated = $request->validate([
                                //     'nama' => 'required',
                                //     'username' => 'required',
                                //     'nickname' => 'required',
                                //     'email' => 'required',
                                //     'no_telepon' => 'required'
                                // ]);


                                let request = await fetch(`${endpoint}/updateakunkamu`,{
                                    method:"POST",
                                    headers:{
                                        "content-type":"application/json",
                                        "authorization":`Bearer ${globalContext.credentials.token}`
                                    },
                                    body:JSON.stringify({
                                        nama,
                                        username,
                                        nickname,
                                        email,
                                        no_telepon:notelepon
                                    })
                                });
                                let response = await request.json();

                                if(response.success){
                                    alert("Profil berhasil disimpan");

                                    globalContext.setCredentials({
                                        ...globalContext.credentials,
                                        ...response.data
                                    });
                                    AsyncStorage.setItem("credentials",JSON.stringify({
                                        ...globalContext.credentials,
                                        ...response.data
                                    }));

                                    props.navigation.goBack();
                                }
                                else{
                                    alert(response.msg);
                                    setSimpanLoading(false);
                                }

                            
                            }}
                            style={{flexDirection:"row",marginBottom:EStyleSheet.value("15rem"),justifyContent:"center",alignItems:"center",marginTop:EStyleSheet.value("20rem"),alignItems:"center",borderRadius:EStyleSheet.value("5rem"),paddingVertical:EStyleSheet.value("13rem"),backgroundColor:"rgb(38, 180, 149)",paddingHorizontal:EStyleSheet.value("15rem")}}>
                                <Text style={{color:"white"}}>Simpan</Text>
                            </Pressable>
                        }
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