import React from "react";
import { View,Text,Pressable,ImageBackground,StyleSheet } from "react-native";
import { vs,s,ms } from "react-native-size-matters";


export const Inside = (props) =>{
    return(
        <View style={styles.storeTxtMainView}>
            <View style={styles.storeInnerView}>
                <Text style={styles.storeViewTxt1}>{props.txt1}</Text>
                <Text style={styles.storeViewTxt2}>{props.txt2}</Text>
            </View>
            <View style={styles.storeInnerView}>
                <Text style={styles.storeViewTxt3}>{props.txt3}</Text>
                <Text style={styles.storeViewTxt4}>{props.txt4}</Text>
            </View>
        </View>
    )
}

export const Stores = (props) =>{
    return(
        <Pressable style={styles.Stores}>
            <View>
                <ImageBackground imageStyle={styles.storeImg} style={{width: s(280),height: vs(125)}} source={props.img}>
                    <View style={styles.storeImgView}>
                        <Text style={styles.storeImgTxt1}>*</Text>
                        <Text style={styles.storeImgTxt2}>4.5</Text>
                    </View>
                </ImageBackground>
            </View>
            <Inside txt1={props.txt1} txt2={props.txt2} txt3={props.txt3} txt4={props.txt4}/>
        </Pressable>
    )
}


const SmallStoreBox = () =>{
    return(
        <View>

        </View>
    )
}
const styles = StyleSheet.create({
    Stores:{
        width: s(280),
        height: vs(180),
        flexDirection:"column"
        ,backgroundColor:"white",
        borderRadius: ms(5),
        shadowOffset:{width: s(1),height: vs(1)},
        shadowOpacity:0.2,
        shadowRadius: ms(1),
        shadowColor:"gray",
        marginBottom: vs(9)
    },
    storeImg:{
        borderTopLeftRadius: ms(5),
        borderTopRightRadius: ms(5),
        shadowOffset:{width: s(3),height: vs(3)},
        shadowOpacity:0.2,
        shadowRadius: ms(1),
        shadowColor:"gray",
    },
    storeImgView:{
        width: s(40),
        height: vs(15),
        backgroundColor:"rgb(84,148,10)",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"flex-end",
        margin: ms(10)
    },
    storeImgTxt2:{
        letterSpacing:0.3,
        fontSize: ms(11),
        color:"white",
        fontWeight:'800'
    },
    storeImgTxt1:{
        fontSize: ms(18),
        color:"white",
        fontWeight:'800'
    },
    storeTxtMainView:{
        width: s(280),
        height: vs(55),
        padding: ms(5),
        flexDirection:"row",
        justifyContent:"space-between"
    },
    storeViewTxt1:{
        fontSize: ms(13),
        letterSpacing: s(0.36),
        fontWeight:'800'
    },
    storeViewTxt2:{
        fontSize: ms(11),
        letterSpacing: s(0.31),
        color:"rgb(85,85,85)"
    },
    storeViewTxt3:{
        fontSize: ms(11),
        letterSpacing: s(0.31),
        color:"rgb(155,155,155)"
    },
    storeViewTxt4:{
        fontSize: ms(10),
        letterSpacing: s(0.28),
        color:"rgb(84,148,10)"
    },
    storeInnerView:{
        flexDirection:"column",
        justifyContent:"space-evenly"
    }

})
export default SmallStoreBox