import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef, useContext} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, useWindowDimensions, FlatList, Image, Pressable, ActivityIndicator, TextInput, BackHandler } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 
import Svg, { Path, Circle } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

import { StatusBarHeight } from '../utils/HeightUtils';
import { TouchableOpacity } from 'react-native-gesture-handler';

import RenderHtml from 'react-native-render-html';

import Collapsible from 'react-native-collapsible';

import {endpoint} from '../utils/endpoint';
import {toLocaleTimestamp, makeid, formatRupiah} from '../utils/utils';
import { initialWindowMetrics } from 'react-native-safe-area-context';

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

let shadow2 = {
    shadowColor: "grey",
    shadowOffset: {
        width: 0,
        height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,

    elevation: 3,
}

let interval = {};

export default function DetailSertifikasiScreen(props){

    const { width } = useWindowDimensions();

    let globalContext = useContext(GlobalContext);


    let [dataLoaded, setDataLoaded] = useState(false);

    let [selectedPromo, setSelectedPromo] = useState(0);

    let [deskripsiHidden, setDeskripsHidden] = useState(true);
    let [persyaratanHidden, setPersyaratanHidden] = useState(true);
    let [fasilitasHidden, setFasilitasHidden] = useState(true);
    let [infoPendaftaranHidden, setInfoPendaftaranHidden] = useState(true);
    let [instrukturHidden, setInstrukturHidden] = useState(true);
    let [ulasanHidden, setUlasanHidden] = useState(true);

    let [txtVoucher, setTxtVoucher] = useState("");
    let [voucherLoading, setVoucherLoading] = useState(false);
    let [useVoucher, setUseVoucher] = useState(false);

    let [kursiTersisa, setKursiTersisa] = useState(0);
    let [kuotaKursi, setKuotaKursi] = useState(0);
    let [kuotaTerpenuhi, setKuotaTerpenuhi] = useState(0);

    let [item,setItem] = useState(props.route.params.item);

    let [timerPlaceholderLoaded, setTimerPlaceholderLoaded] = useState(false);
    let [timerPlaceholder, setTimerPlaceholder] = useState({});

    let getStokKursi = async (id_training,id_itemtraining)=>{
      
        let request = await fetch(`${endpoint}/getstokkursi`,{
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify({
                id_training:props.route.params.item.id_training,
                id_itemtraining:id_itemtraining
            })
        });
        let response = await request.json();
        return response;
    }

    useEffect(async ()=>{
        
        let stokkursi = props.route.params.item.item.map((el,index)=>{
            return getStokKursi(el.id_training,el.id);
        })

        let stokkursi2 = await Promise.all(stokkursi);

        setItem((prev,index)=>{
            return {
                ...prev,
                item:[
                    ...stokkursi2

                ]
            }
        });


        setKuotaKursi(stokkursi2[0].stokkursi);
        setKursiTersisa(stokkursi2[0].stokkursi-stokkursi2[0].kursiterpenuhi);
        setKuotaTerpenuhi(stokkursi2[0].kursiterpenuhi);
        

        props.route.params.item.item.map((el,index)=>{
            

            setTimerPlaceholder((prev)=>{

                let obj = {...prev};
                obj[el.id] = {
                    hari:"00",
                    jam:"00",
                    menit:"00",
                    detik:"00"
                }
                return obj;
            })
        });
        setTimerPlaceholderLoaded(true);
        setDataLoaded(true);
    },[])


    useEffect(()=>{
        if(timerPlaceholderLoaded){
            Object.entries(timerPlaceholder).map((el,index)=>{
                let id = el[0];

                let matched = props.route.params.item.item.filter((ele,index)=>{
                   
                    if(ele.id===id){
                        return true;
                    }
                    else{
                        return false;
                    }
                });

                let countdownDate = new Date(Date.parse(matched[0].tanggalpromoberakhir.replace(/\-/g,'/'))).getTime();

                

                 interval[id] = setInterval(function() {

                    // Get today's date and time
                    var now = new Date().getTime();
                  
                    // Find the distance between now and the count down date
                    var distance = countdownDate - now;
                  
                    // Time calculations for days, hours, minutes and seconds
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    
                    setTimerPlaceholder((prev)=>{
                        let p = {...prev};
                        p[id] = {
                            ...p[id],
                            hari:days,
                            jam:hours,
                            menit:minutes,
                            detik:seconds
                        }
                        return p;
                    })
                },1000)

            })
        }
    },[timerPlaceholderLoaded])



    useEffect(() => {
        const backAction = () => {
          Object.keys(interval).map((key,index)=>{
              clearInterval(interval[key]);
          })
          return false;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);


   

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
                <View style={{position:"absolute",justifyContent:"center",alignItems:"center",paddingHorizontal:EStyleSheet.value("50rem"),width:Dimensions.get("screen").width}}>
                    <Text numberOfLines={1} style={{fontWeight:"bold",color:"rgb(38, 180, 149)"}}>{item.namatraining}</Text>
                </View>
            </View>
            {
                (dataLoaded && timerPlaceholderLoaded) &&
                <Pressable 
                onPress={()=>{


                    globalContext.setPemesanan((prev)=>{
                        return {
                          ...prev,
                          keranjang:[
                            {
                              training:props.route.params.item,
                              itemtraining:props.route.params.item.item[selectedPromo]
                            }
                          ]
                        }
                      });
                    
                    props.navigation.navigate("DetailIdentitasCheckoutSertifikasi");
                }}
                android_ripple={{
                    color:"#e8e8e8"
                }}
                style={{position:"absolute",bottom:0,zIndex:999,backgroundColor:"rgb(38, 180, 149)",justifyContent:"center",alignItems:"center",paddingHorizontal:EStyleSheet.value("30rem"),width:"100%",height:EStyleSheet.value("60rem")}}>
                    <Text style={{color:"white",fonPressableght:"bold",fontSize:EStyleSheet.value("18rem")}}>Proses Pemesanan</Text>
                </Pressable>
            }
            {
                (dataLoaded && timerPlaceholderLoaded) &&
                <ScrollView style={{backgroundColor:"whitesmoke"}}>
                    <View style={{paddingHorizontal:EStyleSheet.value("20rem"),zIndex:1,paddingTop:EStyleSheet.value("20rem")}}>
                        <View style={{...shadow,backgroundColor:"white",borderTopRightRadius:EStyleSheet.value("20rem"),borderTopLeftRadius:EStyleSheet.value("20rem")}}>
                            <Text style={{color:"grey",padding:EStyleSheet.value("20rem"),justifyContent:"center",alignItems:"center",textAlign:"center"}}>{item.namatraining}</Text>
                            <View style={{backgroundColor:"#e8e8e8",height:EStyleSheet.value("350rem")}}>
                                <Image resizeMode="stretch" style={{width:"100%",height:"100%"}} source={{uri:`${endpoint.replace("/api","")}/storage/public/training/${item.foto}`}}></Image>
                            </View>
                            <View style={{marginTop:EStyleSheet.value("15rem"),marginBottom:EStyleSheet.value("10rem"),paddingHorizontal:EStyleSheet.value("20rem")}}>
                                <Text style={{fontSize:EStyleSheet.value("12rem"),color:"grey",marginBottom:EStyleSheet.value("5rem")}}>Jadwal Training</Text>
                                <Text>{toLocaleTimestamp(item.jadwaltraining)}</Text>
                            </View>
                            <View style={{height:EStyleSheet.value("10rem")}}>
                            </View>
                        </View>
                    </View>
                    <View style={{backgroundColor:"rgb(38, 180, 149)",zIndex:100}}>
                        <View style={{height:EStyleSheet.value("50rem"),justifyContent:"center",alignItems:"center"}}>
                            <Text style={{fontSize:EStyleSheet.value("16rem"),fontWeight:"bold",color:"white"}}>Diskon Saat Ini</Text>
                        </View>
                        <View style={{paddingHorizontal:EStyleSheet.value("20rem"),paddingBottom:EStyleSheet.value("20rem")}}>
                            {
                                (item.item).map((el,index)=>{

                                    if(el.sedangpromo){
                                        return (
                                            <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={async ()=>{
                                                setSelectedPromo(index);
                                                let response = await getStokKursi(el.id_training,el.id);
                                                console.log(response);
                                            }}
                                            style={{backgroundColor:"#fafafa",paddingBottom:EStyleSheet.value("10rem"),marginBottom:EStyleSheet.value("20rem"),borderRadius:EStyleSheet.value("10rem"),borderWidth:(selectedPromo===index) ? 5:0,borderColor:"#fe0000"}}>
                                                <View style={{paddingVertical:EStyleSheet.value("10rem"),justifyContent:"center",alignItems:"center",paddingHorizontal:EStyleSheet.value("50rem")}}>
                                                    <Text style={{textAlign:"center",fontWeight:'bold',color:"#fe0000"}}>{el.namapaketpelatihan}</Text>
                                                </View>
                                                <View style={{paddingVertical:EStyleSheet.value("10rem"),marginBottom:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("10rem"),flexDirection:"row",marginTop:EStyleSheet.value("10rem")}}>
                                                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                                                        <View style={{backgroundColor:"#fe0000",justifyContent:"center",alignItems:"center",borderRadius:EStyleSheet.value("15rem"),width:EStyleSheet.value("50rem"),height:EStyleSheet.value("50rem")}}>
                                                            <Text style={{color:"white",fontSize:EStyleSheet.value("23rem"),fontWeight:"bold"}}>{timerPlaceholder[el.id].hari}</Text>
                                                        </View>
                                                        <Text style={{marginTop:EStyleSheet.value("5rem"),fontSize:EStyleSheet.value("12rem"),color:"#fe0000",fontWeight:"bold"}}>HARI</Text>
                                                    </View>
                                                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                                                        <View style={{backgroundColor:"#fe0000",justifyContent:"center",alignItems:"center",borderRadius:EStyleSheet.value("15rem"),width:EStyleSheet.value("50rem"),height:EStyleSheet.value("50rem")}}>
                                                            <Text style={{color:"white",fontSize:EStyleSheet.value("23rem"),fontWeight:"bold"}}>{timerPlaceholder[el.id].jam}</Text>
                                                        </View>
                                                        <Text style={{marginTop:EStyleSheet.value("5rem"),fontSize:EStyleSheet.value("12rem"),color:"#fe0000",fontWeight:"bold"}}>JAM</Text>
                                                    </View>
                                                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                                                        <View style={{backgroundColor:"#fe0000",justifyContent:"center",alignItems:"center",borderRadius:EStyleSheet.value("15rem"),width:EStyleSheet.value("50rem"),height:EStyleSheet.value("50rem")}}>
                                                            <Text style={{color:"white",fontSize:EStyleSheet.value("23rem"),fontWeight:"bold"}}>{timerPlaceholder[el.id].menit}</Text>
                                                        </View>
                                                        <Text style={{marginTop:EStyleSheet.value("5rem"),fontSize:EStyleSheet.value("12rem"),color:"#fe0000",fontWeight:"bold"}}>MENIT</Text>
                                                    </View>
                                                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                                                        <View style={{backgroundColor:"#fe0000",justifyContent:"center",alignItems:"center",borderRadius:EStyleSheet.value("15rem"),width:EStyleSheet.value("50rem"),height:EStyleSheet.value("50rem")}}>
                                                            <Text style={{color:"white",fontSize:EStyleSheet.value("23rem"),fontWeight:"bold"}}>{timerPlaceholder[el.id].detik}</Text>
                                                        </View>
                                                        <Text style={{marginTop:EStyleSheet.value("5rem"),fontSize:EStyleSheet.value("12rem"),color:"#fe0000",fontWeight:"bold"}}>DETIK</Text>
                                                    </View>
                                                </View>
                                                <View style={{justifyContent:"flex-end",alignItems:"flex-end",paddingHorizontal:EStyleSheet.value("20rem")}}>
                                                    <Text style={{fontWeight:"bold",color:"#fe0000",textDecorationLine:"line-through"}}>Rp. {formatRupiah(el.hargapaketpelatihan)}</Text>
                                                </View>
                                                <View style={{justifyContent:"space-between",flexDirection:"row",marginBottom:EStyleSheet.value("10rem"),alignItems:"space-between",paddingHorizontal:EStyleSheet.value("20rem")}}>
                                                    <View style={{borderWidth:1.5,opacity:(selectedPromo===index) ? 1:0,borderColor:"#fe0000",borderRadius:EStyleSheet.value("30rem"),paddingHorizontal:EStyleSheet.value("10rem"),paddingVertical:EStyleSheet.value("5rem")}}>
                                                        <Text style={{color:"#fe0000"}}>Yang Anda Pilih</Text>
                                                    </View>
                                                    <Text style={{fontWeight:"bold",color:"#fe0000",fontSize:EStyleSheet.value("27rem"),color:"rgb(38, 180, 149)"}}>Rp. {formatRupiah(el.hargapromopaketpelatihan)}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }
                                    else{
                                        return (
                                            <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={()=>{
                                                setSelectedPromo(index);
                                            }}
                                            style={{backgroundColor:"#fafafa",marginBottom:EStyleSheet.value("20rem"),borderRadius:EStyleSheet.value("10rem"),borderWidth:(selectedPromo===index) ? 5:0,borderColor:"#fe0000",padding:EStyleSheet.value("20rem")}}>
                                                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                                                    <Text style={{flex:1,paddingRight:EStyleSheet.value("20rem")}}>{el.namapaketpelatihan}</Text>
                                                    <Text style={{fontWeight:"bold",color:"#fe0000",textDecorationLine:"line-through"}}></Text>
                                                </View>
                                                <View style={{flexDirection:"row",marginTop:EStyleSheet.value("10rem"),justifyContent:"space-between",alignItems:"center"}}>
                                                    <View style={{borderWidth:1.5,borderColor:"#fe0000",opacity:(selectedPromo===index) ? 1:0,borderRadius:EStyleSheet.value("30rem"),paddingHorizontal:EStyleSheet.value("10rem"),paddingVertical:EStyleSheet.value("5rem")}}>
                                                        <Text style={{color:"#fe0000"}}>Yang Anda Pilih</Text>
                                                    </View>
                                                    <Text style={{fontWeight:"bold",color:"#fe0000",fontSize:EStyleSheet.value("27rem"),color:"rgb(38, 180, 149)"}}>Rp. {formatRupiah(el.hargapaketpelatihan)}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }
                                })
                            }
                             
                          
                        </View>
                    </View>
                    <View style={{paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("84rem")}}>
                        <View style={{...shadow,borderBottomLeftRadius:EStyleSheet.value("30rem"),borderBottomRightRadius:EStyleSheet.value("30rem"),backgroundColor:"white"}}>
                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),marginVertical:EStyleSheet.value("20rem")}}>
                                <View style={{backgroundColor:"#ededed",position:"relative",overflow:"hidden",height:EStyleSheet.value("40rem"),borderRadius:EStyleSheet.value("10rem")}}>
                                    <View style={{position:"absolute",width:"50%",backgroundColor:"rgb(38, 180, 140)",height:"100%"}}></View>
                                    <Text style={{color:"black",fontWeight:"bold",textAlign:"center",height:"100%",textAlignVertical:"center"}}>Tersisa {kursiTersisa} dari {kuotaKursi}</Text>
                                </View>
                            </View>
                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("20rem")}}>
                                <View style={{backgroundColor:"white",borderColor:"#eb2d2a",borderWidth:1,position:"relative",overflow:"hidden",height:EStyleSheet.value("40rem"),borderRadius:EStyleSheet.value("10rem")}}>
                                    <Text style={{color:"#eb2d2a",fontWeight:"bold",textAlign:"center",height:"100%",textAlignVertical:"center",fontSize:EStyleSheet.value("13rem")}}>{kuotaTerpenuhi} orang sudah mengikuti sertifikasi ini</Text>
                                </View>
                            </View>
                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("20rem")}}>
                                <Text style={{fontWeight:"bold"}}>Kode Voucher :</Text>
                                <View style={{marginTop:EStyleSheet.value("10rem"),flexDirection:"row",paddingBottom:EStyleSheet.value("0rem"),borderBottomWidth:1}}>
                                    <TextInput 
                                    onChangeText={(text)=>{
                                        setTxtVoucher(text);
                                    }}
                                    editable={useVoucher ? false:true}
                                    value={txtVoucher}
                                    style={{flex:1,paddingRight:EStyleSheet.value("20rem")}}/>
                                    {
                                        (voucherLoading) ?
                                        <View
                                        style={{paddingHorizontal:EStyleSheet.value("20rem"),backgroundColor:"rgb(38, 180, 140)",justifyContent:"center",alignItems:"center"}}>
                                            <ActivityIndicator color="white"/>
                                        </View>
                                        :
                                        <TouchableOpacity 
                                        activeOpacity={0.8}
                                        onPress={async ()=>{
                                            if(txtVoucher.length>0){
                                                setVoucherLoading(true);
                                                let request = await fetch(`${endpoint}/checkvoucher`,{
                                                    method:"POST",
                                                    headers: {
                                                        "content-type":"application/json"
                                                    },
                                                    body:JSON.stringify({
                                                        kodevoucher:txtVoucher
                                                    })
                                                });
                                                let response = await request.json();
                                                if(response.success){
                                                    setVoucherLoading(false);
                                                    setUseVoucher(true);
                                                    let {voucher} = response.data;
                                                    globalContext.setPemesanan((prev)=>{
                                                      return {
                                                        ...prev,
                                                        voucher:voucher,
                                                        diskon:voucher
                                                      }
                                                    });
                                                }   
                                                else{
                                                    alert(response.msg);
                                                    setVoucherLoading(false);
                                                }
                                            }
                                        }}
                                        style={{paddingHorizontal:EStyleSheet.value("20rem"),flex:1,backgroundColor:"rgb(38, 180, 140)",justifyContent:"center",alignItems:"center"}}>
                                            <Text style={{color:"white"}}>Check</Text>
                                        </TouchableOpacity>
                                    }
                                </View>
                            </View>
                            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("20rem")}}>
                                <View style={{marginBottom:EStyleSheet.value("3rem")}}>
                                    <Pressable 
                                    onPress={()=>{
                                        setDeskripsHidden(!deskripsiHidden);
                                    }}
                                    style={{backgroundColor:"white",borderRadius:EStyleSheet.value("5rem"),...shadow2,paddingHorizontal:EStyleSheet.value("20rem"),paddingVertical:EStyleSheet.value("10rem")}}>
                                        <Text>Deskripsi</Text>
                                    </Pressable>
                                    <View style={{}}>
                                        <Collapsible  collapsed={deskripsiHidden}>
                                            <View style={{paddingVertical:EStyleSheet.value("5rem")}}>
                                            <RenderHtml
                                            baseStyle={{paddingHorizontal:EStyleSheet.value("0rem")}}
                                            contentWidth={width}
                                            source={{
                                                html:props.route.params.item.deskripsipenuh
                                            }}
                                            enableExperimentalMarginCollapsing={true}
                                            renderersProps={ {
                                                img: {
                                                enableExperimentalPercentWidth: true
                                                }
                                            }}
                                            />
                                            </View>
                                        </Collapsible>
                                    </View>
                                </View>
                                <View style={{marginBottom:EStyleSheet.value("3rem")}}>
                                    <Pressable 
                                    onPress={()=>{
                                        setPersyaratanHidden(!persyaratanHidden)
                                    }}
                                    style={{backgroundColor:"white",borderRadius:EStyleSheet.value("5rem"),...shadow2,paddingHorizontal:EStyleSheet.value("20rem"),paddingVertical:EStyleSheet.value("10rem")}}>
                                        <Text>Persyaratan</Text>
                                    </Pressable>
                                    <View style={{marginBottom:EStyleSheet.value("0rem")}}>
                                        <Collapsible  collapsed={persyaratanHidden}>
                                        <View style={{paddingVertical:EStyleSheet.value("5rem")}}>
                                            <RenderHtml
                                            baseStyle={{paddingHorizontal:EStyleSheet.value("0rem")}}
                                            contentWidth={width}
                                            source={{
                                                html:props.route.params.item.persyaratan
                                            }}
                                            enableExperimentalMarginCollapsing={true}
                                            renderersProps={ {
                                                img: {
                                                enableExperimentalPercentWidth: true
                                                }
                                            }}
                                            />
                                            </View>
                                        </Collapsible>
                                    </View>
                                </View>
                                <View style={{marginBottom:EStyleSheet.value("3rem")}}>
                                    <Pressable 
                                    onPress={()=>{
                                        setFasilitasHidden(!fasilitasHidden)
                                    }}
                                    style={{backgroundColor:"white",borderRadius:EStyleSheet.value("5rem"),...shadow2,paddingHorizontal:EStyleSheet.value("20rem"),paddingVertical:EStyleSheet.value("10rem")}}>
                                        <Text>Fasilitas</Text>
                                    </Pressable>
                                    <View style={{marginBottom:EStyleSheet.value("0rem")}}>
                                        <Collapsible  collapsed={fasilitasHidden}>
                                        <View style={{paddingVertical:EStyleSheet.value("5rem")}}>
                                            <RenderHtml
                                            baseStyle={{paddingHorizontal:EStyleSheet.value("0rem")}}
                                            contentWidth={width}
                                            source={{
                                                html:props.route.params.item.fasilitas
                                            }}
                                            enableExperimentalMarginCollapsing={true}
                                            renderersProps={ {
                                                img: {
                                                enableExperimentalPercentWidth: true
                                                }
                                            }}
                                            />
                                            </View>
                                        </Collapsible>
                                    </View>
                                </View>
                                <View style={{marginBottom:EStyleSheet.value("3rem")}}>
                                    <Pressable 
                                    onPress={()=>{
                                        setInfoPendaftaranHidden(!infoPendaftaranHidden)
                                    }}
                                    style={{backgroundColor:"white",borderRadius:EStyleSheet.value("5rem"),...shadow2,paddingHorizontal:EStyleSheet.value("20rem"),paddingVertical:EStyleSheet.value("10rem")}}>
                                        <Text>Info Pendaftaran</Text>
                                    </Pressable>
                                    <View style={{marginBottom:EStyleSheet.value("0rem")}}>
                                        <Collapsible  collapsed={infoPendaftaranHidden}>
                                        <View style={{paddingVertical:EStyleSheet.value("5rem")}}>
                                            <RenderHtml
                                            baseStyle={{paddingHorizontal:EStyleSheet.value("0rem")}}
                                            contentWidth={width}
                                            source={{
                                                html:props.route.params.item.infopendaftaran
                                            }}
                                            enableExperimentalMarginCollapsing={true}
                                            renderersProps={ {
                                                img: {
                                                enableExperimentalPercentWidth: true
                                                }
                                            }}
                                            />
                                            </View>
                                        </Collapsible>
                                    </View>
                                </View>
                                <View style={{marginBottom:EStyleSheet.value("3rem")}}>
                                    <Pressable 
                                    onPress={()=>{
                                        setInstrukturHidden(!instrukturHidden)
                                    }}
                                    style={{backgroundColor:"white",borderRadius:EStyleSheet.value("5rem"),...shadow2,paddingHorizontal:EStyleSheet.value("20rem"),paddingVertical:EStyleSheet.value("10rem")}}>
                                        <Text>Instruktur</Text>
                                    </Pressable>
                                    <View style={{marginBottom:EStyleSheet.value("0rem")}}>
                                        <Collapsible  collapsed={instrukturHidden}>
                                        <View style={{paddingVertical:EStyleSheet.value("5rem")}}>
                                            <RenderHtml
                                            baseStyle={{paddingHorizontal:EStyleSheet.value("0rem")}}
                                            contentWidth={width}
                                            source={{
                                                html:props.route.params.item.instruktur
                                            }}
                                            enableExperimentalMarginCollapsing={true}
                                            renderersProps={ {
                                                img: {
                                                enableExperimentalPercentWidth: true
                                                }
                                            }}
                                            />
                                            </View>
                                        </Collapsible>
                                    </View>
                                </View>
                                <View style={{marginBottom:EStyleSheet.value("3rem")}}>
                                    <Pressable 
                                    onPress={()=>{
                                        setUlasanHidden(!ulasanHidden)
                                    }}
                                    style={{backgroundColor:"white",borderRadius:EStyleSheet.value("5rem"),...shadow2,paddingHorizontal:EStyleSheet.value("20rem"),paddingVertical:EStyleSheet.value("10rem")}}>
                                        <Text>Ulasan</Text>
                                    </Pressable>
                                    <View style={{marginBottom:EStyleSheet.value("20rem")}}>
                                        <Collapsible  collapsed={ulasanHidden}>
                                        <View style={{paddingVertical:EStyleSheet.value("5rem")}}>
                                            <RenderHtml
                                            baseStyle={{paddingHorizontal:EStyleSheet.value("0rem")}}
                                            contentWidth={width}
                                            source={{
                                                html:props.route.params.item.ulasan
                                            }}
                                            enableExperimentalMarginCollapsing={true}
                                            renderersProps={ {
                                                img: {
                                                enableExperimentalPercentWidth: true
                                                }
                                            }}
                                            />
                                            </View>
                                        </Collapsible>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            }
            {
                (!dataLoaded && timerPlaceholderLoaded) &&
                <View style={{flex:1,justifyContent:"center",backgroundColor:"whitesmoke",alignItems:"center"}}>
                    <ActivityIndicator size="large" color="rgb(38, 180, 149)"/>
                </View>
            }
        </View>
    )
}