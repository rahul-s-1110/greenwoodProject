import React from "react";
import { View,Text,Image,StyleSheet } from "react-native";
import { vs,s,ms } from "react-native-size-matters";

const AboutBusiness = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.innerView1} >
                <Text style={styles.viewTxt1}>Gold's Gym</Text>
                <Text style={styles.viewTxt2}>Fitness{' & '}Training</Text>
                <Text style={styles.viewTxt3}>OPENED NOW</Text>
            </View>
            <View style={styles.innerView2}>
                <View style={styles.insideView2} >
                    <Image source={require('../../assets/image/logoImage/starWhite.png')} />
                    <Text style={{color:"rgb(255,255,255)",fontSize: ms(13),letterSpacing: s(0.33)}}> 4.5</Text>
                </View>
                <Text style={{fontSize: ms(9),width: s(60)}}>124 Reviews</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: vs(80),
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:'rgb(255,255,255)'
    },
    innerView1:{
        width:'50%',
        paddingVertical: vs(10),
        height: vs(80),
        marginLeft: s(15),
        flexDirection:"column",
        justifyContent:"space-around"
    },
    innerView2:{
        width:"20%",
        marginTop: vs(20),
        height: vs(150),
        flexDirection:"column"
    },
    insideView2:{
        width: s(53),
        height: vs(25),
        marginBottom: vs(4),
        borderRadius: ms(2),
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:'rgb(86,152,10)',
        justifyContent:"center"
    },
    viewTxt1:{
        fontSize: ms(17),
        letterSpacing: s(0.47),
        fontWeight:'600',
        color:'rgb(74,144,226)'
    },
    viewTxt2:{
        fontSize: ms(13),
        letterSpacing: s(0.36),
        fontWeight:'600',
        color:'rgb(85,85,85)'
    },
    viewTxt3:{
        fontSize: ms(11),
        letterSpacing: s(0.31),
        fontWeight:'700',
        color:'rgb(84,148,10)'
    }
})

export default AboutBusiness