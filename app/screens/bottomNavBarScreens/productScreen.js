import React, { useState } from "react";
import { View,Text, FlatList,Pressable,ImageBackground,StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EventBar } from "../../components/component";
import { Productdata } from "../data/dataStorage";
import { ms,s,vs } from "react-native-size-matters";

const ProductScreen = () =>{

const [showBar,setShowBar] = useState(false);

const Seprate = () =><View style={{width:'100%',height:vs(10)}} />

// const Footer = () =>{
//     return(
//         <View style={{width:'100%',height:15}}></View>
//     )
// }


let a = require('../../assets/image/logoImage/searchLogo.png')


const Product = (props) =>{
    return(
        <Pressable style={styles.container}>
            <ImageBackground source={props.img} style={styles.productImg} >
                    <View style={styles.imgview}>
                        <Text style={{color:"white",fontSize: ms(13)}}>{props.from}</Text>
                    </View>
            </ImageBackground>
            <View style={styles.innerTopView}>
                <View>
                    <Text style={styles.productName}>{props.name}</Text>
                </View>
                <View style={styles.productPriceView}>
                    <View style={styles.insideTopView}>
                        <View>
                            <Text style={styles.productPrice}>{props.price}</Text>
                        </View>
                        <View > 
                            <Text style={styles.originalPrice}>{props.originalPrice}</Text>
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

const RanderItem = (item) =>{
    return(
        <Product 
            img={item.item.img}
            from={item.item.byfrom}
            name={item.item.name}
            price={item.item.price}
            originalPrice={item.item.originalPrice}
            savings={item.item.savings}
        />
    )
}

const Head = () =><EventBar searchShow={showBar} txt={"Shop Products"} img={a}/>


return(
     <SafeAreaView style={{flex:1,marginHorizontal: s(10)}}  edges={['top', 'left', 'right']} >
        <View >
            <FlatList 
            data={Productdata}
            ListHeaderComponent={Head}
            showsVerticalScrollIndicator={false}
            renderItem={RanderItem}
            ItemSeparatorComponent={Seprate}
            />
        </View>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        width: s(360),
        height: vs(175),
        borderRadius: ms(5),
        backgroundColor:"white",
        marginBottom: vs(20),
        borderRadius: ms(5),
        shadowOffset:{width: s(1),height: vs(1)},
        shadowOpacity:0.2,
        shadowRadius: ms(1),
        shadowColor:"gray",
    },
    imgview:{
        margin: ms(6),
        width: s(100),
        backgroundColor:"rgba(10,10,10,0.63)"
    },
    innerTopView:{
        width: s(330),
        height: vs(60),
        flexDirection:"column",
        justifyContent:"space-around",
        padding: ms(10)
    },
    insideTopView:{
        flexDirection:"row",
        width: s(90),
        alignItems:"center",
        justifyContent:"space-between"
    },
    originalPrice:{
        fontSize:11,
        color:"rgb(134,134,134)",
        textDecorationLine:'line-through',
        letterSpacing: s(0.27)
    },
    productImg:{
        width: s(360),
        height: vs(120),
        flexDirection:"column-reverse"
    },
    productName:{
        fontSize: ms(13),
        fontWeight:'600',
        letterSpacing: s(0.31)
    },
    productPriceView:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    productPrice:{
        fontSize: ms(17),
        fontWeight:"600",
        letterSpacing: s(0.41),
        color:"rgb(76,133,10)"
    },
    productSaving:{
        letterSpacing: s(0.27),
        color:"rgb(134,134,134)",
        fontSize: ms(11)
    }
    
})
export default ProductScreen