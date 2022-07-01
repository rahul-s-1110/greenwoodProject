import React from "react";
import { View,Text,StyleSheet,ImageBackground,Pressable } from "react-native";
import { vs,s,ms } from "react-native-size-matters";


export const LocalDeals = (props) =>{
    return(
        <Pressable style={styles.localDealContainer} >
            <ImageBackground imageStyle={styles.dealImg} style={styles.dealImgMainView} source={props.img}>
                    <View  style={styles.dealImgView}> 
                        <View style={styles.dealImgInnerView}>
                            <View>
                                <Text style={{fontSize: ms(11),color:"white"}}>{props.gymName}</Text>
                            </View>
                            <View>
                                <Text style={{fontSize: ms(11),color:"white"}}>{props.limitDate}</Text>
                            </View>
                        </View>
                    </View>
            </ImageBackground>
            <View style={styles.dealOuterView}>
                    <View>
                        <Text style={styles.dealOuterViewTxt1}>{props.percent}</Text>
                        <Text style={{fontSize: ms(11)}}>{props.duration}</Text>
                    </View>
            </View>
        </Pressable>
    )
}




const LocalDealBox = () =>{
    return(
        <View>
            <LocalDeals />
        </View>
    )
}




const styles = StyleSheet.create({
    localDealContainer:{
        width: s(220),
        marginBottom: vs(9),
        height: vs(150),
        backgroundColor:"white",
        shadowOffset:{width: s(1),height: vs(1)},
        shadowOpacity:0.2,
        shadowRadius: ms(1),
        shadowColor:"gray",
    },
    dealImg:{
        borderTopLeftRadius: ms(5),
        borderTopRightRadius: ms(5)
    },
    dealImgMainView:{
        width: s(220),
        height: vs(110),
        flexDirection:"column-reverse"
    },
    dealImgView:{
        width: s(220),
        height: vs(28),
        justifyContent:"center",
        borderRadius: ms(5),
        backgroundColor:'rgba(212,212,212,0.2)'
    },
    dealImgInnerView:{
        flexDirection:"row",
        marginHorizontal: s(5),
        justifyContent:"space-between",
        alignItems:"center"
    },
    dealOuterView:{
        flexDirection:"column",
        padding: ms(10),
        justifyContent:"space-evenly",
        width: s(220),
        height: vs(40)
    },
    dealOuterViewTxt1:{
        fontSize: ms(13),
        letterSpacing: s(0.36),
        fontWeight:"800"
    }
})

export default LocalDealBox