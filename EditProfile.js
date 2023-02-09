import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable,StyleSheet, Button,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
const EditProfile =(props)=>{
    const navigation = props.navigation;
    const route = props.route;
    const [name,setName] = useState()
    const [diaChi,setDiachi] = useState('')
    const [editId,setEditID] = useState(1)
    const [sdt,setSdt] = useState('')
    const [email,setEmail] = useState('')
    
    const data = [...route.params.dataProfile];
    
    const [dataInfo,setDataInfo]= useState(data);
    
    const  onLoad = ()=>{
        dataInfo.forEach(item => {
            if(item.id == editId){
                setName(item.name);
                setDiachi(item.diaChi);
                setSdt(item.Sdt);
                setEmail(item.Email);
            }
       });
    }
    const onSave = ()=>{
        const newData = [...dataInfo];
        for(var i=0;i<newData.length;i++){
            if(newData[i].id == editId){
                newData[i].name = name;
                newData[i].diaChi = diaChi;
                newData[i].Sdt = sdt;
                newData[i].Email = email;
                newData[i].checkdata = 2
            }else{
                console.log("Error")
            }
           
         }
        //  console.log(newData);
         navigation.navigate('Home',{newData:newData})
    }
    return (
        <View style={styles.Input_text} onLayout={()=>onLoad()}>
              <TextInput
                style={styles.textInput}
                placeholder='Họ Và tên'
                onChangeText={(text)=>setName(text)}
                value={name}

              />
              
              <TextInput
                style={styles.textInput}
                placeholder='Địa chỉ'
                onChangeText={(text)=>setDiachi(text)}
                value={diaChi}

              />
              <TextInput
                style={styles.textInput}
                placeholder='Số điện thoại'
                onChangeText={(text)=>setSdt(text)}
                value={sdt}
              />
              <TextInput
                style={styles.textInput}
                placeholder='Email'
                onChangeText={(text)=>setEmail(text)}
                value={email}
              />
              
              <View  style={styles.Button_add_2}>
                      <View  style={styles.huy}>
                        <Button  title='Hủy'
                          
                        />
                      </View>
                      <View  style={styles.huy}>
                        <Button title='Lưu'
                          onPress={onSave}
                        />
                      </View>
                
              </View>
          </View>
   );
}
const styles = StyleSheet.create({
    textInput:{
        borderWidth: 1,
        padding:7,
        borderRadius:5,
        marginTop: 10
      },
      Button_add_2:{
        position:'absolute',
        flexDirection: 'row',
        right: 0,
        bottom:-50
      },
      huy:{
        width:80,
        marginLeft:10
      },
      Input_text:{
        marginTop:20,
        position:"relative",
        marginBottom:45,
        padding:15
      },
})
export default EditProfile;