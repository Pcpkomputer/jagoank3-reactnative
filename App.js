import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext, createContext, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Pressable, Image, AsyncStorage } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import LandingScreen from './screen/LandingScreen';
import LoginScreen from './screen/LoginScreen';
import DaftarScreen from './screen/DaftarScreen';
import DashboardScreen from './screen/DashboardScreen';
import ModulPelatihanScreen from './screen/ModulPelatihanScreen';
import DetailModulPelatihanScreen from './screen/DetailModulPelatihanScreen';
import ShopScreen from './screen/ShopScreen';
import ArtikelScreen from './screen/ArtikelScreen';
import DetailArtikelScreen from './screen/DetailArtikelScreen';
import EbookScreen from './screen/EbookScreen.js';
import WebinarScreen from './screen/WebinarScreen';
import ListSertifikasiScreen from './screen/ListSertifikasiScreen';
import DetailSertifikasiScreen from './screen/DetailSertifikasiScreen';
import DetailIdentitasCheckoutSertifikasiScreen from './screen/DetailIdentitasCheckoutSertifikasiScreen';
import DetailItemCheckoutSertifikasiScreen from './screen/DetailItemCheckoutSertifikasiScreen';
import InvoiceSertifikasiScreen from './screen/InvoiceSertifikasiScreen';
import DetailIdentitasCheckoutShopScreen from './screen/DetailIdentitasCheckoutShopScreen';
import DetailItemCheckoutShopScreen from './screen/DetailItemCheckoutShopScreen';
import InvoiceShopScreen from './screen/InvoiceShopScreen';

import TabNotifikasi from './screen/TabNotifikasi';
import TabTautan from './screen/TabTautan';
import TabProfil from './screen/TabProfil';

import { Feather, Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons'; 

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LinearGradient } from 'expo-linear-gradient';

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});


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

export let GlobalContext = createContext();


