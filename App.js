import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import LandingScreen from './screen/LandingScreen';
import LoginScreen from './screen/LoginScreen';
import DaftarScreen from './screen/DaftarScreen';
import DashboardScreen from './screen/DashboardScreen';
import ModulPelatihanScreen from './screen/ModulPelatihanScreen';
import DetailModulPelatihanScreen from './screen/DetailModulPelatihanScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LinearGradient } from 'expo-linear-gradient';

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'column' }}>
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
            <View style={{flex:1,justifyContent:"center",alignItems:"center",height:EStyleSheet.value("50rem")}}>
              <Text style={{color:"#b7b7b7",fontSize:EStyleSheet.value("12rem"),fontWeight:"bold"}}>Shop</Text>
            </View>
          );
        }
        else if(route.name==="Menu2"){
            return (
              <View style={{flex:1,justifyContent:"center",alignItems:"center",height:EStyleSheet.value("50rem")}}>
                 <Text style={{color:"#b7b7b7",fontSize:EStyleSheet.value("12rem"),fontWeight:"bold"}}>Notif</Text>
              </View>
            );
        }
        else if(route.name==="Menu3"){
          return (
            <View style={{flex:1,height:EStyleSheet.value("50rem"),justifyContent:"center",alignItems:"center"}}>
               <View style={{backgroundColor:"rgb(35, 182, 151)",justifyContent:"center",alignItems:"center",borderRadius:999,marginBottom:EStyleSheet.value("35rem"),width:EStyleSheet.value("70rem"),height:EStyleSheet.value("70rem")}}>
                 <Image style={{width:EStyleSheet.value("130rem"),height:EStyleSheet.value("130rem"),marginBottom:EStyleSheet.value("14rem"),marginRight:EStyleSheet.value("8rem")}} source={require("./assets/jagoank3.png")}/>
               </View>
            </View>
          );
        }
        else if(route.name==="Menu4"){
          return (
            <View style={{flex:1,justifyContent:"center",alignItems:"center",height:EStyleSheet.value("50rem")}}>
               <Text style={{color:"#b7b7b7",fontSize:EStyleSheet.value("12rem"),fontWeight:"bold"}}>Tautan</Text>
            </View>
          );
      }
      else if(route.name==="Menu5"){
        return (
          <View style={{flex:1,justifyContent:"center",alignItems:"center",height:EStyleSheet.value("50rem")}}>
            <Text style={{color:"#b7b7b7",fontSize:EStyleSheet.value("12rem"),fontWeight:"bold"}}>Profil</Text>
          </View>
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
        <Tab.Screen options={{headerShown:false}} name="Menu2" component={DashboardScreen} />
        <Tab.Screen options={{headerShown:false}} name="Menu3" component={DashboardScreen} />
        <Tab.Screen options={{headerShown:false}} name="Menu4" component={DashboardScreen} />
        <Tab.Screen options={{headerShown:false}} name="Menu5" component={DashboardScreen} />
      </Tab.Navigator>
  );
}

function MyStack(){
  return (
    <NavigationContainer>
    <Stack.Navigator
    >
      <Stack.Screen 
       options={{
        headerShown:false,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      }}
      name="Landing" component={MyTabs} />
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
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
   <MyStack/>
  );
}

