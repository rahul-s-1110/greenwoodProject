import React, { useEffect, useState } from "react";
import { View,Text, SafeAreaView,StyleSheet, Pressable, Alert } from "react-native";
import { BtnTexts, LogoImage, RowBtnView } from "./landingPage";
import { Input } from "./signupPage";
import { vs,s,ms } from "react-native-size-matters";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { parse } from "@babel/core";

const EmailSignin = ({navigation}) =>{
const [email,setEmail] = useState('abc');
const [password,setPassword] = useState('ad');
const [data,setData] = useState() 
const [token,setToken] = useState(false);

const signInFun = () =>{
    if(email.length != 0 && password.length != 0){
        var v = data.filter(x=>x.email===email && x.password === password);
        if(v.length>=1){
            userData();
        }
        else{
            Alert.alert("Invalid login credintials")
        }
    }else{
        console.log("Error")
    }
}

const getData = async() =>{
    const data = await AsyncStorage.getItem('UserDetail');
    const parseData= JSON.parse(data);
    setData(parseData);
}

useEffect(()=>{
    getData();
},[]);

const userData = () =>{ 
    navigation.navigate('bottomNavBar');
}

    return(
       <SafeAreaView style={styles.conatainer}>
           <View style={{alignItems:"center"}}>
                <LogoImage/>
                <View>
                    <Input  setValue={setEmail} value = {email} title="E-MAIL ADDRESS"/>
                    <Input  setValue={setPassword} value={password} title='PASSWORD' />
                </View>
                <RowBtnView style={styles.signupBtnView} >
                    <BtnTexts btnstyle={styles.signupBtn} onPress={()=> signInFun()}  txt={'Sign In'} />
                    <BtnTexts btnstyle={styles.signupBtn1} onPress={()=>navigation.navigate('EventsScreen')} fontstyle ={styles.fntStyle} txt={'Forgot Password?'} />
                </RowBtnView>
           </View>
          <View>
            <Pressable style={{marginBottom: vs(30)}} onPress={()=>navigation.goBack()}>
                    <Text style={styles.goBackTxt}>{'<<'} Go Back</Text>
            </Pressable> 
          </View>
       </SafeAreaView>
    )
} 
const styles = StyleSheet.create({
    conatainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"white",
    },
    signupBtn:{
        width: s(130),
        height: vs(40),
        borderRadius: ms(5),
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: 'rgb(25,209,145)'
    },
    signupBtn1:{
        width: s(130),
        height: vs(40),
        borderRadius: ms(5),
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: 'white',
        
    },
    signupBtnView:{
        width: s(290),
        flexDirection:"row",
        justifyContent:"space-between",
    },
    fntStyle:{
        color:"rgb(216,72,89)",
        letterSpacing: s(0.88),
        fontSize: ms(13)
    },
    goBackTxt:{
        fontSize: ms(15),
        color:'rgb(74,74,74)',
        letterSpacing: s(0.88),
        fontFamily:"Poppins Regular"
    }
})
export default EmailSignin  