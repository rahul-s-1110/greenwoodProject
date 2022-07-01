import React from "react";
import { View,Text, FlatList,Image, Pressable,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { vs,s,ms } from "react-native-size-matters";

const Data =[
    {
        img:require('../assets/image/logoImage/entertenmentLogo.png'),
        txt:'Entertainment'
    },
    {
        img:require('../assets/image/logoImage/blackLogo/heartLogo.png'),
        txt:"Medical"
    },
    {
        img:require('../assets/image/logoImage/blackLogo/techLogo.png'),
        txt:"Technology"
    }
]

const ColorComp = (props) =>{
    return(
        <Pressable style={styles.AbcView}>
            <Image style={styles.colorCompImg} source={props.img} />
            <Text style={styles.AbcTxt}>{props.txt}</Text>
        </Pressable>
    )
}
const CompWithoutcolor = (props) =>{
    return(
        <Pressable style={[styles.unColorComp,props.logoColor]}>
            <Image style={styles.unColorCompImg} source={props.img} />
            <Text style={styles.unColorCompTxt}>{props.txt}</Text>
        </Pressable>
    )
}

const ScreensTopScrollBtn = () =>{

const RanderItem = (item) =>{
    if(item.index===0){
        return(
            <ColorComp 
                img={item.item.img}
                txt={item.item.txt}
            />
        )
    }else { 
        return(
            <CompWithoutcolor
                img = {item.item.img}
                txt = {item.item.txt}
            />
        )
    }
}

const Sepratedata = () =>{
    return(
        <View style={{width: s(10),height: vs(65)}}></View>
    )
}
    return(
        <View>
           <FlatList 
            data={Data}
            ItemSeparatorComponent={Sepratedata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={RanderItem}
            />
        </View>
         
    )
}
const styles = StyleSheet.create({
    AbcView:{
        width: s(120),
        height: vs(65),
        justifyContent:"center",
        marginBottom: vs(25),
        alignItems:"center",
        backgroundColor:"rgb(25,209,145)",
        borderRadius: ms(3)
    },
    AbcTxt:{
        fontSize: ms(11),
        color:"white",
        fontFamily:"Poppins-Medium"
    },
    unColorComp:{
        width: s(120),
        height: vs(65),
        justifyContent:"center",
        marginBottom: vs(25),
        alignItems:"center",
        backgroundColor:"white",
        borderRadius: ms(3)
    },
    unColorCompTxt:{
        fontSize: ms(11),
        fontFamily:"Poppins-Medium"
    },
    unColorCompImg:{
        width: s(30),
        height: vs(24),
        marginBottom: vs(3)
    },
    colorCompImg:{
        width: s(25),
        height: vs(23),
        marginBottom: vs(3)
    }
})
export default ScreensTopScrollBtn