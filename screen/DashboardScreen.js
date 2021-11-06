import { StatusBar } from 'expo-status-bar';
import React, {useState, useEfffect, useRef} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, Pressable, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 


import { StatusBarHeight } from '../utils/HeightUtils';
import { TouchableOpacity } from 'react-native-gesture-handler';

let shadow = {
    shadowColor: "grey",
    shadowOffset: {
        width: 0,
        height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,

    elevation: 3,
}

export default function DashboardScreen(props){
    return (
        <ScrollView 
        overScrollMode="auto"
        style={{flex:1,backgroundColor:"white"}}>
               <View style={{height:StatusBarHeight,backgroundColor:"#24b596"}}></View>
               <View style={{backgroundColor:"#24b596",borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
                   <View style={{height:EStyleSheet.value("60rem"),justifyContent:"center",alignItems:"center"}}>
                       <Text style={{color:"white",fontSize:EStyleSheet.value("16rem"),fontWeight:"bold"}}>Jagoan K3 Mobile</Text>
                   </View>
                   <View style={{height:EStyleSheet.value("210rem"),paddingHorizontal:EStyleSheet.value("20rem")}}>
                       <Text>123</Text>
                   </View>
               </View>
               {/* <View style={{marginTop:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem")}}><Text style={{backgroundColor:"blue"}}>debug</Text></View> */}
               <View style={{marginTop:EStyleSheet.value("40rem"),marginBottom:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem")}}>
                    <View style={{flexDirection:"row",marginBottom:EStyleSheet.value("25rem")}}>
                        <View style={{...shadow,backgroundColor:"#24b596",height:EStyleSheet.value("120rem"),borderRadius:EStyleSheet.value("5rem"),padding:EStyleSheet.value("10rem"),width:EStyleSheet.value("103.5rem"),marginRight:EStyleSheet.value("15rem")}}>
                            <View style={{height:EStyleSheet.value("40rem"),backgroundColor:"black",width:EStyleSheet.value("40rem")}}>
                                <Text>Icon</Text>
                            </View>
                            <Text style={{marginTop:EStyleSheet.value("10rem"),color:"white",fontWeight:"bold",fontSize:EStyleSheet.value("12rem"),marginBottom:EStyleSheet.value("30rem")}}>REGULASI K3</Text>
                        </View>
                        <View style={{...shadow,backgroundColor:"#24b596",height:EStyleSheet.value("120rem"),borderRadius:EStyleSheet.value("5rem"),padding:EStyleSheet.value("10rem"),width:EStyleSheet.value("103.5rem"),marginRight:EStyleSheet.value("15rem")}}>
                            <View style={{height:EStyleSheet.value("40rem"),backgroundColor:"black",width:EStyleSheet.value("40rem")}}>
                                <Text>Icon</Text>
                            </View>
                            <Text style={{marginTop:EStyleSheet.value("10rem"),color:"white",fontWeight:"bold",fontSize:EStyleSheet.value("12rem"),marginBottom:EStyleSheet.value("30rem")}}>REGULASI K3</Text>
                        </View>
                        <View style={{...shadow,backgroundColor:"white",height:EStyleSheet.value("120rem"),borderRadius:EStyleSheet.value("5rem"),padding:EStyleSheet.value("10rem"),width:EStyleSheet.value("103.5rem"),marginRight:EStyleSheet.value("15rem")}}>
                            <View style={{height:EStyleSheet.value("40rem"),backgroundColor:"black",width:EStyleSheet.value("40rem")}}>
                                <Text>Icon</Text>
                            </View>
                            <Text style={{marginTop:EStyleSheet.value("10rem"),color:"#24b596",fontWeight:"bold",fontSize:EStyleSheet.value("12rem"),marginBottom:EStyleSheet.value("30rem")}}>MODUL PELATIHAN</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",marginBottom:EStyleSheet.value("25rem")}}>
                        <View style={{...shadow,backgroundColor:"white",height:EStyleSheet.value("120rem"),borderRadius:EStyleSheet.value("5rem"),padding:EStyleSheet.value("10rem"),width:EStyleSheet.value("103.5rem"),marginRight:EStyleSheet.value("15rem")}}>
                            <View style={{height:EStyleSheet.value("40rem"),backgroundColor:"black",width:EStyleSheet.value("40rem")}}>
                                <Text>Icon</Text>
                            </View>
                            <Text style={{marginTop:EStyleSheet.value("10rem"),color:"#24b596",fontWeight:"bold",fontSize:EStyleSheet.value("12rem"),marginBottom:EStyleSheet.value("30rem")}}>REGULASI K3</Text>
                        </View>
                        <View style={{...shadow,backgroundColor:"white",height:EStyleSheet.value("120rem"),borderRadius:EStyleSheet.value("5rem"),padding:EStyleSheet.value("10rem"),width:EStyleSheet.value("103.5rem"),marginRight:EStyleSheet.value("15rem")}}>
                            <View style={{height:EStyleSheet.value("40rem"),backgroundColor:"black",width:EStyleSheet.value("40rem")}}>
                                <Text>Icon</Text>
                            </View>
                            <Text style={{marginTop:EStyleSheet.value("10rem"),color:"#24b596",fontWeight:"bold",fontSize:EStyleSheet.value("12rem"),marginBottom:EStyleSheet.value("30rem")}}>REGULASI K3</Text>
                        </View>
                        <View style={{...shadow,backgroundColor:"white",height:EStyleSheet.value("120rem"),borderRadius:EStyleSheet.value("5rem"),padding:EStyleSheet.value("10rem"),width:EStyleSheet.value("103.5rem"),marginRight:EStyleSheet.value("15rem")}}>
                            <View style={{height:EStyleSheet.value("40rem"),backgroundColor:"black",width:EStyleSheet.value("40rem")}}>
                                <Text>Icon</Text>
                            </View>
                            <Text style={{marginTop:EStyleSheet.value("10rem"),color:"#24b596",fontWeight:"bold",fontSize:EStyleSheet.value("12rem"),marginBottom:EStyleSheet.value("30rem")}}>REGULASI K3</Text>
                        </View>
                    </View>
               </View>
               <View style={{marginBottom:EStyleSheet.value("25rem")}}>
                   <View style={{paddingHorizontal:EStyleSheet.value("20rem"),flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontWeight:"bold"}}>AVAILABLE TRAINING SCHEDULE</Text>
                        <Text style={{fontWeight:"bold",color:"#24b596"}}>More</Text>
                   </View>
                   <View style={{marginTop:EStyleSheet.value("30rem"),paddingHorizontal:EStyleSheet.value("20rem")}}>
                      {
                          [1,2,3,4].map(()=>{
                              return (
                                <View style={{backgroundColor:"#24b596",marginBottom:EStyleSheet.value("15rem"),borderRadius:EStyleSheet.value("5rem"),display:"flex",flexDirection:"row"}}>
                                    <View style={{width:EStyleSheet.value("70rem"),justifyContent:"center",alignItems:"center",height:EStyleSheet.value("60rem")}}>
                                        <Text>GAmbar</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:"center"}}>
                                        <Text style={{color:"white",marginBottom:EStyleSheet.value("2rem"),fontSize:EStyleSheet.value("10rem")}}>SERTIFIKASI</Text>
                                        <Text numberOfLines={1} style={{fontWeight:"bold",color:"white"}}>Sertifikasi Kemnaker RI</Text>
                                    </View>
                                    <View style={{width:EStyleSheet.value("80rem")}}>
                                        <Text>Jadwal</Text>
                                    </View>
                                </View>
                              )
                          })
                      }
                   </View>
               </View>
               <View style={{marginBottom:EStyleSheet.value("25rem")}}>
                    <View style={{paddingHorizontal:EStyleSheet.value("20rem"),flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontWeight:"bold"}}>GALLERY</Text>
                        <Text style={{fontWeight:"bold",color:"#24b596"}}>See All</Text>
                   </View>
                   <View style={{marginTop:EStyleSheet.value("25rem")}}>
                        <FlatList
                        overScrollMode="never"
                        horizontal={true}
                        data={[1,2,3,4,5]}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{paddingVertical:EStyleSheet.value("5rem")}}
                        keyExtractor={(item,index)=>`gallery-${index}`}
                        renderItem={({item,index})=>{
                            return (
                                <View style={{...shadow,overflow:"hidden",marginLeft:(index===0) ? EStyleSheet.value("20rem"):null,borderRadius:EStyleSheet.value("10rem"),height:EStyleSheet.value("150rem"),marginRight:EStyleSheet.value("20rem"),backgroundColor:"white",width:EStyleSheet.value("161rem")}}>
                                    <View style={{backgroundColor:"whitesmoke",flex:1}}>
                                        <Text>color</Text>
                                    </View>
                                    <View style={{height:EStyleSheet.value("50rem"),justifyContent:"center",alignItems:"center"}}>
                                        <Text numberOfLines={2} style={{textAlign:"center",fontSize:EStyleSheet.value("13rem"),paddingHorizontal:EStyleSheet.value("20rem")}}>123asdsadsadasadsadsadadsadadadsadadssdasdsadasdsadadadasdadsad56</Text>
                                    </View>
                                </View>
                            )
                        }}
                        />
                    </View>
               </View>
        </ScrollView>
    )
}