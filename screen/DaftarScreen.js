import { StatusBar } from 'expo-status-bar';
import React, {useState, useEfffect, useRef} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, Pressable, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 


import { StatusBarHeight } from '../utils/HeightUtils';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function DaftarScreen(props){

    let refFormNamaLengkap = useRef();
    let refFormUsername = useRef();
    let refFormEmail = useRef();
    let refFormNoTelepon = useRef();
    let refFormKataSandi = useRef();
    let refFormKonfirmasiKataSandi = useRef();

    let [selectedForm, setSelectedForm] = useState(0);

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
                <Text style={{color:"white",fontWeight:"bold",fontSize:EStyleSheet.value("23rem")}}>Daftar</Text>
            </View>
            <View style={{marginTop:EStyleSheet.value("25rem"),marginBottom:EStyleSheet.value("40rem"),flex:1,alignItems:"center"}}>
                <View style={{marginHorizontal:EStyleSheet.value("15rem"),alignItems:"center",marginTop:10,width:Dimensions.get("screen").width-EStyleSheet.value("40rem"),position:"absolute",zIndex:99,backgroundColor:"white",opacity:0.5,borderRadius:EStyleSheet.value("5rem"),paddingHorizontal:EStyleSheet.value("15rem"),paddingVertical:EStyleSheet.value("25rem")}}>
                <View style={{borderBottomWidth:0.7,borderBottomColor:"grey"}}>
                        <View style={{flexDirection:"row",display:"flex"}}>
                            <View style={{width:EStyleSheet.value("35rem"),justifyContent:"center",alignItems:"center"}}>
                                <Feather name="user" size={EStyleSheet.value("23rem")} color="rgb(38, 180, 149)" />
                            </View>
                            <View style={{flex:1,paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold",color:"#535353"}}>Nama Lengkap</Text>
                                <View style={{height:EStyleSheet.value("35rem"),justifyContent:"center"}}>
                                    <TextInput style={{width:"100%",padding:0,height:"100%",color:"grey"}}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{borderBottomWidth:0.7,marginTop:EStyleSheet.value("20rem"),borderBottomColor:"grey"}}>
                        <View style={{flexDirection:"row",display:"flex"}}>
                            <View style={{width:EStyleSheet.value("35rem"),justifyContent:"center",alignItems:"center"}}>
                                <Feather name="user" size={EStyleSheet.value("23rem")} color="rgb(38, 180, 149)" />
                            </View>
                            <View style={{flex:1,paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold",color:"#535353"}}>Username</Text>
                                <View style={{height:EStyleSheet.value("35rem"),justifyContent:"center"}}>
                                    <TextInput style={{width:"100%",padding:0,height:"100%",color:"grey"}}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{borderBottomWidth:0.7,marginTop:EStyleSheet.value("20rem"),borderBottomColor:"grey"}}>
                        <View style={{flexDirection:"row",display:"flex"}}>
                            <View style={{width:EStyleSheet.value("35rem"),justifyContent:"center",alignItems:"center"}}>
                                <MaterialCommunityIcons name="email-outline" size={EStyleSheet.value("23rem")} color="rgb(38, 180, 149)" />
                            </View>
                            <View style={{flex:1,paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold",color:"#535353"}}>Email</Text>
                                <View style={{height:EStyleSheet.value("35rem"),justifyContent:"center"}}>
                                    <TextInput style={{width:"100%",padding:0,height:"100%",color:"grey"}}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{borderBottomWidth:0.7,marginTop:EStyleSheet.value("20rem"),borderBottomColor:"grey"}}>
                        <View style={{flexDirection:"row",display:"flex"}}>
                            <View style={{width:EStyleSheet.value("35rem"),justifyContent:"center",alignItems:"center"}}>
                                <MaterialCommunityIcons name="email-outline" size={EStyleSheet.value("23rem")} color="rgb(38, 180, 149)" />
                            </View>
                            <View style={{flex:1,paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold",color:"#535353"}}>No Telepon</Text>
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
                                <View style={{height:EStyleSheet.value("35rem"),flexDirection:"row",justifyContent:"center"}}>
                                    <TextInput secureTextEntry={true} style={{flex:1,padding:0,height:"100%",color:"grey"}}/>
                                    <View style={{width:EStyleSheet.value("40rem"),justifyContent:"center",alignItems:"center"}}>
                                            <Ionicons name="eye" size={EStyleSheet.value("19rem")} color="black" />
                                    </View>
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
                                <Text style={{fontWeight:"bold",color:"#535353"}}>Konfirmasi Kata Sandi</Text>
                                <View style={{height:EStyleSheet.value("35rem"),flexDirection:"row",justifyContent:"center"}}>
                                    <TextInput secureTextEntry={true} style={{flex:1,padding:0,height:"100%",color:"grey"}}/>
                                    <View style={{width:EStyleSheet.value("40rem"),justifyContent:"center",alignItems:"center"}}>
                                            <Ionicons name="eye" size={EStyleSheet.value("19rem")} color="black" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("20rem"),justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"grey",textAlign:"center",fontSize:EStyleSheet.value("13rem"),paddingHorizontal:EStyleSheet.value("30rem")}}>
                        Dengan menekan tombol daftar, Anda menyetujui Syarat & Ketentuan Kami.
                        </Text>
                    </View>
                    <View style={{marginTop:EStyleSheet.value("10rem"),backgroundColor:"rgb(38, 180, 149)",borderRadius:EStyleSheet.value("5rem"),justifyContent:"center",alignItems:"center",paddingVertical:EStyleSheet.value("15rem")}}>
                        <Text style={{color:"white",fontWeight:"bold"}}>Masuk</Text>
                        <Entypo style={{paddingLeft:EStyleSheet.value("5rem"),position:"absolute",right:EStyleSheet.value("15rem"),top:EStyleSheet.value("25rem")/2}} name="arrow-long-right" size={EStyleSheet.value("20rem")} color="white" />
                    </View>
                </View>
                <View style={{marginHorizontal:EStyleSheet.value("15rem"),marginTop:20,width:Dimensions.get("screen").width-EStyleSheet.value("50rem"),position:"absolute",zIndex:99,backgroundColor:"white",opacity:0.5,borderRadius:EStyleSheet.value("5rem"),paddingHorizontal:EStyleSheet.value("15rem"),paddingVertical:EStyleSheet.value("25rem")}}>
                <View style={{borderBottomWidth:0.7,borderBottomColor:"grey"}}>
                        <View style={{flexDirection:"row",display:"flex"}}>
                            <View style={{width:EStyleSheet.value("35rem"),justifyContent:"center",alignItems:"center"}}>
                                <Feather name="user" size={EStyleSheet.value("23rem")} color="rgb(38, 180, 149)" />
                            </View>
                            <View style={{flex:1,paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold",color:"#535353"}}>Nama Lengkap</Text>
                                <View style={{height:EStyleSheet.value("35rem"),justifyContent:"center"}}>
                                    <TextInput style={{width:"100%",padding:0,height:"100%",color:"grey"}}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{borderBottomWidth:0.7,marginTop:EStyleSheet.value("20rem"),borderBottomColor:"grey"}}>
                        <View style={{flexDirection:"row",display:"flex"}}>
                            <View style={{width:EStyleSheet.value("35rem"),justifyContent:"center",alignItems:"center"}}>
                                <Feather name="user" size={EStyleSheet.value("23rem")} color="rgb(38, 180, 149)" />
                            </View>
                            <View style={{flex:1,paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold",color:"#535353"}}>Username</Text>
                                <View style={{height:EStyleSheet.value("35rem"),justifyContent:"center"}}>
                                    <TextInput style={{width:"100%",padding:0,height:"100%",color:"grey"}}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{borderBottomWidth:0.7,marginTop:EStyleSheet.value("20rem"),borderBottomColor:"grey"}}>
                        <View style={{flexDirection:"row",display:"flex"}}>
                            <View style={{width:EStyleSheet.value("35rem"),justifyContent:"center",alignItems:"center"}}>
                                <MaterialCommunityIcons name="email-outline" size={EStyleSheet.value("23rem")} color="rgb(38, 180, 149)" />
                            </View>
                            <View style={{flex:1,paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold",color:"#535353"}}>Email</Text>
                                <View style={{height:EStyleSheet.value("35rem"),justifyContent:"center"}}>
                                    <TextInput style={{width:"100%",padding:0,height:"100%",color:"grey"}}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{borderBottomWidth:0.7,marginTop:EStyleSheet.value("20rem"),borderBottomColor:"grey"}}>
                        <View style={{flexDirection:"row",display:"flex"}}>
                            <View style={{width:EStyleSheet.value("35rem"),justifyContent:"center",alignItems:"center"}}>
                                <MaterialCommunityIcons name="email-outline" size={EStyleSheet.value("23rem")} color="rgb(38, 180, 149)" />
                            </View>
                            <View style={{flex:1,paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold",color:"#535353"}}>No Telepon</Text>
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
                                <View style={{height:EStyleSheet.value("35rem"),flexDirection:"row",justifyContent:"center"}}>
                                    <TextInput secureTextEntry={true} style={{flex:1,padding:0,height:"100%",color:"grey"}}/>
                                    <View style={{width:EStyleSheet.value("40rem"),justifyContent:"center",alignItems:"center"}}>
                                            <Ionicons name="eye" size={EStyleSheet.value("19rem")} color="black" />
                                    </View>
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
                                <Text style={{fontWeight:"bold",color:"#535353"}}>Konfirmasi Kata Sandi</Text>
                                <View style={{height:EStyleSheet.value("35rem"),flexDirection:"row",justifyContent:"center"}}>
                                    <TextInput secureTextEntry={true} style={{flex:1,padding:0,height:"100%",color:"grey"}}/>
                                    <View style={{width:EStyleSheet.value("40rem"),justifyContent:"center",alignItems:"center"}}>
                                            <Ionicons name="eye" size={EStyleSheet.value("19rem")} color="black" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("20rem"),justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"grey",textAlign:"center",fontSize:EStyleSheet.value("13rem"),paddingHorizontal:EStyleSheet.value("30rem")}}>
                        Dengan menekan tombol daftar, Anda menyetujui Syarat & Ketentuan Kami.
                        </Text>
                    </View>
                    <View style={{marginTop:EStyleSheet.value("10rem"),backgroundColor:"rgb(38, 180, 149)",borderRadius:EStyleSheet.value("5rem"),justifyContent:"center",alignItems:"center",paddingVertical:EStyleSheet.value("15rem")}}>
                        <Text style={{color:"white",fontWeight:"bold"}}>Masuk</Text>
                        <Entypo style={{paddingLeft:EStyleSheet.value("5rem"),position:"absolute",right:EStyleSheet.value("15rem"),top:EStyleSheet.value("25rem")/2}} name="arrow-long-right" size={EStyleSheet.value("20rem")} color="white" />
                    </View>
                </View>
                <View style={{marginHorizontal:EStyleSheet.value("15rem"),zIndex:100,width:Dimensions.get("screen").width-EStyleSheet.value("30rem"),backgroundColor:"white",borderRadius:EStyleSheet.value("5rem"),paddingHorizontal:EStyleSheet.value("15rem"),paddingVertical:EStyleSheet.value("25rem")}}>
                    <View style={{borderBottomWidth:0.7,borderBottomColor:(selectedForm===1) ? "rgb(38, 180, 149)":"grey"}}>
                        <View style={{flexDirection:"row",display:"flex"}}>
                            <View style={{width:EStyleSheet.value("35rem"),justifyContent:"center",alignItems:"center"}}>
                                <Feather name="user" size={EStyleSheet.value("23rem")} color="rgb(38, 180, 149)" />
                            </View>
                            <View style={{flex:1,paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold",color:"#535353"}}>Nama Lengkap</Text>
                                <View style={{height:EStyleSheet.value("35rem"),justifyContent:"center"}}>
                                    <TextInput 
                                    ref={refFormNamaLengkap}
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
                                        refFormUsername.current.focus();
                                    }}
                                    style={{width:"100%",padding:0,height:"100%",color:"grey"}}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{borderBottomWidth:0.7,marginTop:EStyleSheet.value("20rem"),borderBottomColor:(selectedForm===2) ? "rgb(38, 180, 149)":"grey"}}>
                        <View style={{flexDirection:"row",display:"flex"}}>
                            <View style={{width:EStyleSheet.value("35rem"),justifyContent:"center",alignItems:"center"}}>
                                <Feather name="user" size={EStyleSheet.value("23rem")} color="rgb(38, 180, 149)" />
                            </View>
                            <View style={{flex:1,paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold",color:"#535353"}}>Username</Text>
                                <View style={{height:EStyleSheet.value("35rem"),justifyContent:"center"}}>
                                    <TextInput 
                                    ref={refFormUsername}
                                    returnKeyType="next"
                                    onFocus={()=>{
                                        setSelectedForm(2);
                                        
                                    }}
                                    onBlur={()=>{
                                        setSelectedForm(0);
                                    }}
                                    onSubmitEditing={()=>{
                                        setTimeout(() => {
                                            setSelectedForm(3);
                                        }, 1);
                                        refFormEmail.current.focus();
                                    }}
                                    style={{width:"100%",padding:0,height:"100%",color:"grey"}}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{borderBottomWidth:0.7,marginTop:EStyleSheet.value("20rem"),borderBottomColor:(selectedForm===3) ? "rgb(38, 180, 149)":"grey"}}>
                        <View style={{flexDirection:"row",display:"flex"}}>
                            <View style={{width:EStyleSheet.value("35rem"),justifyContent:"center",alignItems:"center"}}>
                                <MaterialCommunityIcons name="email-outline" size={EStyleSheet.value("23rem")} color="rgb(38, 180, 149)" />
                            </View>
                            <View style={{flex:1,paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold",color:"#535353"}}>Email</Text>
                                <View style={{height:EStyleSheet.value("35rem"),justifyContent:"center"}}>
                                    <TextInput 
                                       ref={refFormEmail}
                                       returnKeyType="next"
                                       onFocus={()=>{
                                           setSelectedForm(3);
                                           
                                       }}
                                       onBlur={()=>{
                                           setSelectedForm(0);
                                       }}
                                       onSubmitEditing={()=>{
                                           setTimeout(() => {
                                               setSelectedForm(4);
                                           }, 1);
                                           refFormNoTelepon.current.focus();
                                       }}
                                    style={{width:"100%",padding:0,height:"100%",color:"grey"}}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{borderBottomWidth:0.7,marginTop:EStyleSheet.value("20rem"),borderBottomColor:(selectedForm===4) ? "rgb(38, 180, 149)":"grey"}}>
                        <View style={{flexDirection:"row",display:"flex"}}>
                            <View style={{width:EStyleSheet.value("35rem"),justifyContent:"center",alignItems:"center"}}>
                                <MaterialCommunityIcons name="cellphone-android" size={EStyleSheet.value("23rem")} color="rgb(38, 180, 149)" />
                            </View>
                            <View style={{flex:1,paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold",color:"#535353"}}>No Telepon</Text>
                                <View style={{height:EStyleSheet.value("35rem"),justifyContent:"center"}}>
                                    <TextInput 
                                       ref={refFormNoTelepon}
                                       returnKeyType="next"
                                       onFocus={()=>{
                                           setSelectedForm(4);
                                           
                                       }}
                                       onBlur={()=>{
                                           setSelectedForm(0);
                                       }}
                                       onSubmitEditing={()=>{
                                           setTimeout(() => {
                                               setSelectedForm(5);
                                           }, 1);
                                           refFormKataSandi.current.focus();
                                       }}
                                    style={{width:"100%",padding:0,height:"100%",color:"grey"}}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{borderBottomWidth:0.7,borderBottomColor:(selectedForm===5) ? "rgb(38, 180, 149)":"grey",marginTop:EStyleSheet.value("20rem")}}>
                        <View style={{flexDirection:"row",display:"flex"}}>
                            <View style={{width:EStyleSheet.value("35rem"),justifyContent:"center",alignItems:"center"}}>
                                <Feather name="lock" size={EStyleSheet.value("23rem")} color="rgb(38, 180, 149)" />
                            </View>
                            <View style={{flex:1,paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold",color:"#535353"}}>Kata Sandi</Text>
                                <View style={{height:EStyleSheet.value("35rem"),flexDirection:"row",justifyContent:"center"}}>
                                    <TextInput 
                                      ref={refFormKataSandi}
                                      returnKeyType="next"
                                      onFocus={()=>{
                                          setSelectedForm(5);
                                          
                                      }}
                                      onBlur={()=>{
                                          setSelectedForm(0);
                                      }}
                                      onSubmitEditing={()=>{
                                          setTimeout(() => {
                                              setSelectedForm(6);
                                          }, 1);
                                          refFormKonfirmasiKataSandi.current.focus();
                                      }}
                                    secureTextEntry={true} style={{flex:1,padding:0,height:"100%",color:"grey"}}/>
                                    <View style={{width:EStyleSheet.value("40rem"),justifyContent:"center",alignItems:"center"}}>
                                            <Ionicons name="eye" size={EStyleSheet.value("19rem")} color="black" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{borderBottomWidth:0.7,borderBottomColor:(selectedForm===6) ? "rgb(38, 180, 149)":"grey",marginTop:EStyleSheet.value("20rem")}}>
                        <View style={{flexDirection:"row",display:"flex"}}>
                            <View style={{width:EStyleSheet.value("35rem"),justifyContent:"center",alignItems:"center"}}>
                                <Feather name="lock" size={EStyleSheet.value("23rem")} color="rgb(38, 180, 149)" />
                            </View>
                            <View style={{flex:1,paddingHorizontal:EStyleSheet.value("10rem")}}>
                                <Text style={{fontWeight:"bold",color:"#535353"}}>Konfirmasi Kata Sandi</Text>
                                <View style={{height:EStyleSheet.value("35rem"),flexDirection:"row",justifyContent:"center"}}>
                                    <TextInput 
                                     ref={refFormKonfirmasiKataSandi}
                                     returnKeyType="done"
                                     onFocus={()=>{
                                         setSelectedForm(6);
                                         
                                     }}
                                     onBlur={()=>{
                                         setSelectedForm(0);
                                     }}
                                     onSubmitEditing={()=>{
                                        //  setTimeout(() => {
                                        //      setSelectedForm(7);
                                        //  }, 1);
                                         //refFormKonfirmasiKataSandi.current.focus();
                                     }}
                                    secureTextEntry={true} style={{flex:1,padding:0,height:"100%",color:"grey"}}/>
                                    <View style={{width:EStyleSheet.value("40rem"),justifyContent:"center",alignItems:"center"}}>
                                            <Ionicons name="eye" size={EStyleSheet.value("19rem")} color="black" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("20rem"),justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"grey",textAlign:"center",fontSize:EStyleSheet.value("13rem"),paddingHorizontal:EStyleSheet.value("30rem")}}>
                        Dengan menekan tombol daftar, Anda menyetujui <Text style={{color:"rgb(38, 180, 149)",fontWeight:"bold"}}> Syarat & Ketentuan</Text> Kami.
                        </Text>
                    </View>
                    <View style={{marginTop:EStyleSheet.value("10rem"),backgroundColor:"rgb(38, 180, 149)",borderRadius:EStyleSheet.value("5rem"),justifyContent:"center",alignItems:"center",paddingVertical:EStyleSheet.value("15rem")}}>
                        <Text style={{color:"white",fontWeight:"bold"}}>Masuk</Text>
                        <Entypo style={{paddingLeft:EStyleSheet.value("5rem"),position:"absolute",right:EStyleSheet.value("15rem"),top:EStyleSheet.value("25rem")/2}} name="arrow-long-right" size={EStyleSheet.value("20rem")} color="white" />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}