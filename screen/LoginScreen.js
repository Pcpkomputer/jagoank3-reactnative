import { StatusBar } from 'expo-status-bar';
import React, {useState,useRef, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, Pressable, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Entypo, Feather, Ionicons } from '@expo/vector-icons'; 


import { StatusBarHeight } from '../utils/HeightUtils';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function LoginScreen(props){

    let [selectedForm,setSelectedForm] = useState(0);

    let refFormEmail = useRef();
    let refFormKataSandi = useRef();

    return (
        <ScrollView style={{flex:1,backgroundColor:"rgb(38, 180, 149)"}}>
            <View style={{height:StatusBarHeight}}></View>
            <View style={{height:EStyleSheet.value("10rem")}}></View>
            <View style={{height:EStyleSheet.value("45rem"),justifyContent:"center",paddingHorizontal:EStyleSheet.value("10rem")}}>
                    <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=>{
                        props.navigation.goBack();
                    }}
                    >
                    <Entypo style={{paddingLeft:EStyleSheet.value("5rem")}} name="arrow-long-left" size={EStyleSheet.value("20rem")} color="white" />
                    </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal:EStyleSheet.value("15rem")}}>
                <Text style={{color:"white",fontWeight:"bold",fontSize:EStyleSheet.value("23rem")}}>Masuk</Text>
            </View>
            <View style={{marginTop:EStyleSheet.value("45rem"),marginBottom:EStyleSheet.value("40rem"),flex:1,alignItems:"center"}}>
                <View style={{marginHorizontal:EStyleSheet.value("15rem"),alignItems:"center",marginTop:10,width:Dimensions.get("screen").width-EStyleSheet.value("40rem"),position:"absolute",zIndex:99,backgroundColor:"white",opacity:0.5,borderRadius:EStyleSheet.value("5rem"),paddingHorizontal:EStyleSheet.value("15rem"),paddingVertical:EStyleSheet.value("25rem")}}>
                <View style={{borderBottomWidth:0.7,borderBottomColor:"grey"}}>
                        <View style={{flexDirection:"row",display:"flex"}}>
                            <View style={{width:EStyleSheet.value("35rem"),justifyContent:"center",alignItems:"center"}}>
                                <Feather name="user" size={EStyleSheet.value("23rem")} color="rgb(38, 180, 149)" />
                            </View>
                            <View style={{flex:1,paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold",color:"#535353"}}>Email / Username</Text>
                                <View style={{height:EStyleSheet.value("35rem"),justifyContent:"center"}}>
                                    <TextInput style={{width:"100%",padding:0,height:"100%",color:"grey"}}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{borderBottomWidth:0.7,borderBottomColor:"grey",marginTop:EStyleSheet.value("20rem")}}>
                        <View style={{flexDirection:"row",display:"flex"}}>
                            <View style={{width:EStyleSheet.value("35rem"),justifyContent:"center",alignItems:"center"}}>
                                <Feather name="lock" size={EStyleSheet.value("23rem")} color="rgb(38, 180, 149)" />
                            </View>
                            <View style={{flex:1,paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold",color:"#535353"}}>Kata Sandi</Text>
                                <View style={{height:EStyleSheet.value("35rem"),justifyContent:"center"}}>
                                    <TextInput secureTextEntry={true} style={{width:"100%",padding:0,height:"100%",color:"grey"}}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop:EStyleSheet.value("40rem"),justifyContent:"flex-end",alignItems:"flex-end"}}>
                        <Text style={{color:"rgb(38, 180, 149)",fontSize:EStyleSheet.value("13rem"),opacity:0.5}}>Lupa Sandi?</Text>
                    </View>
                    <View style={{marginTop:EStyleSheet.value("10rem"),backgroundColor:"rgb(38, 180, 149)",borderRadius:EStyleSheet.value("5rem"),justifyContent:"center",alignItems:"center",paddingVertical:EStyleSheet.value("15rem")}}>
                        <Text style={{color:"white",fontWeight:"bold"}}>Masuk</Text>
                        <Entypo style={{paddingLeft:EStyleSheet.value("5rem"),position:"absolute",right:EStyleSheet.value("15rem"),top:EStyleSheet.value("25rem")/2}} name="arrow-long-right" size={EStyleSheet.value("20rem")} color="white" />
                    </View>
                    <View style={{marginTop:EStyleSheet.value("20rem"),justifyContent:"center",flexDirection:"row",alignItems:"center"}}>
                        <Text style={{fontWeight:"bold"}}>Belum punya akun?</Text>
                        <TouchableOpacity
                        onPress={()=>{
                            props.navigation.replace("Daftar");
                        }}
                        >
                            <Text style={{marginLeft:EStyleSheet.value("5rem"),color:"rgb(38, 180, 149)"}}>Daftar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginHorizontal:EStyleSheet.value("15rem"),marginTop:20,width:Dimensions.get("screen").width-EStyleSheet.value("50rem"),position:"absolute",zIndex:99,backgroundColor:"white",opacity:0.5,borderRadius:EStyleSheet.value("5rem"),paddingHorizontal:EStyleSheet.value("15rem"),paddingVertical:EStyleSheet.value("25rem")}}>
                <View style={{borderBottomWidth:0.7,borderBottomColor:"grey"}}>
                        <View style={{flexDirection:"row",display:"flex"}}>
                            <View style={{width:EStyleSheet.value("35rem"),justifyContent:"center",alignItems:"center"}}>
                                <Feather name="user" size={EStyleSheet.value("23rem")} color="rgb(38, 180, 149)" />
                            </View>
                            <View style={{flex:1,paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold",color:"#535353"}}>Email / Username</Text>
                                <View style={{height:EStyleSheet.value("35rem"),justifyContent:"center"}}>
                                    <TextInput style={{width:"100%",padding:0,height:"100%",color:"grey"}}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{borderBottomWidth:0.7,borderBottomColor:"grey",marginTop:EStyleSheet.value("20rem")}}>
                        <View style={{flexDirection:"row",display:"flex"}}>
                            <View style={{width:EStyleSheet.value("35rem"),justifyContent:"center",alignItems:"center"}}>
                                <Feather name="lock" size={EStyleSheet.value("23rem")} color="rgb(38, 180, 149)" />
                            </View>
                            <View style={{flex:1,paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold",color:"#535353"}}>Kata Sandi</Text>
                                <View style={{height:EStyleSheet.value("35rem"),justifyContent:"center"}}>
                                    <TextInput secureTextEntry={true} style={{width:"100%",padding:0,height:"100%",color:"grey"}}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop:EStyleSheet.value("40rem"),justifyContent:"flex-end",alignItems:"flex-end"}}>
                        <Text style={{color:"rgb(38, 180, 149)",fontSize:EStyleSheet.value("13rem"),opacity:0.5}}>Lupa Sandi?</Text>
                    </View>
                    <View style={{marginTop:EStyleSheet.value("10rem"),backgroundColor:"rgb(38, 180, 149)",borderRadius:EStyleSheet.value("5rem"),justifyContent:"center",alignItems:"center",paddingVertical:EStyleSheet.value("15rem")}}>
                        <Text style={{color:"white",fontWeight:"bold"}}>Masuk</Text>
                        <Entypo style={{paddingLeft:EStyleSheet.value("5rem"),position:"absolute",right:EStyleSheet.value("15rem"),top:EStyleSheet.value("25rem")/2}} name="arrow-long-right" size={EStyleSheet.value("20rem")} color="white" />
                    </View>
                    <View style={{marginTop:EStyleSheet.value("20rem"),justifyContent:"center",flexDirection:"row",alignItems:"center"}}>
                        <Text style={{fontWeight:"bold"}}>Belum punya akun?</Text>
                        <Text style={{marginLeft:EStyleSheet.value("5rem"),color:"rgb(38, 180, 149)"}}>Daftar</Text>
                    </View>
                </View>
                <View style={{marginHorizontal:EStyleSheet.value("15rem"),zIndex:100,width:Dimensions.get("screen").width-EStyleSheet.value("30rem"),backgroundColor:"white",borderRadius:EStyleSheet.value("5rem"),paddingHorizontal:EStyleSheet.value("15rem"),paddingVertical:EStyleSheet.value("25rem")}}>
                    <View style={{borderBottomWidth:0.7,borderBottomColor:(selectedForm===1) ? "rgb(38, 180, 149)":"grey"}}>
                        <View style={{flexDirection:"row",display:"flex"}}>
                            <View style={{width:EStyleSheet.value("35rem"),justifyContent:"center",alignItems:"center"}}>
                                <Feather name="user" size={EStyleSheet.value("23rem")} color="rgb(38, 180, 149)" />
                            </View>
                            <View style={{flex:1,paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold",color:"#535353"}}>Email / Username</Text>
                                <View style={{height:EStyleSheet.value("35rem"),justifyContent:"center"}}>
                                    <TextInput 
                                      ref={refFormEmail}
                                      returnKeyType="next"
                                      onFocus={()=>{
                                          setSelectedForm(1);
                                          
                                      }}
                                      onBlur={()=>{
                                          setSelectedForm(0);
                                      }}
                                      onSubmitEditing={()=>{
                                          setTimeout(() => {
                                              setSelectedForm(2);
                                          }, 1);
                                          refFormKataSandi.current.focus();
                                      }}
                                    style={{width:"100%",padding:0,height:"100%",color:"grey"}}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{borderBottomWidth:0.7,borderBottomColor:(selectedForm===2) ? "rgb(38, 180, 149)":"grey",marginTop:EStyleSheet.value("20rem")}}>
                        <View style={{flexDirection:"row",display:"flex"}}>
                            <View style={{width:EStyleSheet.value("35rem"),justifyContent:"center",alignItems:"center"}}>
                                <Feather name="lock" size={EStyleSheet.value("23rem")} color="rgb(38, 180, 149)" />
                            </View>
                            <View style={{flex:1,paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold",color:"#535353"}}>Kata Sandi</Text>
                                <View style={{height:EStyleSheet.value("35rem"),flexDirection:"row",justifyContent:"center"}}>
                                    <TextInput 
                                    
                                    ref={refFormKataSandi}
                                    returnKeyType="done"
                                    onFocus={()=>{
                                        setSelectedForm(2);
                                        
                                    }}
                                    onBlur={()=>{
                                        setSelectedForm(0);
                                    }}
                                    onSubmitEditing={()=>{
                                        // setTimeout(() => {
                                        //     setSelectedForm(2);
                                        // }, 1);
                                        // refFormKataSandi.current.focus();
                                        //props.navigation.navigate("");
                                    }}
                                    secureTextEntry={true} style={{flex:1,padding:0,height:"100%",color:"grey"}}/>
                                    <View style={{width:EStyleSheet.value("40rem"),justifyContent:"center",alignItems:"center"}}>
                                            <Ionicons name="eye" size={EStyleSheet.value("19rem")} color="black" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop:EStyleSheet.value("40rem"),justifyContent:"flex-end",alignItems:"flex-end"}}>
                        <Text style={{color:"rgb(38, 180, 149)",fontSize:EStyleSheet.value("13rem"),opacity:0.5}}>Lupa Sandi?</Text>
                    </View>
                    <Pressable 
                    android_ripple={{
                        color:"white"
                    }}
                    onPress={()=>{
                        props.navigation.navigate("Dashboard");
                    }}
                    style={{marginTop:EStyleSheet.value("10rem"),backgroundColor:"rgb(38, 180, 149)",borderRadius:EStyleSheet.value("5rem"),justifyContent:"center",alignItems:"center",paddingVertical:EStyleSheet.value("15rem")}}>
                        <Text style={{color:"white",fontWeight:"bold"}}>Masuk</Text>
                        <Entypo style={{paddingLeft:EStyleSheet.value("5rem"),position:"absolute",right:EStyleSheet.value("15rem"),top:EStyleSheet.value("25rem")/2}} name="arrow-long-right" size={EStyleSheet.value("20rem")} color="white" />
                    </Pressable>
                    <View style={{marginTop:EStyleSheet.value("20rem"),justifyContent:"center",flexDirection:"row",alignItems:"center"}}>
                        <Text style={{fontWeight:"bold"}}>Belum punya akun?</Text>
                        <TouchableOpacity
                        onPress={()=>{
                            props.navigation.replace("Daftar");
                        }}
                        >
                            <Text style={{marginLeft:EStyleSheet.value("5rem"),color:"rgb(38, 180, 149)"}}>Daftar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}