import React, { useState } from "react";
import { View,Text,StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EventBar } from "../components/component";
import ScreensTopScrollBtn from "../components/screensScrollBtn";
import Flex from "../navigation/components/flex/storesBigFlax";
import { storeBarData } from "../screens/data/dataStorage";
import { vs,s,ms } from "react-native-size-matters";

const Store = () =>{
const [showBar,setShowBar] = useState(false)

    const RenderItem = (item) =>{
        return(
            <Flex 
                img = {item.item.img}
                txt1 = {item.item.gymName}
                txt2 = {item.item.type}
                txt3 = {item.item.distance}
                txt4 = {item.item.offers}
            />
        )
    }

const Seprate = () =>{
    return(
        <View style={{width:'100%',height: vs(8)}}></View>
    )
}

    return(
        <SafeAreaView style={{marginLeft: s(10)}}>
            <EventBar searchShow={showBar} im = {require('../assets/image/logoImage/path.png')}  txt={"Stores"} img={require('../assets/image/logoImage/mapLogo.png')} />
            <ScreensTopScrollBtn />
            <FlatList 
            data={storeBarData}
            renderItem={RenderItem}
            ItemSeparatorComponent={Seprate}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

})

export default Store