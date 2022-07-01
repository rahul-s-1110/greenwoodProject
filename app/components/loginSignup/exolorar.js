import React, { useState } from "react";
import { View,Text,StyleSheet, SafeAreaView, Pressable,Image, Alert, FlatList, ScrollView, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { EventBar } from "../component";
import { EventLogoBox } from "../component";
import { storeBarData,EventBarData,Productdata,LocalDealData } from "../../screens/data/dataStorage";
import { LocalDeals } from "../Boxes/localDealBox";
import { Product } from "../Boxes/productBox";
import { ItemSepratorBar } from "../component";
import { EventBox } from "../Boxes/eventBox";
import { Stores } from "../Boxes/storeSmallBox";
import { s,vs,ms } from "react-native-size-matters";

const Data = [
    {
        icon:require('../../assets/image/logoImage/diningLogo.png'),
        title:"Dining",
        bgColor:"rgb(255,113,129)",
        flag:"true"
    },
    {
        iconFirst:require('../../assets/image/logoImage/entertenmentLogo.png'), 
        titleFirst:"Entertenment",
        bgColorFirst:"rgb(25,209,145)",
        iconSecond:require('../../assets/image/logoImage/techLogo.png'),
        titleSecond:"Technology",
        bgColorSecond:"rgb(254,122,68)",
        flag:"false"
    },
    {
        iconFirst:require('../../assets/image/logoImage/medical.png'),
        titleFirst:"Medical",
        bgColorFirst:"rgb(80,201,222)",
        iconSecond:require('../../assets/image/logoImage/teethLogo.png'),
        titleSecond:"Dental",
        bgColorSecond:"rgb(243,177,99)",
        flag:"false"
    },
    {
        iconFirst:require('../../assets/image/logoImage/entertenmentLogo.png'),
        titleFirst:"Entertenment",
        bgColorFirst:"rgb(25,209,145)",
        iconSecond:require('../../assets/image/logoImage/techLogo.png'),
        titleSecond:"Technology",
        bgColorSecond:"rgb(254,122,68)",
        flag:"false"
    },
    {
        iconFirst:require('../../assets/image/logoImage/medical.png'),
        titleFirst:"Medical",
        bgColorFirst:"rgb(80,201,222)",
        iconSecond:require('../../assets/image/logoImage/teethLogo.png'),
        titleSecond:"Dental",
        bgColorSecond:"rgb(243,177,99)",
        flag:"false"
    },
]

const Data1 = [
    {
        icon:require('../../assets/image/logoImage/diningLogo.png'),
        title:"Dining",
        bgColor:"rgb(255,113,129)",
        flag:"true"
    },
    {
        icon:require('../../assets/image/logoImage/entertenmentLogo.png'),
        title:"Entertenment",
        bgColor:"rgb(25,209,145)",
        flag:"false"
    },
    {
        icon:require('../../assets/image/logoImage/techLogo.png'),
        title:"Technology",
        bgColor:"rgb(254,122,68)",
        flag:"false"
    },
    {
        icon:require('../../assets/image/logoImage/medical.png'),
        title:"Medical",
        bgColor:"rgb(80,201,222)",
        flag:"false"
    },
    {
        icon:require('../../assets/image/logoImage/teethLogo.png'),
        title:"Dental",
        bgColor:"rgb(243,177,99)",
        flag:"false"
    },
]

const LogoBox1 = (props) =>{
    return(
        <View style={[styles.dinigLogo,{color:props.bgcolor}]} >
            <View>
                <Image style={{width: s(54),height: vs(48)}} source={props.icon}/>
                <Text style={{color:"white",fontSize: ms(15),fontWeight:'700'}}>{props.title}</Text>
            </View>
        </View>
    )
}

 const Mylogo = (props) =>{
    return(
        <View style={styles.logoStyle}>
            <EventLogoBox logo ={styles.logoSize}  icon={props.iconFirst} logoColor={props.bgColorFirst} logotxt ={props.titleFirst} />
            <EventLogoBox logo={styles.logoSize} icon={props.iconSecond} logoColor={props.bgColorSecond} logotxt={props.titleSecond} />
        </View>
    )
}

const ExplorarScreen = ({navigation,route}) =>{
const [showBar,setShowBar] = useState(false);

const SeprateData = () => <View style={{width: s(20),height:vs(120)}} />

const renderItem = (item) =>{
    return(
        <EventBox 
        img = {item.item.img}
        txt1 = {item.item.txt1}
        txt2 = {item.item.txt2}
        txt3 = {item.item.txt3}
        />
    )
}

const storeData = (item) =>{
    return(
        <Stores 
        img = {item.item.img}
        txt1 = {item.item.gymName}
        txt2 = {item.item.type}
        txt3 = {item.item.distance}
        txt4 = {item.item.offers}
        />
    )
}

const localDealData = (item) =>{
    return(
        <LocalDeals
        img = {item.item.img}
        gymName = {item.item.gymName}
        limitDate = {item.item.offerExpierDate}
        percent = {item.item.offerPercnet}
        duration = {item.item.plan}
        />
    )
}

const productData = (item) =>{
    return(
        <Product 
            img ={item.item.img}
            from ={item.item.byfrom}
            name ={item.item.name}
            price = {item.item.price}
            originalPrice = {item.item.originalPrice}
            savings={item.item.savings}
        />
    )
}

const ExplorScreen = (item) =>{
    if(item.item.flag == 'true'){
        return(
            <LogoBox1 
            icon ={item.item.icon}
            title = {item.item.title}
            bgcolor = {item.item.bgColor}
            /> 
        )
    }
    else{
        return(
            <Mylogo 
            iconFirst = {item.item.iconFirst}
            iconSecond = {item.item.iconSecond}
            titleFirst = {item.item.titleFirst}
            titleSecond = {item.item.titleSecond}
            bgColorFirst = {item.item.bgColorFirst}
            bgColorSecond = {item.item.bgColorSecond}
            />
        )
    }
} 

const clicked = () =>{
    setShowBar(!showBar)
}

    return(
        <SafeAreaView style={{flex:1}} >
            <ScrollView style={{marginLeft:10}} showsVerticalScrollIndicator={false}>
            <EventBar txt={'Explorer'} searchShow={showBar} onPress={clicked} img={require('../../assets/image/logoImage/searchLogo.png')} />
                    <FlatList 
                    data={Data}
                    horizontal
                    renderItem = {ExplorScreen}
                    />
                <ItemSepratorBar  onPress={()=>navigation.navigate('SignupScreen')}  txt={'Events'}/>
                    <FlatList 
                    data={EventBarData}
                    ItemSeparatorComponent={SeprateData}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem = {renderItem}
                    />
                <ItemSepratorBar onPress={navigation.navigate('store')} txt={'Nearby Stores'} />
                    <FlatList 
                    data={storeBarData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={SeprateData}
                    renderItem ={storeData}
                    />
                <ItemSepratorBar txt={'Local Deals'} />
                    <FlatList
                    data={LocalDealData}
                    renderItem={localDealData}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    ItemSeparatorComponent={SeprateData}
                    />
                <ItemSepratorBar txt="Latest Products" />
                    <FlatList 
                    data={Productdata}
                    renderItem={productData}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    ItemSeparatorComponent={SeprateData}
                    />
                </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    dinigLogo:{
        width: s(145),
        height:vs(145),
        borderRadius: ms(3),
        backgroundColor:"rgb(255,113,129)",
        alignItems:"center",
        justifyContent:"center"
    },
    logoStyle:{
        width: s(145),
        height: vs(145),
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center"
    },
    logoSize:{
        width: s(129),
        height:vs(65),
        marginLeft: s(10),
        alignItems:"center",
        justifyContent:"center",
        borderRadius: ms(3)
    },
    imgstyle:{
        width: s(54),
        height: vs(48)
    },
})
export default ExplorarScreen