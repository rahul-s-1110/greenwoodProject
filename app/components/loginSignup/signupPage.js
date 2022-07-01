import React, { useEffect, useState } from "react";
import { View,Text,StyleSheet, SafeAreaView,Image,TextInput, Pressable, Alert } from "react-native";
import { BtnTexts, LogoImage } from "./landingPage";
import { ms,s,vs } from "react-native-size-matters";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Input = (props)=>{
    return(
        <View style={{marginBottom: vs(18)}}>
            <Text style={{fontSize: ms(11),letterSpacing: s(0.31),color:'rgb(98,98,98)'}}>{props.title}</Text>
            <TextInput onChangeText={props.setValue} value={props.value} style={styles.txtInput}/>
        </View>
    )
}



const SignupScreen = ({navigation}) =>{

const [email,setEmail] = useState('abc');
const [password,setPassword] = useState('ad');
const [cPassword,setCPassword] = useState('ad');
const [userData,userSetData] = useState([]);

useEffect(()=>{
    getData();
},[]);



const getData = async() =>{
    const data = await AsyncStorage.getItem('UserDetail');
    const parseData= JSON.parse(data) ?? [];
    userSetData(parseData);
}

const signUP = async() =>{
    if(password != cPassword){
        Alert.alert("Password did not match");
    }
   else{
       const v  = userData.filter(x=>x.userEmail !== email)
                var dataCollection = [...userData,{email,password}];
                await AsyncStorage.setItem('UserDetail',JSON.stringify(dataCollection)); 
               navigation.navigate('EmailSignin')    
    } 
} 


    return(
        <SafeAreaView style={styles.conatainer}>
                <LogoImage/>
            <View style={{marginTop: vs(-60)}}>
                <Input value={email} setValue = {setEmail}  title ={'E-MAIL ADDRESS'}/>
                <Input value={password} setValue={setPassword} title ={'PASSWORD'}/>
                <Input value={cPassword} setValue={setCPassword} title={'CONFIRM PASSWORD'}/>
                    <BtnTexts btnstyle = {styles.signupBtn} onPress={()=>signUP()}  txt = {"Sign Up"}/>
            </View>
            <View >
                <Pressable onPress={()=>navigation.goBack()}>
                    <Text style={{fontSize: ms(15),color:'rgb(74,74,74)',letterSpacing: s(0.88),fontFamily:"Poppins Regular"}}>{'<<'} Go Back</Text>
                </Pressable>             
            </View>
        </SafeAreaView> 
    )
}
const styles = StyleSheet.create({
    conatainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-around",
        backgroundColor:"rgb(255,255,255)"
    },
    img:{
        width: s(270),
        height: vs(270),    
    },
    txtInput:{
        width: s(290),
        height: vs(40),
        borderBottomWidth: vs(0.2),
        borderColor:'rgb(216,216,216)'
    },
    signupBtn:{
        width: s(120),
        height: vs(45),
        borderRadius: ms(5),
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"flex-start",
        backgroundColor: 'rgb(25,209,145)'
    },
})
export default SignupScreen