import React from "react";
import { View,Text,ImageBackground,Pressable,StyleSheet } from "react-native";
import { vs,s,ms } from "react-native-size-matters";


export const Product = (props) =>{
    return(
        <Pressable style={styles.productDataContainer}>
            <ImageBackground source={props.img} imageStyle={styles.productImg} style={styles.img} >
                    <View style={styles.productImgView}>
                        <Text style={{color:"white",fontSize: ms(13)}}>{props.from}</Text>
                    </View>
            </ImageBackground>
            <View style={styles.productMainview}>
                <View>
                    <Text style={styles.productNameTxt}>{props.name}</Text>
                </View>
                <View style={styles.productInnerView}>
                    <View style={styles.productInnerView1}>
                        <View>
                            <Text style={styles.productPrice}>{props.price}</Text>
                        </View>
                        <View > 
                            <Text style={styles.productRealPrice}>{props.originalPrice}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.productSaving} >{props.savings}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}


const ProductBox = () =>{
    return(
        <View></View>
    )
}


const styles = StyleSheet.create({
    productDataContainer:{
        width: s(300),
        height: vs(210),
        backgroundColor:"white",
        marginBottom: vs(20),
        borderRadius: ms(5),
        shadowOffset:{width: s(1),height: vs(1)},
        shadowOpacity:0.2,
        shadowRadius: ms(1),
        shadowColor:"gray",
    },
    productImg:{
        borderTopLeftRadius: ms(5),
        borderTopRightRadius: ms(5)
    },
    img:{
        width: s(300),
        height: vs(140),
        flexDirection:"column-reverse"
    },
    productImgView:{
        margin: ms(6),
        width: s(100),
        backgroundColor:"rgba(10,10,10,0.63)"
    },
    productMainview:{
        width: s(300),
        height: vs(70),
        flexDirection:"column",
        justifyContent:"space-around",
        padding: ms(10)
    },
    productNameTxt:{
        fontSize: ms(13),
        fontWeight:'600',
        letterSpacing: s(0.31)
    },
    productInnerView:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    productInnerView1:{
        flexDirection:"row",
        width: s(100),
        alignItems:"center",
        justifyContent:"space-between"
    },
    productPrice:{
        fontSize: ms(17),
        fontWeight:'600',
        letterSpacing: s(0.41),
        color:"rgb(76,133,10)"
    },
    productRealPrice:{
        fontSize: ms(11),
        color:"rgb(134,134,134)",
        textDecorationLine:"line-through",
        letterSpacing: s(0.27)
    },
    productSaving:{
        letterSpacing: s(0.27),
        color:"rgb(134,134,134)",
        fontSize: ms(11)
    }
})
export default ProductBox