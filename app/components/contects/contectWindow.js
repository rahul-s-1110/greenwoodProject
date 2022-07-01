import React from "react";
import { View,Text,Image,StyleSheet, Pressable } from "react-native";
import { vs,s,ms } from "react-native-size-matters";

const ContectWindow = () =>{
    return(
        <View style={styles.container}>
        <View style={styles.innerView1}>
              <Image style={{width: s(15),height: vs(29)}} source={require('../../assets/image/logoImage/location.png')} />
              <View>
                  <Text style={{fontSize:ms(11),color:'rgb(38,38,38)',letterSpacing: s(0.31)}}>Distance 3.7 KM</Text>
                  <Text style={{fontSize: ms(9),letterSpacing: s(0.25),color:'rgb(38,38,38)'}}>21 Street,Hamshare</Text>
              </View>
        </View>
        <View style={styles.innerView2}>
            <Pressable style={styles.insideView2}>
              <Image source={require('../../assets/image/logoImage/callingLogo.png')} />
            </Pressable>
            <Pressable style={[styles.insideView2,{backgroundColor:'rgb(23,200,132)'}]}>
                <Image source={require('../../assets/image/logoImage/messageLogo.png')} />
            </Pressable>
          </View>
      </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        justifyContent:"space-between",
        height: vs(70),
        flexDirection:"row",
        alignItems:"center"
    },
    innerView1:{
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal: s(15),
        justifyContent:"space-between",
        width:'30%'
    },
    innerView2:{
        width:'40%',
        marginHorizontal: s(10),
        flexDirection:"row",
        justifyContent:"space-around"
    },
    insideView2:{
        width: s(60),
        height: vs(30),
        borderRadius: ms(3),
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"rgb(0,210,234)"

    }

})

export default ContectWindow