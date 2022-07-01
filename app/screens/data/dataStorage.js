import React from "react";
import { View,Text, FlatList } from "react-native";

 export const Productdata = [
    {
        img :require('../../assets/image/explorerImages/grootImage1.jpeg'),
        byfrom:"By woodsworth",
        name:"Roager Solid Wood One Seater Sofa",
        price:"$199.50",
        originalPrice:"$500",
        savings:"Save $301(68% off)"
    },
    {
        img :require('../../assets/image/explorerImages/grootImage1.jpeg'),
        byfrom:"By woodsworth",
        name:"Roager Solid Wood One Seater Sofa",
        price:"$199.50",
        originalPrice:"$500",
        savings:"Save $301(68% off)"
    },
    {
        img :require('../../assets/image/explorerImages/grootImage1.jpeg'),
        byfrom:"By woodsworth",
        name:"Roager Solid Wood One Seater Sofa",
        price:"$199.50",
        originalPrice:"$500",
        savings:"Save $301(68% off)"
    }
]

export const LocalDealData = [
    {
        img :require('../../assets/image/explorerImages/grootImage1.jpeg'),
        gymName:"GOLD'S GYM",
        offerExpierDate:"15 Jun 2021",
        offerPercnet:"15% OFF on Cardio & Yoga",
        plan:"on Yearly Subscripation"
    },
    {
        img :require('../../assets/image/explorerImages/grootImage1.jpeg'),
        gymName:"GOLD'S GYM",
        offerExpierDate:"15 Jun 2021",
        offerPercnet:"15% OFF on Cardio & Yoga",
        plan:"on Yearly Subscripation"
    },
    {
        img :require('../../assets/image/explorerImages/grootImage1.jpeg'),
        gymName:"GOLD'S GYM",
        offerExpierDate:"15 Jun 2021",
        offerPercnet:"15% OFF on Cardio & Yoga",
        plan:"on Yearly Subscripation"
    }
]

export const Dealdata = [
    {
        img:require('../../assets/image/explorerImages/grootImage1.jpeg'),
        txt1:"Flat 25% OFF on Freelentics",
        txt2:"New Members only",
        txt3:"GOLD'S GYM",
        txt4:"Exp. 15 Jun 2020"
    },
    {
        img:require('../../assets/image/explorerImages/grootImage1.jpeg'),
        txt1:"Flat 25% OFF on Freelentics",
        txt2:"New Members only",
        txt3:"GOLD'S GYM",
        txt4:"Exp. 15 Jun 2020"
    },
    {
        img:require('../../assets/image/explorerImages/grootImage1.jpeg'),
        txt1:"Flat 25% OFF on Freelentics",
        txt2:"New Members only",
        txt3:"GOLD'S GYM",
        txt4:"Exp. 15 Jun 2020"
    },
    {
        img:require('../../assets/image/explorerImages/grootImage1.jpeg'),
        txt1:"Flat 25% OFF on Freelentics",
        txt2:"New Members only",
        txt3:"GOLD'S GYM",
        txt4:"Exp. 15 Jun 2020"
    },
    {
        img:require('../../assets/image/explorerImages/grootImage1.jpeg'),
        txt1:"Flat 25% OFF on Freelentics",
        txt2:"New Members only",
        txt3:"GOLD'S GYM",
        txt4:"Exp. 15 Jun 2020"
    },
    {
        img:require('../../assets/image/explorerImages/grootImage1.jpeg'),
        txt1:"Flat 25% OFF on Freelentics",
        txt2:"New Members only",
        txt3:"GOLD'S GYM",
        txt4:"Exp. 15 Jun 2020"
    },
]

export  const storeBarData = [
        {
            img:require('../../assets/image/explorerImages/grootImage1.jpeg'),
            gymName:"Gold's gym",
            type:"Fitness & training",
            distance:"3.7 KM",
            offers:"3 OFFERS"
        },
        {
            img:require('../../assets/image/explorerImages/grootImage1.jpeg'),
            gymName:"Gold's gym",
            type:"Fitness & training",
            distance:"3.7 KM",
            offers:"3 OFFERS"
        },
        {
            img:require('../../assets/image/explorerImages/grootImage1.jpeg'),
            gymName:"Gold's gym",
            type:"Fitness & training",
            distance:"3.7 KM",
            offers:"3 OFFERS"
        },
        {
            img:require('../../assets/image/explorerImages/grootImage1.jpeg'),
            gymName:"Gold's gym",
            type:"Fitness & training",
            distance:"3.7 KM",
            offers:"3 OFFERS"
        }
    ]

    export const EventBarData =[
        {
            img:require('../../assets/image/explorerImages/grootImage1.jpeg'),
            txt1:"LOVE + PROPAGANDA SATURDAY'S(seriesgrp)",
            txt2:"Davies Symphony Hall, San Francisco,CA",
            txt3:"Start's at $809.10"
        },
        {
            img:require('../../assets/image/explorerImages/grootImage1.jpeg'),
            txt1:"LOVE + PROPAGANDA SATURDAY'S(seriesgrp)",
            txt2:"Davies Symphony Hall, San Francisco,CA",
            txt3:"Start's at $809.10"
        },
        {
            img:require('../../assets/image/explorerImages/grootImage1.jpeg'),
            txt1:"LOVE + PROPAGANDA SATURDAY'S(seriesgrp)",
            txt2:"Davies Symphony Hall, San Francisco,CA",
            txt3:"Start's at $809.10"
        },
        {
            img:require('../../assets/image/explorerImages/grootImage1.jpeg'),
            txt1:"LOVE + PROPAGANDA SATURDAY'S(seriesgrp)",
            txt2:"Davies Symphony Hall, San Francisco,CA",
            txt3:"Start's at $809.10"
        },
    ]


const Product = (props) =>{
    return(
        <Pressable style={{width:320,height:210,borderRadius:3,backgroundColor:"white",marginBottom:20,borderRadius:5}}>
            <ImageBackground source={props.img} style={{width:320,height:140,flexDirection:"column-reverse"}} >
                    <View style={{margin:6,width:100,backgroundColor:"rgba(10,10,10,0.63)"}}>
                        <Text style={{color:"white",fontSize:13}}>{props.from}</Text>
                    </View>
            </ImageBackground>
            <View style={{width:320,height:70,flexDirection:"column",justifyContent:"space-around",padding:10}}>
                <View>
                    <Text style={{fontSize:13,letterSpacing:0.31}}>{props.name}</Text>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row",width:100,alignItems:"center",justifyContent:"space-between"}}>
                        <View>
                            <Text style={{fontSize:17,letterSpacing:0.41,color:"rgb(76,133,10)"}}>{props.price}</Text>
                        </View>
                        <View > 
                            <Text style={{fontSize:11,letterSpacing:0.27}}>{props.originalPrice}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{letterSpacing:0.27,fontSize:11}} >{props.savings}</Text>
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
            savings={item.img.savings}
        />
    )
}


const ProductData = (props) =>{

    return(
        <View>
            <FlatList 
            data={ProductData}
            renderItem={RanderItem}
            />
        </View>
    )
}