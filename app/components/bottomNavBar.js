import React from "react";
import { View,Text,Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExplorarScreen from "./loginSignup/exolorar";
import Events from "../screens/bottomNavBarScreens/eventsScreen";
import DealScreen from "../screens/bottomNavBarScreens/dealScreen";
import ProductScreen from "../screens/bottomNavBarScreens/productScreen";
import MoreButton from "../screens/bottomNavBarScreens/moreButtonScreen";
import { vs,s,ms } from "react-native-size-matters";

const Tab = createBottomTabNavigator();


const BottomNav = () =>{
    
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator initialRouteName="explore"  screenOptions={{tabBarActiveBackgroundColor:"rgb(246,246,246)",tabBarActiveTintColor:'black',headerShown:false}}>
                <Tab.Screen name="events"  component={Events} options={{title:"Event",tabBarIcon:({size,focused,color}) =>{
                    return(
                        <Image 
                        style={{width:s(23),height:vs(20)}}
                        source={require('../assets/image/logoImage/eventLogo.png')}
                        />
                    )
                }}} />
                <Tab.Screen name="Deal" component={DealScreen} options={{tabBarLabel:"Deals",tabBarIcon:({size,focused,color}) =>{
                    return(
                        <Image
                            style={{width: s(23),height:vs(22)}}
                            source={require('../assets/image/logoImage/dealsLogo.png')}
                        />
                    )
                }}} /> 
                <Tab.Screen name="explore" component={ExplorarScreen} options={{tabBarLabel:"Explore",tabBarIcon:({size,focused,color}) =>{
                    return(
                        <Image 
                            style={{width: s(30),height: vs(23)}}
                            source={require('../assets/image/logoImage/exploreLogo.png')}
                        />
                    )
                }}} />
                  <Tab.Screen name="ProductScreen" component={ProductScreen} options={{tabBarLabel:"Products",tabBarIcon:({size,focused,color}) =>{
                    return(
                        <Image 
                            style={{width: s(20),height: vs(25)}}
                            source={require('../assets/image/logoImage/productsLogo.png')}
                        />
                    )
                }}} />
                  <Tab.Screen name="MoreButton" component={MoreButton} options={{tabBarLabel:"More",tabBarIcon:({size,focused,color}) =>{
                    return(
                        <Image 
                            style={{width: s(25),height: vs(5)}}
                            source={require('../assets/image/logoImage/moreImageLogo.png')}
                        />
                    )
                }}} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default BottomNav