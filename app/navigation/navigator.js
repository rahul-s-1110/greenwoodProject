import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LandingPage from "../components/loginSignup/landingPage";
import SignupScreen from "../components/loginSignup/signupPage";
import EmailSignin from "../components/loginSignup/emailSignin";
import ExplorarScreen from "../components/loginSignup/exolorar";
import Events from "../screens/bottomNavBarScreens/eventsScreen";
import Component from "../components/component";
import BottomNav from "../components/bottomNavBar";
import ScreensTopScrollBtn from "../components/screensScrollBtn";
import DealScreen from "../screens/bottomNavBarScreens/dealScreen";
import ProductScreen from "../screens/bottomNavBarScreens/productScreen";
import MoreButton from "../screens/bottomNavBarScreens/moreButtonScreen";
import Calculator from "../screens/bottomNavBarScreens/calculator";
import Store from "../stores/stores";
import Flex from "./components/flex/storesBigFlax";
import Example from "../components/loginSignup/exaple";
import DentalServiceDetail from "../screens/dentalScreen/serviceDetail";
import BusinessDetails from "../screens/gymScreens/businessDetails";
import ValueReducer from "../components/learningFiles/redux/working_files/reducer";


const NavigatorScreen = () =>{

const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'valueReducer'} screenOptions={{headerShown: false}}>
                <Stack.Screen name={'homePage'} component={LandingPage}/>
                <Stack.Screen name={'SignupScreen'} component={SignupScreen}/>
                <Stack.Screen name={'EmailSignin'} component={EmailSignin} />
                <Stack.Screen name={'bottomNavBar'} component={BottomNav} />
                <Stack.Screen name={'calculator'} component={Calculator} />
                <Stack.Screen name={"store"} component={Store} />
                <Stack.Screen name={"flex"} component={Flex} />
                <Stack.Screen name={"example"} component={Example} />
                <Stack.Screen name={'dentalServiceDetail'} component={DentalServiceDetail} />
                <Stack.Screen name={'businessDetail'} component={BusinessDetails} />
                <Stack.Screen name={'valueReducer'} component={ValueReducer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default NavigatorScreen;