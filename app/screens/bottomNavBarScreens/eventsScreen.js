import React, { useState } from "react";
import { View,Text, FlatList,Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EventBar,ABC } from "../../components/component";
import ScreensTopScrollBtn from "../../components/screensScrollBtn";
import { EventBarData } from "../data/dataStorage";
import { s,vs } from "react-native-size-matters";

const Events = () =>{
const [showBar,setShowBar] = useState(false)

    const RanderItem = (item) =>{
        return(
            <ABC
            img={item.item.img}
            txt1={item.item.txt1}
            txt2={item.item.txt2}
            txt3={item.item.txt3}
            /> 
        )
    }

const SeprateData = () =><View style={{width:'100%',height: vs(15)}} />


const Heading = () =>{
    return(
        <View>
            <EventBar txt={'Events'} searchShow={showBar}  img={require('../../assets/image/logoImage/mapLogo.png')} />
            <ScreensTopScrollBtn />
        </View>
    )
}


    return(
        <SafeAreaView style={{flex:1,}} edges={['top', 'left', 'right']}>
            <View style={{marginHorizontal: s(10)}}>
            <FlatList 
                    data={EventBarData}
                    ListHeaderComponent ={Heading}
                    showsVerticalScrollIndicator={false}
                    renderItem={RanderItem}
                    ItemSeparatorComponent={SeprateData}
                    /> 
            </View>
        </SafeAreaView>
    )
}
export default Events