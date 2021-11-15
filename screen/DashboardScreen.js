import { StatusBar } from 'expo-status-bar';
import React, {useState, useEfffect, useRef} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, Pressable, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import Svg, { Path, Circle, Line } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

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
               <LinearGradient 
               colors={['#24b596', '#04a280', '#04a280', '#04a280']}
               start={{ x: 0, y: 1 }}
               end={{ x: 1, y: 1 }}
               style={{height:StatusBarHeight,backgroundColor:"#24b596"}}></LinearGradient>
               <LinearGradient 
               colors={['#24b596', '#04a280', '#04a280', '#04a280']}
               start={{ x: 0, y: 1 }}
               end={{ x: 1, y: 1 }}
               style={{backgroundColor:"#24b596",borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
                   <View style={{height:EStyleSheet.value("60rem"),justifyContent:"center",alignItems:"center"}}>
                       <Text style={{color:"white",fontSize:EStyleSheet.value("16rem"),fontWeight:"bold"}}>Jagoan K3 Mobile</Text>
                   </View>
                   <LinearGradient 
                    colors={['rgba(0,0,0,0)','rgba(0,0,0,0)','white']}
                   style={{position:"absolute",borderRadius:EStyleSheet.value("0rem"),height:EStyleSheet.value("60rem"),bottom:0,width:"100%"}}>                        
                   </LinearGradient>
                   <View style={{...shadow,height:EStyleSheet.value("210rem"),paddingHorizontal:EStyleSheet.value("20rem"),paddingBottom:EStyleSheet.value("30rem")}}>
                        
                       <LinearGradient 
                           colors={['#1e1e1e','#3c3c3c', '#3c3c3c', '#1e1e1e','#1e1e1e']}
                           start={{ x: 0, y: 1 }}
                           end={{ x: 1, y: 2 }}
                       style={{height:"100%",flexDirection:"row",borderRadius:EStyleSheet.value("10rem"),padding:EStyleSheet.value("20rem"),paddingRight:0}}>
                           <View style={{flex:1}}>
                                <Text style={{color:"white",letterSpacing:EStyleSheet.value("10rem"),fontWeight:"bold"}}>PLATINUM</Text>
                                <View style={{flex:1,justifyContent:"center"}}>
                                    <Text style={{color:"white",fontWeight:"bold",letterSpacing:3}}>PADANG P.Y</Text>
                                    <View style={{marginTop:EStyleSheet.value("10rem"),borderWidth:0.2,justifyContent:"center",alignItems:"center",borderColor:"white",padding:EStyleSheet.value("5rem")}}>
                                        <Text style={{color:"white"}}>Non Member</Text>
                                    </View>
                                </View>
                                <View style={{}}>
                                    <Text style={{color:"white",fontSize:EStyleSheet.value("9rem")}}>Valid Thru | </Text>
                                </View>
                           </View>
                           <View style={{justifyContent:"center",alignItems:"center",paddingRight:EStyleSheet.value("20rem"),paddingLeft:EStyleSheet.value("30rem")}}>
                               <View style={{backgroundColor:"whitesmoke",justifyContent:"center",alignItems:"center",width:EStyleSheet.value("70rem"),height:EStyleSheet.value("70rem"),borderRadius:999}}>
                                   <Text style={{fontSize:EStyleSheet.value("30rem")}}>PP</Text>
                                </View>
                           </View>
                        </LinearGradient>
                   </View>
               </LinearGradient>
               {/* <View style={{marginTop:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem")}}><Text style={{backgroundColor:"blue"}}>debug</Text></View> */}
               <View style={{marginTop:EStyleSheet.value("40rem"),marginBottom:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("20rem")}}>
                    <View style={{flexDirection:"row",marginBottom:EStyleSheet.value("25rem")}}>
                        <LinearGradient 
                        colors={['#24b596', '#04a280', '#04a280']}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={{...shadow,backgroundColor:"#24b596",height:EStyleSheet.value("120rem"),borderRadius:EStyleSheet.value("5rem"),padding:EStyleSheet.value("10rem"),width:EStyleSheet.value("103.5rem"),marginRight:EStyleSheet.value("15rem")}}>
                            <View style={{height:EStyleSheet.value("30rem"),width:EStyleSheet.value("30rem"),marginTop:EStyleSheet.value("5rem")}}>
                                <Svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 512 512">
                                    <Path fill="white" d="M480.831 330.665c-25.593-25.592-62.724-36.336-97.931-28.623l-34.521-34.521 105.458-105.459 46.179-46.179c7.683-7.683 11.914-17.934 11.914-28.861 0-10.929-4.232-21.179-11.914-28.862l-46.172-46.173C446.16 4.304 435.909.072 424.982.072c-10.929 0-21.179 4.231-28.864 11.916L244.482 163.623l-34.521-34.521c7.715-35.204-3.03-72.338-28.623-97.93-28.7-28.7-70.452-38.493-108.962-25.557a8.172 8.172 0 00-5.351 5.875 8.164 8.164 0 002.176 7.643l56.211 56.211-10.439 39.622-39.625 10.425-56.21-56.209a8.172 8.172 0 00-13.519 3.173c-12.946 38.517-3.155 80.276 25.551 108.982 25.593 25.592 62.727 36.337 97.93 28.623l17.195 17.194a8.145 8.145 0 005.775 2.393c2.09 0 4.181-.797 5.775-2.393a8.167 8.167 0 000-11.551l-20.437-20.437a8.162 8.162 0 00-7.883-2.116c-30.932 8.259-64.194-.654-86.804-23.264-21.015-21.015-30.048-50.3-25.007-78.926l49.399 49.399a8.17 8.17 0 007.853 2.124l48.768-12.83a8.166 8.166 0 005.82-5.819l12.286-46.633 31.071-31.071c20.283 22.471 28.003 54.035 20.137 83.496a8.166 8.166 0 002.116 7.883l37.764 37.764L48.636 359.469a8.266 8.266 0 00-.601.675c-.047.059-.088.122-.134.182a8.964 8.964 0 00-.39.555c-.046.072-.087.146-.13.22a7.324 7.324 0 00-.419.811c-.088.198-.169.4-.241.603-.017.05-.042.098-.059.148L.489 501.18a8.169 8.169 0 0010.331 10.333l138.52-46.173c.051-.017.099-.042.15-.06a7.71 7.71 0 00.841-.352c.193-.094.382-.197.568-.307.074-.044.148-.085.221-.131.189-.12.374-.252.554-.389.061-.046.124-.087.183-.135.233-.186.46-.386.675-.601L336.828 279.07l37.764 37.764a8.167 8.167 0 007.883 2.116c30.935-8.258 64.195.655 86.804 23.264 21.008 21.009 30.043 50.285 25.01 78.904l-49.398-49.399a8.172 8.172 0 00-7.858-2.123l-48.767 12.848a8.166 8.166 0 00-5.818 5.82l-12.268 46.632-31.083 31.083c-20.289-22.472-28.013-54.039-20.146-83.504a8.172 8.172 0 00-2.115-7.883l-20.439-20.438a8.168 8.168 0 00-11.552 11.551L302.04 382.9c-7.715 35.204 3.03 72.339 28.622 97.93.669.669 1.344 1.324 2.027 1.972.169.205.347.404.539.596.325.325.673.607 1.035.865 19.847 18.112 45.202 27.737 71.236 27.736 11.386 0 22.906-1.842 34.147-5.62a8.167 8.167 0 003.173-13.519l-56.21-56.21 10.425-39.625 39.624-10.439 56.21 56.211a8.17 8.17 0 0013.52-3.176c12.934-38.505 3.142-80.257-25.557-108.956zM134.505 61.337L90.882 17.712c24.785-4.36 50.056 1.839 70.028 17.22l-26.405 26.405zm273.165-37.8c4.598-4.598 10.746-7.13 17.312-7.13 6.564 0 12.713 2.532 17.311 7.13l46.172 46.173c9.546 9.546 9.546 25.077 0 34.622l-40.397 40.397-80.795-80.795 40.397-40.397zM21.153 490.849l13.742-41.224 27.483 27.483-41.225 13.741zm58.552-19.517L40.67 432.298l17.311-51.933 73.656 73.656-51.932 17.311zm67.052-25.292l-80.796-80.796 258.977-258.976 34.623 34.621-241.666 241.667a8.167 8.167 0 000 11.551 8.145 8.145 0 005.775 2.393c2.09 0 4.181-.797 5.775-2.393L371.11 152.443l17.311 17.31a8.15 8.15 0 005.776 2.393 8.14 8.14 0 005.776-2.393 8.167 8.167 0 000-11.551l-23.085-23.085-40.4-40.4 19.231-19.231 80.795 80.795L146.757 446.04zm274.385 48.248c-24.785 4.362-50.061-1.83-70.039-17.209l26.414-26.414 43.625 43.623z" />
                                    <Path fill="white" d="M183.615 148.961a8.167 8.167 0 00-11.551 0l-23.102 23.102a8.167 8.167 0 000 11.551c1.594 1.594 3.685 2.393 5.775 2.393s4.181-.797 5.775-2.393l23.102-23.102a8.166 8.166 0 00.001-11.551zM363.041 328.389a8.168 8.168 0 00-11.552 0l-23.102 23.102a8.167 8.167 0 005.776 13.944c2.089 0 4.18-.798 5.775-2.393l23.102-23.102a8.166 8.166 0 00.001-11.551z" />
                                </Svg>
                            </View>
                            <Text style={{marginTop:EStyleSheet.value("10rem"),lineHeight:20,letterSpacing:EStyleSheet.value("1rem"),color:"white",fontWeight:"bold",fontSize:EStyleSheet.value("12rem"),marginBottom:EStyleSheet.value("30rem")}}>JAGOAN K3</Text>
                        </LinearGradient>
                        <Pressable
                        onPress={()=>{
                            props.navigation.navigate("ModulPelatihan");
                        }}
                        >
                            <LinearGradient 
                            colors={['#24b596', '#04a280', '#04a280']}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                            style={{...shadow,backgroundColor:"#24b596",height:EStyleSheet.value("120rem"),borderRadius:EStyleSheet.value("5rem"),padding:EStyleSheet.value("10rem"),width:EStyleSheet.value("103.5rem"),marginRight:EStyleSheet.value("15rem")}}>
                                
                                <View style={{height:EStyleSheet.value("30rem"),width:EStyleSheet.value("30rem"),marginTop:EStyleSheet.value("5rem")}}>
                                        <Svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 489.9 489.9"
                                        style={{backgroundColor:"#24b596"}}
                                        height="100%" width="100%"
                                        >
                                        <Path fill="white" d="M131.75 409.1c-28.8 0-52.1 18.3-52.1 40.4 0 22.6 23.3 40.4 52.1 40.4h278.4c-22.6-24.1-22.6-56.8 0-80.9h-278.4v.1zM120.15 1.9c-23.3 7-40.4 32.7-40.4 63.8v342.2c10.5-9.3 24.9-15.9 40.4-17.9V1.9zM244.95 0v99.2l-40.1-25.3-40 25.3V0h-24.9v388.9h270.3V0z" />
                                        </Svg>
                                </View>
                                <Text style={{marginTop:EStyleSheet.value("10rem"),lineHeight:20,letterSpacing:EStyleSheet.value("1rem"),color:"white",fontWeight:"bold",fontSize:EStyleSheet.value("12rem"),marginBottom:EStyleSheet.value("30rem")}}>MODUL PELATIHAN</Text>
                            </LinearGradient>
                        </Pressable>
                        <Pressable
                        onPress={()=>{
                            props.navigation.navigate("Shop");
                        }}
                        >
                            <View style={{...shadow,backgroundColor:"white",height:EStyleSheet.value("120rem"),borderRadius:EStyleSheet.value("5rem"),padding:EStyleSheet.value("10rem"),width:EStyleSheet.value("103.5rem"),marginRight:EStyleSheet.value("15rem")}}>
                                <View style={{height:EStyleSheet.value("35rem"),width:EStyleSheet.value("35rem")}}>
                                    <Svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 244.742 244.742"
                                        height="100%" width="100%"
                                        style={{backgroundColor:"white"}}
                                        >
                                        <Path fill="#24b596" d="M243.37 85.341l-45.651-65.307a7.608 7.608 0 00-6.236-3.249H55.796a7.6 7.6 0 00-6.122 3.092L1.486 85.184A7.618 7.618 0 000 89.701c0 15.062 10.987 27.581 25.359 30.039v84.546c0 13.051 10.619 23.67 23.67 23.67h148.58c13.051 0 23.668-10.619 23.668-23.67V119.23c12.179-3.125 21.454-13.571 22.775-26.366a7.608 7.608 0 00-.682-7.523zm-63.298 127.4H148.37v-64.99h31.702v64.99zm25.987-8.453c.003 4.662-3.791 8.453-8.447 8.453h-2.323v-72.598a7.609 7.609 0 00-7.609-7.609h-46.919a7.609 7.609 0 00-7.609 7.609v72.598H49.029c-4.662 0-8.453-3.792-8.453-8.453v-85.802a30.627 30.627 0 0012.833-8.648c5.595 6.356 13.789 10.37 22.899 10.37 9.11 0 17.304-4.015 22.899-10.37 5.595 6.356 13.789 10.37 22.899 10.37 9.113 0 17.307-4.015 22.902-10.37 5.595 6.356 13.789 10.37 22.899 10.37 9.11 0 17.304-4.015 22.899-10.37a30.542 30.542 0 0015.253 9.361v85.089zm7.65-99.296c-8.43 0-15.291-6.86-15.291-15.291a7.609 7.609 0 10-15.218 0c0 8.433-6.86 15.291-15.291 15.291-8.431 0-15.291-6.86-15.291-15.291a7.609 7.609 0 10-15.218 0c0 8.433-6.86 15.291-15.293 15.291s-15.291-6.86-15.291-15.291a7.609 7.609 0 10-15.218 0c0 8.433-6.86 15.291-15.291 15.291-8.431 0-15.291-6.86-15.291-15.291a7.609 7.609 0 10-15.218 0c0 8.433-6.86 15.291-15.291 15.291-7.659 0-14.02-5.658-15.123-13.016l44.251-59.973H187.52l41.406 59.233c-.774 7.715-7.304 13.756-15.217 13.756z" />
                                        <Path fill="#24b596" d="M112.13 132.535H60.234a7.609 7.609 0 00-7.609 7.609V187.7a7.609 7.609 0 007.609 7.609h51.895a7.609 7.609 0 007.609-7.609v-47.556a7.608 7.608 0 00-7.608-7.609zm-7.609 47.556H67.843v-32.339h36.678v32.339z" />
                                        </Svg>
                                </View>
                                <Text style={{marginTop:EStyleSheet.value("10rem"),lineHeight:20,letterSpacing:EStyleSheet.value("1rem"),color:"#24b596",fontWeight:"bold",fontSize:EStyleSheet.value("12rem"),marginBottom:EStyleSheet.value("30rem")}}>SHOP</Text>
                            </View>
                        </Pressable>
                    </View>
                    <View style={{flexDirection:"row",marginBottom:EStyleSheet.value("25rem")}}>
                        <Pressable
                        onPress={()=>{
                            props.navigation.navigate("Artikel");
                        }}
                        >
                        <View style={{...shadow,backgroundColor:"white",height:EStyleSheet.value("120rem"),borderRadius:EStyleSheet.value("5rem"),padding:EStyleSheet.value("10rem"),width:EStyleSheet.value("103.5rem"),marginRight:EStyleSheet.value("15rem")}}>
                            <View style={{height:EStyleSheet.value("40rem"),width:EStyleSheet.value("40rem")}}>
                                    <Svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    width={"100%"}
                                    height={"100%"}
                                    {...props}
                                    >
                                    <Path fill="#24b596" d="M.012 29.845c.002.397.325.72.723.72h26.677c.5 0 .904-.405.904-.905v-.971H.008l.004 1.156zM27.605 12.611l-2.264.628V25.28a12.405 12.405 0 00-4.729-.947c-1.64 0-3.291.326-4.909.973V9.499c.776-.483 2.477-1.399 4.555-1.504l.521-2.27-.133-.001c-3.07 0-5.499 1.422-6.394 2.029-.172.117-.176.117-.003 0-.895-.607-3.321-2.029-6.392-2.029-2.342 0-4.55.817-6.534 2.429-.26.215-.428.537-.428.878v3.521L0 27.59h28.324l-.719-14.771v-.208zm-14.81 12.693c-1.617-.646-3.269-.972-4.908-.972-1.966 0-3.564.473-4.728.949V9.586c1.487-1.063 3.039-1.6 4.69-1.6 2.253 0 4.17 1.002 4.946 1.514v15.804z" />
                                    <Path fill="#24b596" d="M31.766 4.952a.905.905 0 00-.031-1.28l-2.072-1.979a.868.868 0 00-1.232.028l-3.719 3.893-.918-.877a.67.67 0 00-1.113.335l-1.359 5.94a1.03 1.03 0 001.283 1.226l5.619-1.562a.817.817 0 00.343-1.38l-.497-.473 3.696-3.871z" />
                                    </Svg>
                            </View>
                            <Text style={{marginTop:EStyleSheet.value("10rem"),lineHeight:20,letterSpacing:EStyleSheet.value("1rem"),color:"#24b596",fontWeight:"bold",fontSize:EStyleSheet.value("12rem"),marginBottom:EStyleSheet.value("30rem")}}>ARTIKEL</Text>
                        </View>
                        </Pressable>
                        <Pressable
                        onPress={()=>{
                            props.navigation.navigate("Ebook");
                        }}
                        >
                        <View style={{...shadow,backgroundColor:"white",height:EStyleSheet.value("120rem"),borderRadius:EStyleSheet.value("5rem"),padding:EStyleSheet.value("10rem"),width:EStyleSheet.value("103.5rem"),marginRight:EStyleSheet.value("15rem")}}>
                            <View style={{height:EStyleSheet.value("40rem"),width:EStyleSheet.value("40rem")}}>
                                <Svg
                                style={{marginTop:EStyleSheet.value("5rem")}}
                                xmlns="http://www.w3.org/2000/svg"
                                width={"100%"}
                                height={"100%"}
                                viewBox="0 0 80 80"
                                {...props}
                                >
                                <Path fill="#24b596" d="M54.203 0h-39.71a2.103 2.103 0 00-2.102 2.102v64.492c0 1.156.941 2.101 2.102 2.101h39.71a2.105 2.105 0 002.101-2.101V2.104C56.304.944 55.361 0 54.203 0zM29.024 3.272H39.67c.27 0 .49.231.49.517 0 .283-.221.517-.49.517H29.024c-.269 0-.488-.234-.488-.517a.5.5 0 01.488-.517zm5.713 62.934a2.477 2.477 0 11.002-4.954 2.477 2.477 0 01-.002 4.954zM52.1 58.359H16.595V7.031h2.151v7.3l2.273-1.906 2.273 1.906v-7.3H52.1v51.328zm-5.297-38.304H34.347v-1.824h12.456v1.824zm0 6.969H34.347v-1.825h12.456v1.825zM21.89 32.227h24.913v1.832H21.89v-1.832zm0 6.971h24.913v1.824H21.89v-1.824zm0 7.034h24.913v1.83H21.89v-1.83zm1.07-18.674h1.063l.649-2.008h3.747l.67 2.008H31.276l-3.497-9.883h-2.394l-3.497 9.883h1.072zm3.595-7.67l1.312 3.961h-2.623l1.311-3.961z" />
                                </Svg>
                            </View>
                            <Text style={{marginTop:EStyleSheet.value("10rem"),lineHeight:20,letterSpacing:EStyleSheet.value("1rem"),color:"#24b596",fontWeight:"bold",fontSize:EStyleSheet.value("12rem"),marginBottom:EStyleSheet.value("30rem")}}>E-BOOK</Text>
                        </View>
                        </Pressable>
                        <Pressable
                        onPress={()=>{
                            props.navigation.navigate("Webinar");
                        }}
                        >
                        <View style={{...shadow,backgroundColor:"white",height:EStyleSheet.value("120rem"),borderRadius:EStyleSheet.value("5rem"),padding:EStyleSheet.value("10rem"),width:EStyleSheet.value("103.5rem"),marginRight:EStyleSheet.value("15rem")}}>
                            <View style={{height:EStyleSheet.value("40rem"),width:EStyleSheet.value("40rem")}}>
                                    <Svg
                                    style={{marginTop:EStyleSheet.value("5rem")}}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={"100%"}
                                    height={"100%"}
                                    viewBox="0 0 130 130"
                                    {...props}
                                    >
                                    <Path fill="#24b596" d="M104.097 25.769c-.146-.09-.301-.148-.454-.219a13.196 13.196 0 00-4.054-1.765l-2.828 2.845-2.739-2.876c-.011.002-.021.002-.028.006a13.067 13.067 0 00-3.898 1.646 4.462 4.462 0 00-.885.372c-1.756.987-3.428 1.18-5.256.61-6.06-1.888-11.703-11.133-13.365-14.531a4.358 4.358 0 00-2.01-2.005l-1.208-.402a4.372 4.372 0 00-2.668.37 4.404 4.404 0 00-2.038 5.886c.257.531 1.219 2.447 2.778 4.889l1.039 1.57c3.252 4.732 8.389 10.611 14.829 12.627 1.274.399 2.56.621 3.837.688v23.214c0 1.199.236 2.315.648 3.341-.028.219-.067.436-.067.664l.003 42.183a5.206 5.206 0 0010.413 0l-.002-36.202c.207.01.412.025.619.025.041 0 .082-.004.123-.006l-.002 36.183a5.207 5.207 0 0010.414 0V63.499c.274.262.572.502.92.692a4.407 4.407 0 005.976-1.766c12.426-22.841-4.525-33.238-10.097-36.656zM96.79 49.088h-.053l-2.736-3.745 2.736-18.291h.053l2.736 18.291-2.736 3.745zm11.586 4.996V41.487c1.683 3.182 2.06 7.211 0 12.597z" />
                                    <Circle cx={96.763} cy={11.78} r={11.347} />
                                    <Path fill="#24b596" d="M71.708 63.768H16.112a6.412 6.412 0 01-6.404-6.405V6.404A6.412 6.412 0 0116.112 0h55.596a6.411 6.411 0 016.404 6.404v50.958c-.001 3.532-2.873 6.406-6.404 6.406zM16.112 4.27a2.136 2.136 0 00-2.135 2.135v50.958c0 1.177.957 2.135 2.135 2.135h55.596a2.137 2.137 0 002.135-2.135V6.404a2.136 2.136 0 00-2.135-2.135l-55.596.001z" />
                                    <Circle cx={26.429} cy={79.091} r={8.983} />
                                    <Path fill="#24b596" d="M16.021 108.576c-.267-2.463.231-4.483 1.213-6.188v6.188h9.134l-2.126-2.91 2.166-14.483h.042l2.166 14.483-2.126 2.91h9.134v-6.172c.975 1.701 1.47 3.718 1.204 6.172h7.031c.808-10.78-8.032-16.215-11.455-18.314-.151-.092-.31-.158-.468-.226a10.413 10.413 0 00-3.27-1.44l-2.238 2.252-2.17-2.277-.023.004a10.343 10.343 0 00-3.332 1.464 3.15 3.15 0 00-.461.223c-3.423 2.101-12.263 7.534-11.455 18.313h7.034v.001z" />
                                    <Circle cx={61.403} cy={79.091} r={8.983} />
                                    <Path fill="#24b596" d="M50.996 108.576c-.268-2.463.232-4.483 1.214-6.188v6.188h9.134l-2.126-2.91 2.166-14.483h.042l2.167 14.483-2.127 2.91H70.6v-6.172c.976 1.701 1.47 3.718 1.204 6.172h7.031c.808-10.78-8.031-16.215-11.455-18.314-.15-.092-.31-.158-.469-.226-1-.667-2.123-1.159-3.27-1.44l-2.238 2.252-2.17-2.277-.022.004a10.339 10.339 0 00-3.333 1.464 3.19 3.19 0 00-.46.223c-3.424 2.101-12.263 7.534-11.455 18.313h7.032v.001zM5.53 111.373h102.723v12.803H5.53zM67.021 25.858L49.198 31.8l-9.376-7.133-6.777 6.291-13.824-13.824v37.778h-1.828v1.519h52.053v-1.519h-2.425V25.858zm-1.464 9.363l-16.341 5.448-9.43-4.668-7.018 4.01-12.08-13.661v-5.676l12.32 12.32 6.908-6.414 9.01 6.856 16.63-5.542.001 7.327z" />
                                    </Svg>
                            </View>
                            <Text style={{marginTop:EStyleSheet.value("10rem"),lineHeight:20,letterSpacing:EStyleSheet.value("1rem"),color:"#24b596",fontWeight:"bold",fontSize:EStyleSheet.value("12rem"),marginBottom:EStyleSheet.value("30rem")}}>WEBINAR</Text>
                        </View>
                        </Pressable>
                    </View>
               </View>
               <View style={{marginBottom:EStyleSheet.value("25rem")}}>
                   <View style={{paddingHorizontal:EStyleSheet.value("20rem"),flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontWeight:"bold"}}>AVAILABLE TRAINING SCHEDULE</Text>
                        {/* <Text style={{fontWeight:"bold",color:"#24b596"}}>More</Text> */}
                   </View>
                   <View style={{marginTop:EStyleSheet.value("30rem"),overflow:"hidden",paddingHorizontal:EStyleSheet.value("20rem")}}>
                      {
                          [1,2,3,4].map(()=>{
                              return (
                                <Pressable
                                onPress={()=>{
                                    props.navigation.navigate("ListSertifikasi");
                                }}
                                >
                                    <LinearGradient 
                                    colors={['#24b596', '#04a280', '#04a280']}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 1 }}
                                    style={{backgroundColor:"#24b596",...shadow,overflow:"hidden",marginBottom:EStyleSheet.value("15rem"),borderRadius:EStyleSheet.value("5rem"),display:"flex",flexDirection:"row"}}>
                                        <View style={{width:EStyleSheet.value("70rem"),justifyContent:"center",alignItems:"center",height:EStyleSheet.value("60rem")}}>
                                            <Svg xmlns="http://www.w3.org/2000/svg" width={EStyleSheet.value("35rem")} height={EStyleSheet.value("35rem")} viewBox="0 0 512 512" {...props}>
                                            <Path fill="white" d="M417.616 353.666c-.829-10.837-9.892-19.408-20.937-19.408h-20.948c-8.596 0-15.994 5.193-19.247 12.602H335.31l-27.034-10.121v-9.636c31.732-13.771 53.991-45.397 53.991-82.135v-1.663c14.84-3.638 25.887-17.045 25.887-32.99 0-1.524-.111-3.021-.306-4.493v-44.267c3.995-4.028 6.468-9.567 6.468-15.675v-3.487c0-11.148-8.238-20.381-18.941-22-4.178-25.79-16.65-49.128-34.762-66.912v-5.015a8.082 8.082 0 00-8.084-8.084 8.052 8.052 0 00-5.136 1.841 120.21 120.21 0 00-34.711-17.68v-2.157C292.682 10.041 282.641 0 270.298 0h-28.599c-12.342 0-22.384 10.041-22.384 22.385v2.157a120.185 120.185 0 00-34.711 17.68 8.049 8.049 0 00-5.135-1.841 8.082 8.082 0 00-8.084 8.084v5.015c-18.112 17.784-30.584 41.124-34.762 66.914-10.701 1.619-18.94 10.853-18.94 22v3.487c0 5.945 2.354 11.339 6.162 15.338v49.096c0 15.945 11.046 29.352 25.887 32.99v1.663c0 36.738 22.258 68.363 53.991 82.134v9.626l-27.06 10.133h-21.201c-3.253-7.409-10.651-12.602-19.247-12.602h-20.948c-11.053 0-20.12 8.582-20.938 19.429-34.78 14.103-57.773 47.873-57.773 85.802v51.491c0 11.59 9.429 21.019 21.019 21.019H304.896a8.082 8.082 0 008.084-8.084 8.082 8.082 0 00-8.084-8.084H157.259v-18.343h197.453v18.343h-20.714a8.083 8.083 0 00-8.084 8.084 8.082 8.082 0 008.084 8.084H454.424c11.59 0 21.019-9.429 21.019-21.019v-51.492a92.492 92.492 0 00-57.827-85.823zm-323.37 56.251v85.915H57.573a4.856 4.856 0 01-4.851-4.851v-51.492a76.372 76.372 0 0141.524-68.018v38.446zm46.818 85.915h-30.649v-77.829h30.649v77.829zm.001-93.997h-30.649v-46.556h-.001a4.857 4.857 0 014.851-4.851h20.948c2.63 0 4.766 2.107 4.838 4.721v.026c.003.102.008.203.014.308v46.352zm180.676-42.79l-33.111 52.871-21.004-14.555 35.297-45.362 18.818 7.046zm40.526-132.873V194.5a18.066 18.066 0 017.409 7.073l.021.036c.494.87.912 1.787 1.255 2.741.044.123.081.248.123.372a17.77 17.77 0 01.427 1.499c.082.346.152.697.212 1.051.171.991.272 2.005.272 3.044-.001 6.906-3.954 12.906-9.719 15.856zm.001-48.874v-9.14h9.411v12.972a33.773 33.773 0 00-9.411-3.832zm-21.655-99.212c9.011 12.331 15.383 26.638 18.321 42.029h-18.321V78.086zm-47.932-36.463c11.765 4.403 22.485 10.858 31.763 18.891v59.601h-31.763V41.623zm-50.982-25.455h28.599a6.223 6.223 0 016.216 6.216v97.73h-41.029V22.385h-.001a6.223 6.223 0 016.215-6.217zm-54.147 44.346a104.498 104.498 0 0131.763-18.891v78.492h-31.763V60.514zm-16.168 17.572v42.028h-18.321c2.939-15.389 9.311-29.697 18.321-42.028zM149.73 226.172c-5.763-2.95-9.717-8.951-9.717-15.858 0-.548.033-1.088.082-1.623.013-.146.03-.291.046-.435.051-.44.117-.874.199-1.304.019-.098.032-.198.053-.296.107-.511.238-1.014.389-1.508.037-.119.078-.236.116-.354.13-.397.274-.788.43-1.172.049-.12.095-.24.147-.359.204-.471.425-.933.667-1.383.034-.064.073-.124.109-.188.217-.39.45-.77.694-1.14.076-.114.152-.229.23-.342.269-.388.55-.769.848-1.134l.073-.095c.324-.392.669-.765 1.026-1.129.093-.094.188-.185.282-.277.297-.29.606-.57.923-.839.082-.069.161-.142.245-.21.392-.32.798-.624 1.217-.911.089-.06.181-.116.272-.176.349-.23.707-.447 1.072-.652.115-.065.23-.13.347-.193.081-.043.167-.079.249-.121v31.699zm.002-48.855h-.001c-.05.012-.097.03-.147.042a33.88 33.88 0 00-2.228.641c-.156.051-.31.106-.466.158-.716.244-1.424.506-2.117.794-.039.016-.079.03-.116.046a32.999 32.999 0 00-2.569 1.223c-.677.356-1.344.728-1.993 1.126-.026.016-.054.029-.081.045v-13.234h9.718v9.159zm-9.772-25.327a6.116 6.116 0 01-6.108-6.109v-3.487h-.001a6.116 6.116 0 016.108-6.109h232.078a6.117 6.117 0 016.109 6.109v3.487a6.117 6.117 0 01-6.109 6.109H139.96zm25.939 92.978v-76.81h180.2v76.81c0 34.005-23.271 62.673-54.723 70.931-.291.077-.584.147-.876.219-.791.197-1.587.382-2.388.552-.33.07-.659.142-.99.208-.952.19-1.91.362-2.875.515-.13.021-.26.046-.391.067-1.08.165-2.17.3-3.264.416-.324.034-.65.061-.974.092-.821.077-1.646.14-2.475.189-.334.019-.668.041-1.004.056a74.01 74.01 0 01-3.374.085h-33.54c-1.131 0-2.254-.034-3.373-.085-.335-.015-.67-.037-1.005-.056a71.648 71.648 0 01-2.469-.189c-.327-.03-.654-.057-.981-.093a72.402 72.402 0 01-3.257-.415c-.138-.022-.276-.049-.414-.071a72.138 72.138 0 01-2.849-.51c-.335-.067-.668-.139-1.002-.21a74.952 74.952 0 01-2.373-.549c-.295-.073-.592-.144-.886-.221-31.448-8.261-54.717-36.927-54.717-70.931zm43.148 107.03l35.297 45.362-21.004 14.555-33.111-52.871 18.818-7.046zm38.84 109.326h-90.655V363.03h16.416l40.484 64.645a8.087 8.087 0 006.038 3.752c.125.013.25.012.375.019.147.008.293.023.44.023h.002c.363 0 .723-.033 1.081-.082a8.095 8.095 0 002.571-.8c.326-.165.646-.345.949-.555l22.299-15.452v46.744zm-27.998-121.756v-7.209c.307.068.617.126.924.191a88.953 88.953 0 004.466.822c.253.04.507.077.761.114 1.27.189 2.544.354 3.822.487.207.022.414.039.621.059 1.342.132 2.687.237 4.037.308l.369.015c1.443.069 2.89.11 4.34.11h33.542c1.452 0 2.9-.041 4.345-.11l.36-.015a89.642 89.642 0 004.05-.309l.606-.057c1.284-.135 2.563-.3 3.839-.489.247-.037.495-.073.74-.111a88.472 88.472 0 004.465-.82c.312-.066.623-.124.935-.193v7.209L256 385.977l-36.111-46.409zm134.823 70.348v51.403h-90.656v-46.761l22.328 15.471a8.075 8.075 0 001.189.672 8.068 8.068 0 002.331.683c.358.049.719.082 1.081.082h.002c.147 0 .293-.014.44-.023.125-.007.25-.007.375-.019a8.09 8.09 0 006.038-3.752l40.484-64.645h16.389v46.889zm16.168-54.433c.006-.103.011-.205.014-.309v-.026a4.845 4.845 0 014.837-4.72h20.948a4.857 4.857 0 014.851 4.851V401.834h-30.65v-46.351zm30.649 140.349h-30.622v-26.427c0-.183-.015-.362-.027-.542v-50.86h30.649v77.829zm57.745-4.851a4.857 4.857 0 01-4.851 4.851h-36.727V371.444a76.363 76.363 0 0141.578 68.046v51.491z" />
                                            <Circle  fill="white" cx={214.704} cy={220.343} r={10.779} />
                                            <Circle  fill="white" cx={297.293} cy={220.343} r={10.779} />
                                            <Path  fill="white" d="M284.855 201.372c.132-.055 13.681-5.202 29.804.175a8.1 8.1 0 002.558.417 8.086 8.086 0 007.668-5.53 8.083 8.083 0 00-5.112-10.226c-21.978-7.328-40.215-.135-40.982.175a8.088 8.088 0 00-4.464 10.527 8.086 8.086 0 0010.528 4.462zM227.127 201.388a8.08 8.08 0 0010.486-4.48 8.084 8.084 0 00-4.465-10.526c-.764-.308-19.004-7.499-40.982-.175a8.084 8.084 0 00-5.112 10.226 8.088 8.088 0 007.668 5.53 8.1 8.1 0 002.558-.417c16.019-5.339 29.537-.276 29.847-.158zM228.971 260.918a8.082 8.082 0 00-3.27 10.955c5.552 10.281 17.435 16.924 30.271 16.924s24.718-6.643 30.271-16.924a8.085 8.085 0 00-14.225-7.685c-2.769 5.128-9.067 8.44-16.046 8.44s-13.275-3.312-16.046-8.44a8.086 8.086 0 00-10.955-3.27zM255.971 251.83a8.083 8.083 0 008.084-8.084V215.72a8.082 8.082 0 00-8.084-8.084 8.083 8.083 0 00-8.084 8.084v28.025a8.085 8.085 0 008.084 8.085z" />
                                            </Svg>
                                        </View>
                                        <View style={{flex:1,justifyContent:"center"}}>
                                            <Text style={{color:"white",marginBottom:EStyleSheet.value("2rem"),fontSize:EStyleSheet.value("10rem")}}>SERTIFIKASI</Text>
                                            <Text numberOfLines={1} style={{fontWeight:"bold",color:"white"}}>Sertifikasi Kemnaker RI</Text>
                                        </View>
                                        <LinearGradient 
                                        colors={['#24b596', '#04a280', '#04a280']}
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 1, y: 1 }}
                                        style={{width:EStyleSheet.value("80rem"),backgroundColor:"whitesmoke",justifyContent:"center",alignItems:"center",borderTopLeftRadius:EStyleSheet.value("10rem"),borderBottomLeftRadius:EStyleSheet.value("10rem")}}>
                                            <Text style={{color:"white",fontSize:EStyleSheet.value("15rem")}}>24</Text>
                                            <Text style={{color:"white",marginTop:EStyleSheet.value("5rem"),fontSize:EStyleSheet.value("11rem")}}>JADWAL</Text>
                                        </LinearGradient>
                                    </LinearGradient>
                                </Pressable>
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