import React, { useState } from "react";
import { TextInput, View,Text,StyleSheet,Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { vs,s,ms } from "react-native-size-matters";

const Calculator = () =>{
const [Data,setData] = useState('');
const [Result,setResult] = useState('');


const Button = (props) =>{
    return(
        <Pressable  onPress={props.onPress} style={{width: s(50),height: vs(50),borderRadius: ms(5),backgroundColor:"lightblue",justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize: ms(17)}}>{props.txt}</Text>
        </Pressable>
    )
}

const getValue = (txt) =>{
    let data = Data;
    let lastChar = data.charAt(data.length-1)
    data = data.toString();
    let a = txt;
    a = a.toString();

    if(a == '+' || a == '-' || a == '*' || a == '÷' ){
        if(lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar =='÷'){
        }else{
            calaculateValue(a)
        } 
    }else{
        currData = data.concat(a);
        setData(currData)
    }
}

const clearValue = () =>{
   setData('');
   setResult('');
}

const equal = () =>{
        let a = Data;
        add = a.split('+');
        sub = a.split('-');
        mul = a.split('*');
        devide = a.split('÷');
        if(add.length==2){
            add = parseInt(add[0]) + parseInt(add[1]);
            add = Math.abs(add);
            add= add.toString();
            setResult(add);
            setData(add);
        }
        if(sub.length==2){
            sub = parseInt(sub[0]) - parseInt(sub[1]);
            sub = Math.abs(sub); 
            sub= sub.toString();
            setResult(sub);
            setData(sub);
        }
        if(mul.length==2){
            mul = parseInt(mul[0]) * parseInt(mul[1]);
            mul = Math.abs(mul);
            mul= mul.toString();
            setResult(mul);
            setData(mul);
        }
        if(devide.length==2){
            devide = parseInt(devide[0]) / parseInt(devide[1]);
            devide = Math.abs(devide);
            devide= devide.toString();
            setResult(devide);
            setData(devide);
        }
}

const calaculateValue = (props) =>{
    b,a = b.toString();
    if(b.includes('+') || b.includes('-') || b.includes('*') || b.includes('÷')){
        add = a.split('+');
        sub = a.split('-');
        mul = a.split('*');
        devide = a.split('÷');

        if(add.length==2){
            add = parseInt(add[0]) + parseInt(add[1]);
            add = Math.abs(add);
            add= add.toString();
            setResult(add);
            add = add.concat(props);
            setData(add);
        }
        else if(sub.length==2){
            sub = parseInt(sub[0]) - parseInt(sub[1]);
            sub= Math.abs(sub);
            sub = sub.toString();
            setResult(sub);
            sub = sub.concat(props);
            setData(sub);
        }
        else if(mul.length==2){
            mul = parseInt(mul[0]) * parseInt(mul[1]);
            mul = Math.abs(mul);
            mul= mul.toString();
            setResult(mul);
            mul = mul.concat(props);
            setData(mul);            
        }
        else if(devide.length==2){
            devide = parseInt(devide[0]) / parseInt(devide[1]);
            devide = Math.abs(devide);
            devide= devide.toString();
            setResult(devide);
            devide = devide.concat(props);
            setData(devide);
        }
    }
    else{ 
            b = b .concat(props);
            setData(b);
    }
}


    return(
        <SafeAreaView style={{alignItems:"center",flex:1,justifyContent:"center"}}>
            <View style={{width: s(350),flexDirection:"column",height: vs(450),backgroundColor:"lightblue"}}>
                <View style={{flexDirection:"column",width: s(350),height: vs(100),backgroundColor:"skyblue"}}>
                    <View >
                        <TextInput value={Data}  />
                    </View>
                    <View >
                        <Text>{Result}</Text>
                    </View>
                </View>
                <View style={{width: s(350),flexDirection:"column",justifyContent:"space-around",height: vs(330),backgroundColor:"white"}}>
                    <View style={styles.innerConatiner}>
                        <Button onPress={()=>getValue('1')} txt={1} />
                        <Button onPress={()=>getValue('2')} txt={2} />
                        <Button onPress={()=>getValue('3')} txt={3}/>
                        <Button onPress={()=>getValue('+')} txt={'+'}/>
                    </View>
                    <View style={styles.innerConatiner}>
                        <Button onPress={()=>getValue('4')} txt={4}/>
                        <Button onPress={()=>getValue('5')} txt={5}/>
                        <Button onPress={()=>getValue('6')} txt={6}/>
                        <Button onPress={()=>getValue('-')} txt={'-'}/>
                    </View>
                    <View style={styles.innerConatiner}>
                        <Button onPress={()=>getValue('7')} txt={7}/>
                        <Button onPress={()=>getValue('8')} txt={8}/>
                        <Button onPress={()=>getValue('9')} txt={9}/>
                        <Button onPress={()=>getValue('*')} txt={'*'}/>
                    </View>
                    <View style={styles.innerConatiner}>
                        <Button onPress={()=>getValue('0')} txt={0}/>
                        <Button onPress={()=>clearValue()} txt={'ClR'}/>
                        <Button onPress={()=>equal()} txt={'='}/>
                        <Button onPress={()=>getValue('÷')} txt={'÷'}/>
                    </View> 
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    innerConatiner:{
        width: s(350),
        height: vs(50),
        flexDirection:"row",
        justifyContent:"space-around"
    }
})
export default Calculator