import React from "react";
import { View,Text,StyleSheet, ImageBackground, Pressable,Image, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AboutBusiness from "../../components/contects/aboutBusiness";
import ContectWindow from "../../components/contects/contectWindow";
import { vs,s,ms } from "react-native-size-matters";
import GymOffers from "../../components/gymComponent/gymOffers";
import { LocalDealData } from "../data/dataStorage";

export const TxtOnImage = () =>{
    return(
        <ImageBackground style={styles.img} source={require('../../assets/image/ScreenImages/gymImage.jpeg')} >
            <View style={styles.imgView}>
                <Pressable style={styles.txt}>
                    <Image source={require('../../assets/image/logoImage/arrow.png')}  style={{width:s(25),height: vs(10)}} />
                </Pressable>
                <Pressable style={styles.txt}>
                    <Image style={{width: s(25),height: vs(20)}} source={require('../../assets/image/logoImage/whiteHeartShape.png')} />
                </Pressable>
            </View>
            <View>
                <Image style={styles.imgViewLogo}  source={require('../../assets/image/logoImage/gymLogo.png')} />
            </View>
        </ImageBackground>
    )
}

export const HeadingView = (props) =><Text style={{marginVertical:20}}>{props.txt}</Text>

export const SeprateData = () => <View style={{width:'100%',height:15}} />

const data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit porta sem, bibendum interdum lectus pretium sit amet. Praesent eleifend et nulla dictum fringilla. Etiam eget nisi interdum, sagittis orci nec, dictum eros. Donec luctus elit sed mi ultricies venenatis quis condimentum turpis. '


const BusinessDetails = () =>{

const renderItem = (item) =>{
    return(
        <GymOffers 
        discount={item.item.offerPercnet}
        plan={item.item.plan}
        planDate={item.item.offerExpierDate}
        />
    )
}

    return(
        <SafeAreaView contentContainerStyle={styles.container}  >
            <ScrollView showsVerticalScrollIndicator={false}>            
                <View style={{width:'100%'}}>
                    <TxtOnImage/>
                    <AboutBusiness/>
                    <ContectWindow />
                </View>
                <View style={styles.businessBottomView}>
                    <View style={{width:'95%'}}>
                        <HeadingView txt={"Today's Offers & Discount"} />
                        <FlatList 
                        data={LocalDealData}
                        ItemSeparatorComponent={SeprateData}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderItem}
                        />
                        <HeadingView txt="About Gold's Gym" />
                        <Text style={styles.businessBottomViewHeadTxt}>{data}</Text>
                        <HeadingView txt="Our Offering" />
                        <View style={styles.bottomView1}>
                            <View style={styles.bottomInsideView1}>
                                <ImageBackground imageStyle={styles.OfferingImg} style={styles.bottomViewImg} source={require('../../assets/image/ScreenImages/yogaimg.jpeg')} >
                                    <Text style={styles.bottomViewTxt}>Hello</Text>
                                </ImageBackground>
                            </View>
                            <View style={styles.bottomInsideView2}>
                                <ImageBackground imageStyle={styles.OfferingImg} style={styles.bottomViewImg} source={require('../../assets/image/ScreenImages/yogaimg.jpeg')} >
                                    <Text style={styles.bottomViewTxt}>Hello</Text>
                                </ImageBackground>
                            </View>
                        </View>
                    </View>
                </View>       
            </ScrollView>
        </SafeAreaView>
    )
}

// shadowOffset:{width:170,height:100,},shadowOpacity:0.8,shadowRadius:5,shadowColor:'rgba(122,122,122,0.27)'

// shadowOffset:{width: s(1),height: vs(1)},
        // shadowOpacity:0.8,
        // shadowRadius: ms(4),
        // shadowColor:"gray",

const styles = StyleSheet.create({
container:{
    alignItems:"center",
    flex:1,
    },
img:{
    width:'100%',
    height: vs(230),
    backgroundColor:"lightblue",
    flexDirection:"column",
    justifyContent:"space-between",
    paddingVertical: vs(20)
},
txt:{
    marginHorizontal: s(20)
},
imgView:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
},
businessBottomView:{
    width:'100%',
    alignItems:"center",
    backgroundColor:"rgb(255,255,255)"
},
businessBottomViewHeadTxt:{
    fontSize:10,
    color:'rgb(79,79,79)',
    letterSpacing:0.28
},
bottomView1:{
    flexDirection:"row",
    marginBottom:5,
    justifyContent:"space-between"
},
bottomInsideView1:{
    width:170,
    borderRadius:5,
    height:100
},
bottomInsideView2:{
    width:170,
    borderRadius:5,
    height:100
},
bottomViewImg:{
    alignItems:"center",
    justifyContent:"center",
    height:100
},
bottomViewTxt:{
    color:"rgb(255,255,255)",
    fontSize:13,
    letterSpacing:0.36
},
OfferingImg:{
    width:170,
    height:100,
    borderRadius:5
},
imgViewLogo:{
    width: s(70),
    height: vs(70),
    borderRadius: ms(4),
    marginHorizontal: s(20)
}

})
export default BusinessDetails