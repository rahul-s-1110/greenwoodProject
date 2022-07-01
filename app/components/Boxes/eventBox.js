import React from "react";
import { View,StyleSheet,ImageBackground,Text } from "react-native";
import { vs,s,ms } from "react-native-size-matters";

export const EventBox = (props) =>{
    return(
        <View  style={styles.events}>
            <View style={{width: s(90),height: vs(120)}}>
                <ImageBackground imageStyle={styles.imgStyle} style={{width: s(90),height: vs(120),}} source={props.img} >
                    <View style={styles.eventImgMainView}>
                        <View>
                            <Text style={styles.eventImgMonth}>Jul</Text>
                        </View>
                        <View>
                            <Text style={styles.eventImgdate}>13</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.eventTxtView}>
                <View style={{width: s(195)}}>
                    <Text style={{fontSize: ms(15),fontWeight:'600'}}>{props.txt1}</Text>
                </View>
                <View style={{width: s(195)}}>
                    <Text style={styles.eventTxt2}>{props.txt2}</Text>
                </View>
                <View>
                    <Text style={styles.eventTxt3}>{props.txt3}</Text>
                </View>
            </View>
        </View>
    )
}


const Eventbox = () =>{
    return(
        <View></View>
    )
}
const styles = StyleSheet.create({
    events:{
        width: s(300),
        height: vs(120),
        borderRadius: ms(5),
        backgroundColor:"white",
        flexDirection:"row",
        shadowOffset:{width: s(1),height: vs(1)},
        shadowOpacity:0.15,
        shadowRadius: ms(1),
        shadowColor:"gray",
        marginBottom: vs(14),
    },
    eventImgMainView:{
        width: s(30),
        height: vs(30),
        alignSelf:"flex-end",
        flexDirection:"column",
        justifyContent:"space-around",
        backgroundColor:"rgba(0,0,0,0.47)",
        margin: ms(5),
        borderRadius: ms(2),
        padding: ms(2)
    },
    eventImgMonth:{
        fontSize: ms(11),
        letterSpacing: s(0.3),
        fontWeight:'400',
        color:"white"
    },
    eventImgdate:{
        fontSize: ms(16),
        letterSpacing: s(0.3),
        fontWeight:'500',
        color:"white"
    },
    eventTxtView:{
        flexDirection:"column",
        marginLeft: s(12),
        justifyContent:'space-evenly'
    },
    eventTxt2:{
        fontSize: ms(11),
        letterSpacing: s(0.31),
        color:"rgb(118,118,118)"
    },
    eventTxt3:{
        fontSize: ms(11),
        letterSpacing: s(0.31),
        color:"rgb(47,47,47)",
        fontWeight:'700'
    },
    imgStyle:{
        borderTopLeftRadius: ms(5),
        borderBottomLeftRadius: ms(5),
    }
})
export default Eventbox