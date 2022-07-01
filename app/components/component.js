import React from "react";
import { View,Text,StyleSheet,Pressable,Image, FlatList, ImageBackground, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { vs,s,ms } from "react-native-size-matters";

export const EventBar = (props)=>{
        if(props.searchShow == false){
            return(
                <View style={styles.eventBarStyle}>
                    <View style={{alignSelf:"center"}}>
                        <Text style={styles.eventBarTxt}>{props.txt}</Text>
                    </View>
                    <View>
                        <Pressable onPress={props.onPress}>
                            <Image style={styles.searchStyle} source={props.img}/>
                        </Pressable> 
                    </View>
                </View>
            )
        }else{
            return(
                <View style={styles.eventBarStyle}>
                            <View style={styles.eventBarView}>
                            <Pressable onPress={props.onPress}>
                                <Text>{'<-'}</Text>
                            </Pressable>
                          <TextInput style={{width:'90%',height:35,borderRadius:8,}} autoFocus placeholder="Search here" />
                          </View>
                </View>
            )
        }
}  

export const ItemSepratorBar = (props) =>{
    return(
        <Pressable style={styles.itemBarMainView}>
            <View>
                <Text style={styles.itemBarTxt1}>{props.txt}</Text>
            </View>
            <View style={{marginRight: s(10)}}>
                <Pressable onPress={props.onPress} >
                    <Text style={styles.itemBarTxt2}>VIEW ALL</Text>
                </Pressable>
            </View>
        </Pressable>
    )
}

export const EventLogoBox = (props) =>{
    return(
        <View style={styles.eventLogoBox}>
            <Image style={{width: s(17),height: vs(17)}} source={props.icon} />
            <Text style={{color:"white",fontSize:ms(11)}}>{props.logotxt}</Text>
        </View>
    )
}

export const ABC = (props) =>{
    return(
        <View  style={styles.eventMainview}>
            <View style={{width:s(110),height:vs(110)}}>
                <ImageBackground imageStyle={{borderTopLeftRadius:5,borderBottomLeftRadius: ms(5)}} style={styles.imgBackStyle} source={props.img} >
                    <View style={styles.imgInnerTxt}>
                        <View>
                            <Text style={styles.imgInnerTxt1}>Jul</Text>
                        </View>
                        <View>
                            <Text style={styles.imgInnerTxt2}>13</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={{flexDirection:"column",marginLeft: s(12),justifyContent:'space-evenly'}}>
                <View style={{width: s(200)}}>
                    <Text style={styles.eventTxt1}>{props.txt1}</Text>
                </View>
                <View style={{width:s(200)}}>
                    <Text style={styles.eventTxt2}>{props.txt2}</Text>
                </View>
                <View>
                    <Text style={styles.eventTxt3}>{props.txt3}</Text>
                </View>
            </View>
        </View>
    )
}

const Component = () =>{

const RanderItem = (item) =>{
    console.log(item)
    return(
        <ABC 
        img={item.item.img}
        txt1={item.item.txt1}
        txt2={item.item.txt2}
        txt3={item.item.txt3}
        /> 
    )
}
    return(
        <SafeAreaView style={{alignItems:"center"}} >
            <EventLogoBox />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    eventBarStyle:{
        width:'100%',
        height: vs(54),
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom: vs(8)
    },
    searchStyle:{
        width: s(23),
        height: vs(21),
        marginRight:s(15)
    },
    imgInnerView:{
        width: s(30),
        height:vs(30),
        alignSelf:"flex-end",
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"space-around",
        backgroundColor:"rgba(0,0,0,0.47)",
        margin: ms(5),
        borderRadius: ms(2),
        margin: ms(10)
    },
    eventMainview:{
        width: s(330),
        height: vs(110),
        borderRadius: ms(5),
        backgroundColor:"white",
        flexDirection:"row",
        shadowOffset:{width: s(1),height: vs(1)},
        shadowOpacity:0.15,
        shadowRadius: ms(1),
        shadowColor:"gray",
    },
    imgInnerTxt:{
        width: s(30),
        height: vs(30),
        alignSelf:"flex-end",
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"space-around",
        backgroundColor:"rgba(0,0,0,0.47)",
        borderRadius: ms(2),
        margin: ms(10)
    },
    imgInnerTxt1:{
        fontSize: ms(11),
        fontWeight:'300',
        fontFamily:"Poppins-light",
        letterSpacing:s(0.3),
        color:"rgb(255,255,255)"
    },
    imgInnerTxt2:{
        fontSize: ms(16),
        color:"white",
        letterSpacing: s(0.3),
        fontWeight:"700"
    },
    eventTxt1:{
        fontSize: ms(15),
        letterSpacing:s(0.42),
        fontWeight:'600',
        fontFamily:"Poppins-SemiBold"
    },
    eventTxt2:{
        fontSize: ms(11),
        letterSpacing: s(0.31),
        color:"rgb(118,118,118)",
        fontFamily:"poppins-light"
    },
    eventTxt3:{
        fontSize: ms(11),
        letterSpacing:s(0.31)
        ,color:"rgb(47,47,47)",
        fontFamily:"poppins-light",
        fontWeight:'500'
    },
    eventLogoBox:{
        width:s(129),
        height:vs(65),
        justifyContent:"center",
        alignItems:"center",
        borderRadius:ms(3),
        backgroundColor:"skyblue"
    },
    itemBarMainView:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:'100%',
        height:vs(60),
        alignItems:"center"
    },
    itemBarTxt1:{
        color:"rgb(79,79,79)",
        fontSize:ms(15),
        fontWeight:'600',
        letterSpacing:s(0.42)
    },
    itemBarTxt2:{
        color:"rgb(23,200,132)",
        fontSize:ms(13),
        letterSpacing: s(0.36)
    },
    eventBarTxt:{
        fontSize:ms(30),
        color:'rgb(79,79,79)',
        letterSpacing:s(0.83),
        fontFamily:"Poppins-Light"
    },
    eventBarView:{
        flexDirection:"row",
        width:'98%',
        borderWidth:1,
        borderRadius:15,
        justifyContent:"space-around",
        alignItems:"center"
    },
    imgBackStyle:{
        width: s(110),
        height: vs(110)
    }
    
    
})

export default Component