import React from "react";
import { View,Text, StyleSheet,Pressable,ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { vs,s,ms } from "react-native-size-matters";




export const Inside = (props) =>{
    return(
        <View style={{width: s(330),height: vs(50),borderBottomLeftRadius: ms(5),borderBottomRightRadius:ms(5),backgroundColor:"white",padding: ms(10),flexDirection:"row",justifyContent:"space-between"}}>
            <View style={{flexDirection:"column",justifyContent:"space-evenly"}}>
                <Text style={{fontSize: ms(13),letterSpacing: s(0.36),fontWeight:'800'}}>{props.txt1}</Text>
                <Text style={{fontSize: ms(11),letterSpacing: s(0.31),color:"rgb(85,85,85)"}}>{props.txt2}</Text>
            </View>
            <View style={{flexDirection:"column",justifyContent:"space-evenly"}}>
                <Text style={{fontSize: ms(11),letterSpacing: s(0.31),color:"rgb(155,155,155)"}}>{props.txt3}</Text>
                <Text style={{fontSize: ms(10),letterSpacing: s(0.28),fontWeight:'500',color:"rgb(84,148,10)"}}>{props.txt4}</Text>
            </View>
        </View>
    )
}



const Flex = (props) =>{
    return(
              <Pressable style={styles.Stores}>
                <View>
                <ImageBackground imageStyle={{borderTopLeftRadius: ms(5),borderTopRightRadius: ms(5)}} source={props.img} style={{width: s(330),height: vs(140)}} >
                    <View style={{width: s(40),height: vs(15),backgroundColor:"rgb(84,148,10)",flexDirection:"row",alignItems:"center",justifyContent:"center",alignSelf:"flex-end",margin: ms(10)}}>
                        <Text style={{fontSize: ms(18),color:"white",fontWeight:'800'}}>*</Text>
                        <Text style={{letterSpacing: s(0.3),fontSize: ms(11),color:"white",fontWeight:'800'}}>4.5</Text>
                    </View>
                </ImageBackground>
                </View>
            <Inside txt1 = {props.txt1} txt2={props.txt2} txt3={props.txt3}  txt4={props.txt4} />
        </Pressable>
    )
}
export default Flex

const styles = StyleSheet.create({
        Stores:{
            width: s(330),
            height: vs(200),
            borderRadius: ms(5),
            shadowOffset:{width: s(3),height: vs(3)},
            shadowOpacity:0.2,
            shadowRadius: ms(1),
            shadowColor:"gray"

        }
    })
