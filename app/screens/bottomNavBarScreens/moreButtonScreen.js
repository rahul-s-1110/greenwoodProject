import React from "react";
import { View,Text,StyleSheet,Image,SectionList, Pressable, ScrollView } from "react-native";
import { s,vs,ms } from "react-native-size-matters";

const DATA = [
    {
        title:"ACCOUNT",
        data:[
            {
                txt:"Upadte Profile",
                num:"12"
            },
            {
                txt:"Inbox",
                num:"07"
            }
        ]
    },
    {
        title:"MY FAVOURITE",
        data:[
            {
                txt:"Business",
                num:"15"
            },
            {
                txt:"Deals",
                num:"07"
            },
            {
                txt:"Events",
                num:'05'
            },
            {
                txt:"Product",
                num:"05"
            }
        ]
    },
    {
        title:"ACCOUNT",
        data:[
            {
                txt:"Shopping Cart",
                num:"05"
            },
            {
                txt:"My Orders",
                num:"05"
            }
        ]

    }
]

// const BorderLine = (props) =>{
//   return(
//     <View style={props.style}></View>
//   )
// } 

const Seprate = () =>{
  return(
    <View style={{height: vs(2)}}></View>
  )
}
 
const RenderComp = (props) =>{
  return(
    <View style={styles.compView}>
        <Text style={styles.compFirstTxt}>{props.txt}</Text>
        <View style={styles.txtImgStyle}>
          <Text style={[styles.txtStyle,{color:props.txt=='Inbox'?"rgb(104,180,17)":"rgb(172,172,172)"}]} >{props.num}</Text>
          <Pressable >
              <Image source={require('../../assets/image/logoImage/pathAhead.png')} />
          </Pressable>
        </View>
    </View>
  )
}

const Heading = (props) =>{
  return(
    <View style={styles.headView}>
      <Text style={styles.headTxt}>{props.txt}</Text>
    </View>
  )
}
 

const MoreButton = () =>{
    return(
        <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
            <View style={styles.mainView}>
                <View style={styles.firstView}>
                    <View style={styles.secondView}>
                        <View style={styles.thirdView}>
                            <View style={styles.fourthView}>
                                <Image style={styles.img} source={require('../../assets/image/explorerImages/grootImage1.jpeg')} />
                            </View>
                        </View>
                          <View style={{alignItems:"center",marginTop: vs(150)}} >
                            <Text style={styles.innerTxt1}>John Corner</Text>
                           <Text style={{fontSize: ms(15),color:"white",letterSpacing: s(0.42)}}>51 Street,Hampshire,USA</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View>
              <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                ItemSeparatorComponent = {Seprate}
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=>(
                  <RenderComp txt={item.txt} num={item.num} />
                )}
                renderSectionHeader={({ section: { title } }) => (
                  <Heading txt={title} />
                )}
              />
            </View>
         </ScrollView> 
    )
}
const styles = StyleSheet.create({
  mainView:{
    width:'100%',
      height: s(270),
      alignItems:"center",
      position:"relative",
      flexDirection:"column",
      justifyContent:"space-between",
      backgroundColor:"rgb(23,200,132)"
  },
  firstView:{
    width: ms(220),
    height: ms(220),
    marginTop: vs(25),
    borderRadius: ms(110),
    alignItems:"center",
    justifyContent:"center",
    borderWidth: s(0.18),
    borderColor:"rgba(255,255,255,0.25)"
  },
  secondView:{
    width: ms(190),
    height: ms(190),
    borderRadius: ms(95),
    borderColor:"rgba(255,255,255,0.3)",
    alignItems:"center",
    justifyContent:"center",
    borderWidth: s(0.3)
  },
  thirdView:{
    width: ms(160),
    position:"absolute",
    flexDirection:"column",
    height: ms(160),
    borderRadius: ms(80),
    borderWidth: s(0.4),
    borderColor:"rgba(255,255,255,0.4)",
    alignItems:"center",
    justifyContent:"center"
  },
  fourthView:{
    width: ms(130),
    height: ms(130),
    borderRadius: ms(65),
    alignItems:"center",
    justifyContent:"center",
    borderWidth:1,
    borderColor:"white"
  },
  img:{
    width: ms(130),
    height: ms(130),
    borderColor:"white",
    borderWidth: s(2),
    borderRadius: ms(65)
  },
  headView:{
    height: vs(50),
    paddingTop: vs(15),
    justifyContent:"center",
    backgroundColor:"rgb(237,237,237)"
  },
  headTxt:{
    fontSize: ms(13),
    letterSpacing: s(0.36),
    color:"rgb(98,98,98)",
    marginHorizontal: s(10),
    fontFamily:"Poppins-SemiBold"
  },
  compView:{
    flexDirection:"row",
    justifyContent:"space-between",
    height: vs(35),
    alignItems:"center",
    backgroundColor:"white"
  },
  compFirstTxt:{
    fontSize: ms(13),
    color:"rgb(56,56,56)",
    letterSpacing: s(0.36),
    marginHorizontal: s(12)
  },
  innerTxt1:{
    fontSize: ms(25),
    color:"white",
    fontWeight:'500',
    letterSpacing:s(0.7)
  },
  txtStyle:{
    fontSize: ms(13),
    letterSpacing: s(0.36),
    fontFamily:"Poppins-Regular",
  },
  txtImgStyle:{
    flexDirection:"row",
    justifyContent:"space-between",
    width: s(50),
    marginHorizontal: s(12)
  }
})

export default MoreButton