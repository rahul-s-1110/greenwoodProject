import React from "react";
import { View,Text,StyleSheet,SafeAreaView,Image, Pressable } from "react-native";
import { ms,s,vs } from "react-native-size-matters";


export const BtnTexts = (props) =>{
    return(
        <Pressable style={props.btnstyle} onPress={props.onPress}>
            <View>
                <Image source={props.img} style={props.imgstyle}/>
            </View>
            <View style={props.midDist}>
                <Text 
                style={props.fontstyle ? props.fontstyle:styles.fontStyles}>
                {props.txt}
                </Text>
            </View>
        </Pressable> 
    )
}

export const LogoImage = (props) =>{
    return(
            <Image
            style={styles.img}
            source={require('../../assets/image/greenwoodLogo.png')}/>
    )
}

export const RowBtnView = (props)=>{
    return(
        <View style={props.style}>
        {props.children}
        </View>
    )
}

const LandingPage = ({navigation})=>{

    const SignupButtons = (props) => {
        return(
            <View style={{alignItems:"center"}} >
                {props.children}
            </View>
        )
    }


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerView}>
                <LogoImage/>
                <SignupButtons style={{marginTop: vs(85)}}>
                    <BtnTexts btnstyle = {styles.signupBtn}  onPress={()=>navigation.navigate('EmailSignin')} txt = {"Sign in With Email"}/>
                    <RowBtnView style={styles.innerBtnView}>
                        <BtnTexts  txt = {"Facebook"} img= {require('../../assets/image/logoImage/facebooklogo.png')} imgstyle= {{width: s(12),height: vs(20)}} midDist = {{marginLeft:s(10)}} btnstyle={styles.inBtn1}/> 

                        <BtnTexts txt = {"Google"} img= {require('../../assets/image/logoImage/googleLogo.png')} midDist = {{marginLeft: s(-15)}} imgstyle={{width: s(27),height: vs(16)}} btnstyle={styles.inBtn2}/>
                    </RowBtnView>
                </SignupButtons>
            </View>
            <View style={{flexDirection:"row",marginBottom: vs(45)}}>
                <View>
                    <Text style={[styles.fontStyles,{color:"rgb(74,74,74)"},]}>Don't have an account? </Text>
                </View>
                <View>
                    <Pressable onPress={()=>navigation.navigate('SignupScreen')}>
                        <Text style={[styles.fontStyles,{color:'rgb(25,209,145)',fontWeight:'600'}]}>Sign up</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"column",
    backgroundColor:"white"
},
containerView:{
    alignItems:"center",
    flexDirection:"column",
    justifyContent:"space-between",
    marginTop: vs(25)
},
img:{
    width: s(270),
    height: vs(270)
},
signupBtn:{
    width: s(290),
    height: vs(40),
    borderRadius: ms(6),
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: 'rgb(25,209,145)'
},
innerBtnView:{
    width: s(290),
    marginTop: vs(20),
    flexDirection:"row",
    justifyContent:"space-between"
},  
logo:{
    width: s(30),
    height: vs(20)
},
inBtn1:{
   width: s(135),
   height: vs(40),
   borderRadius: ms(6),
   alignItems:"center",
   justifyContent:"space-around",
   padding: ms(12),
   flexDirection:"row",
   backgroundColor:"rgb(17,78,154)",
   
},
inBtn2:{
    width: s(135),
    height: vs(40),
    borderRadius: ms(6),
    alignItems:"center",
    justifyContent:"space-around",
    flexDirection:"row",
    backgroundColor:"rgb(241,67,46)",
    padding: ms(8)
    
},
fontStyles:{
    fontSize: ms(15),
    color:"white",
    letterSpacing: s(0.88),
    fontFamily:"Poppins Regular"
},

})

export default LandingPage