const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {

  let [selectedTab, setSelectedTab] = useState("Dashboard");

  return (
    <View style={{ flexDirection: 'column',backgroundColor:"whitesmoke",...shadow }}>
      <View style={{flexDirection:"row",zIndex:100}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        if(route.name==="Menu1"){
          return (
            // <TouchableOpacity
            //   accessibilityRole="button"
            //   accessibilityState={isFocused ? { selected: true } : {}}
            //   accessibilityLabel={options.tabBarAccessibilityLabel}
            //   testID={options.tabBarTestID}
            //   onPress={onPress}
            //   onLongPress={onLongPress}
            //   style={{ flex: 1 }}
            // >
            //   <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
            //     {label}
            //   </Text>
            // </TouchableOpacity>
            <Pressable 
            onPress={()=>{
              navigation.navigate("DetailItemCheckoutShop");
            }}
            style={{flex:1,justifyContent:"center",alignItems:"center",height:EStyleSheet.value("55rem")}}>
              <Feather name="shopping-bag" style={{marginBottom:EStyleSheet.value("3rem")}}  size={EStyleSheet.value("15rem")} color="#b7b7b7" />
              <Text style={{color:"#b7b7b7",fontSize:EStyleSheet.value("12rem"),fontWeight:"bold"}}>Shop</Text>
            </Pressable>
          );
        }
        else if(route.name==="Menu2"){
            return (
              <Pressable 
              onPress={()=>{
                setSelectedTab("Notif");
                navigation.navigate({
                  name:"Menu2",
                  merge:true
                });
              }}
              style={{flex:1,justifyContent:"center",alignItems:"center",height:EStyleSheet.value("50rem")}}>
                <Ionicons name="notifications"  style={{marginBottom:EStyleSheet.value("3rem"),marginTop:EStyleSheet.value("6rem")}}  size={EStyleSheet.value("15rem")} color="#b7b7b7" />
                 <Text style={{color:"#b7b7b7",fontSize:EStyleSheet.value("12rem"),fontWeight:"bold"}}>Notif</Text>
              </Pressable>
            );
        }
        else if(route.name==="Menu3"){
          return (
            <View style={{flex:1,height:EStyleSheet.value("50rem"),justifyContent:"center",alignItems:"center"}}>
               <View
               style={{overflow:"hidden",...shadow,borderRadius:999,marginBottom:EStyleSheet.value("35rem"),width:EStyleSheet.value("70rem"),height:EStyleSheet.value("70rem")}}
                >
                    <Pressable 
                    android_ripple={{
                      color:"white"
                    }}
                    onPress={()=>{
                      setSelectedTab("Dashboard");
                      navigation.navigate({
                        name:"Menu1",
                        merge:true
                      });
                    }}
                  style={{backgroundColor:(selectedTab==="Dashboard") ? "rgb(35, 182, 151)":"whitesmoke",overflow:"hidden",...shadow,justifyContent:"center",alignItems:"center",borderRadius:999,marginBottom:EStyleSheet.value("35rem"),width:EStyleSheet.value("70rem"),height:EStyleSheet.value("70rem")}}>
                    <Image style={{width:EStyleSheet.value("130rem"),height:EStyleSheet.value("130rem"),marginBottom:EStyleSheet.value("14rem"),marginRight:EStyleSheet.value("8rem")}} source={require("./assets/jagoank3.png")}/>
                    </Pressable>
               </View>
            </View>
          );
        }
        else if(route.name==="Menu4"){
          return (
            <Pressable 
            onPress={()=>{
              setSelectedTab("Tautan");
              navigation.navigate({
                name:"Menu4",
                merge:true
              });
            }}
            style={{flex:1,justifyContent:"center",alignItems:"center",height:EStyleSheet.value("50rem")}}>
              <AntDesign name="link" style={{marginBottom:EStyleSheet.value("3rem"),marginTop:EStyleSheet.value("5rem")}}  size={EStyleSheet.value("15rem")} color="#b7b7b7" />
               <Text style={{color:"#b7b7b7",fontSize:EStyleSheet.value("12rem"),fontWeight:"bold"}}>Tautan</Text>
            </Pressable>
          );
      }
      else if(route.name==="Menu5"){
        return (
          <Pressable 
          onPress={()=>{
            setSelectedTab("Profil");
            navigation.navigate({
              name:"Menu5",
              merge:true
            });
          }}
          style={{flex:1,justifyContent:"center",alignItems:"center",height:EStyleSheet.value("50rem")}}>
            <FontAwesome name="user" style={{marginBottom:EStyleSheet.value("3rem"),marginTop:EStyleSheet.value("5rem")}}  size={EStyleSheet.value("15rem")} color="#b7b7b7" />
            <Text style={{color:"#b7b7b7",fontSize:EStyleSheet.value("12rem"),fontWeight:"bold"}}>Profil</Text>
          </Pressable>
        );
    }
     
      })}
      </View>
      <LinearGradient 
        colors={['#24b596', '#04a280', '#04a280']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      style={{backgroundColor:"rgb(35, 182, 151)",height:EStyleSheet.value("8rem"),justifyContent:"center",alignItems:"center"}}>
      </LinearGradient>
    </View>
  );
}


function MyTabs() {
  return (

      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen options={{headerShown:false}} name="Menu1" component={DashboardScreen} />
        <Tab.Screen options={{headerShown:false}} name="Menu2" component={TabNotifikasi} />
        <Tab.Screen options={{headerShown:false}} name="Menu3" component={()=>{
          return (
            <View><Text>tes menu3</Text></View>
          )
        }} /> 
        <Tab.Screen options={{headerShown:false}} name="Menu4" component={TabTautan} />
        <Tab.Screen options={{headerShown:false}} name="Menu5" component={TabProfil} />
      </Tab.Navigator>
  );
}

