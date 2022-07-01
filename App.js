import React from "react";
import { View,Text } from "react-native";
import LandingPage from "./app/components/loginSignup/landingPage";
import SignupScreen from "./app/components/loginSignup/signupPage";
import NavigatorScreen from "./app/navigation/navigator";




const App = () => {

  return(
      <View style={{flex:1}}>
       {/* <LandingPage/> */}
       {/* <SignupScreen/> */}
       <NavigatorScreen />
      </View>
  )
}
export default App