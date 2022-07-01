import React,{useState} from "react";
import { View,Text,Image, FlatList,StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EventBar } from "../../components/component";
import ScreensTopScrollBtn from "../../components/screensScrollBtn";
import { Dealdata } from "../data/dataStorage";
import { ms,s,vs } from "react-native-size-matters";

const Component = (props) =>{
    return(
        <View style={styles.container}>
            <View style={{width:'25%',height: vs(90)}}>
                <Image style={{width: s(100),height: vs(90)}} source={props.img}/>
            </View>
            <View style={styles.componentTxtView}>
                <View>
                    <Text style={styles.componentTxt1}>{props.txt1}</Text>
                    <Text style={styles.componentTxt2}>{props.txt2}</Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <View>
                        <Text style={styles.componentTxt3}>{props.txt3}</Text>
                    </View>
                    <View>
                        <Text style={styles.componentTxt4}>{props.txt4}</Text>
                    </View>
                </View>
            </View>
        </View>
    )  
} 

const DealScreen = () =>{
const [showBar,setShowBar] = useState(false)

// const clicked = () =>{
//     setShowBar(!showBar)
// }

const RenderItem = (item) =>{
    return(
       <Component 
       img={item.item.img}
       txt1= {item.item.txt1}
       txt2 ={item.item.txt2}
       txt3={item.item.txt3}
       txt4 = {item.item.txt4}
       />
    )
}

const Header = () =>{
    return(
        <View>
            <EventBar txt={'Nearby Deals'} searchShow={showBar}  img={require('../../assets/image/logoImage/mapLogo.png')} />
            <ScreensTopScrollBtn />
        </View>
        
    )
}

const Seprate = () => <View style={{width:'100%',height: vs(12)}} />

    return(
        <SafeAreaView style={{flex:1}}  edges={['top', 'left', 'right']}>
                <View style={{marginHorizontal:s(10)}}>
                    <FlatList 
                    data={Dealdata}
                    ListHeaderComponent ={Header}
                    renderItem={RenderItem}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={Seprate}
                    />
           </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        width:'96%',
        height: vs(90),
        flexDirection:"row",
        backgroundColor:"white",
        shadowOffset:{width: s(1),height: vs(1)},
        shadowOpacity:0.2,
        shadowRadius: ms(1),
        shadowColor:"gray",
    },
    componentTxtView:{
        width:"70%",
        flexDirection:"column",
        padding: ms(15),
        marginHorizontal:s(10),
        justifyContent:"space-around",
        height: vs(90)
    },
    componentTxt3:{
        fontSize: ms(10),
        letterSpacing: s(0.28),
        fontWeight:'bold'
        ,color:"rgb(25,209,145)"
    },
    componentTxt4:{
        fontSize: ms(11),
        letterSpacing: s(0.31),
        color:"rgb(94,94,94)"
    },
    componentTxt1:{
        fontSize: ms(13),
        fontWeight:'bold',
        letterSpacing: s(0.36)
    },
    componentTxt2:{
        fontSize: ms(11),
        letterSpacing: s(0.36),
        marginTop: vs(5)
    }
})

export default DealScreen