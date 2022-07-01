import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import { vs,s,ms } from "react-native-size-matters";

const GymOffers = (props) =>{
    console.log(props)
    return(
        <View style={styles.container}>
            <Image style={styles.imgStyle} source={require('../../assets/image/ScreenImages/yogaimg.jpeg')} />
            <View style={{marginHorizontal:10}}>
                <Text style={styles.txt1}>{props.discount}</Text>
                <Text style={styles.txt2}>{props.plan}</Text>
                <Text style={styles.txt3}>{props.planDate}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        width:'100%',
        height:100,
        borderWidth:0.25,
        alignItems:"center",
        borderRadius:3
        // shadowOffset:{width: s(1),height: vs(1)},
        // shadowOpacity:0.8,
        // shadowRadius: ms(4),
        // shadowColor:"gray",
    },
    imgStyle:{
        width:100,
        height:100,
        borderBottomLeftRadius:3,
        borderTopLeftRadius:3
    },
    txt1:{
        fontSize:13,
        letterSpacing:0.36,
        color:'rgb(79,79,79)',
        fontWeight:"800",
    },
    txt2:{
        fontSize:11,
        letterSpacing:0.36,
        color:"rgb(79,79,79)"
    },
    txt3:{
        fontSize:9,
        letterSpacing:0.25,
        color:'rgb(94,94,94)'
    }
})

export default GymOffers