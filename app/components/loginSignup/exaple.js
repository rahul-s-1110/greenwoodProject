import React from "react";
import { View,StyleSheet,Image,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { vs,s,ms } from "react-native-size-matters";

const Example = () =>{
    return(
        <SafeAreaView style={{margin:20}}>
            <View style={{width:'85%',flexDirection:"row",alignItems:"center",justifyContent:"space-between",height: vs(50)}}>
                <View style={{width:'30%',alignItems:"center",justifyContent:"space-between",flexDirection:"row"}}>
                    <View>
                        <Image style={{width: s(20),height: vs(10)}} source={require('../../assets/image/logoImage/path.png')} />
                    </View>
                    <View>
                        <Text>Hello</Text>
                    </View>
                </View>
                <View>
                    <Image style={{width: s(25),height: vs(25)}} source={require('../../assets/image/logoImage/mapLogo.png')}  />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(

)
export default Example