function MyStack(){


  let [appLoaded, setAppLoaded] = useState(false);
  let [credentials, setCredentials] = useState(null);

  let checkCredentials = async ()=>{
    //await AsyncStorage.removeItem("credentials");
    let credentials = await AsyncStorage.getItem("credentials");
    if(credentials===null){
      setCredentials(null);
    }
    else{
      let parsed = JSON.parse(credentials);
      setCredentials(parsed);
    }
    setAppLoaded(true);
  }

  useEffect(()=>{
    checkCredentials();
  },[])

  if(!appLoaded){
    return null;
  }

  if(credentials){
    return (
      <GlobalContext.Provider value={{credentials,setCredentials}}>
          <NavigationContainer>
          <Stack.Navigator
          >
                <Stack.Screen 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            name="Dashboard" component={MyTabs} />
              <Stack.Screen 
            name="ModulPelatihan" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={ModulPelatihanScreen} />
              <Stack.Screen 
            name="DetailModulPelatihan" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={DetailModulPelatihanScreen} />
            <Stack.Screen 
            name="Shop" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={ShopScreen} />
              <Stack.Screen 
            name="Artikel" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={ArtikelScreen} />
                <Stack.Screen 
            name="DetailArtikel" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={DetailArtikelScreen} />
                  <Stack.Screen 
            name="Ebook" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={EbookScreen} />
                  <Stack.Screen 
            name="Webinar" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={WebinarScreen} />
              <Stack.Screen 
            name="ListSertifikasi" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={ListSertifikasiScreen} />
            <Stack.Screen 
            name="DetailSertifikasi" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={DetailSertifikasiScreen} />
            <Stack.Screen 
            name="DetailIdentitasCheckoutSertifikasi" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={DetailIdentitasCheckoutSertifikasiScreen} />
              <Stack.Screen 
            name="DetailItemCheckoutSertifikasi" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={DetailItemCheckoutSertifikasiScreen} />
              <Stack.Screen 
            name="InvoiceSertifikasi" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={InvoiceSertifikasiScreen} />
              <Stack.Screen 
            name="DetailItemCheckoutShop" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={DetailItemCheckoutShopScreen} />
              <Stack.Screen 
            name="DetailIdentitasCheckoutShop" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={DetailIdentitasCheckoutShopScreen} />
              <Stack.Screen 
            name="InvoiceShop" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={InvoiceShopScreen} />
          </Stack.Navigator>
          </NavigationContainer>
      </GlobalContext.Provider>
    )
  }
  else{
    return (
      <GlobalContext.Provider value={{credentials,setCredentials}}>
          <NavigationContainer>
          <Stack.Navigator
          >
              <Stack.Screen 
              options={{
                headerShown:false,
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
              }}
            name="Landing" component={LandingScreen} />
            <Stack.Screen 
              options={{
                headerShown:false,
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
              }}
            name="Login" component={LoginScreen} />
            <Stack.Screen 
            name="Daftar" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={DaftarScreen} />
                <Stack.Screen 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            name="Dashboard" component={MyTabs} />
              <Stack.Screen 
            name="ModulPelatihan" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={ModulPelatihanScreen} />
              <Stack.Screen 
            name="DetailModulPelatihan" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={DetailModulPelatihanScreen} />
            <Stack.Screen 
            name="Shop" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={ShopScreen} />
              <Stack.Screen 
            name="Artikel" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={ArtikelScreen} />
                <Stack.Screen 
            name="DetailArtikel" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={DetailArtikelScreen} />
                  <Stack.Screen 
            name="Ebook" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={EbookScreen} />
                  <Stack.Screen 
            name="Webinar" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={WebinarScreen} />
              <Stack.Screen 
            name="ListSertifikasi" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={ListSertifikasiScreen} />
            <Stack.Screen 
            name="DetailSertifikasi" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={DetailSertifikasiScreen} />
            <Stack.Screen 
            name="DetailIdentitasCheckoutSertifikasi" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={DetailIdentitasCheckoutSertifikasiScreen} />
              <Stack.Screen 
            name="DetailItemCheckoutSertifikasi" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={DetailItemCheckoutSertifikasiScreen} />
              <Stack.Screen 
            name="InvoiceSertifikasi" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={InvoiceSertifikasiScreen} />
              <Stack.Screen 
            name="DetailItemCheckoutShop" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={DetailItemCheckoutShopScreen} />
              <Stack.Screen 
            name="DetailIdentitasCheckoutShop" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={DetailIdentitasCheckoutShopScreen} />
              <Stack.Screen 
            name="InvoiceShop" 
            options={{
              headerShown:false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            component={InvoiceShopScreen} />
          </Stack.Navigator>
          </NavigationContainer>
      </GlobalContext.Provider>
    )
  }
  
}

export default function App() {
  return (
   <MyStack/>
  );
}

