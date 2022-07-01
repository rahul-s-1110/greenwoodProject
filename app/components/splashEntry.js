import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";

const SplashScreen = () =>{
    return(
        <View style={styles.container} >
                <Image
                    style={styles.img}
                    source={require('../assets/image/greenwoodLogo.png')}
                />
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:0.95,
        justifyContent:"center",
        alignItems:"center"
    },
    img:{
        width:390,
        height:328
    }
})


export default SplashScreen