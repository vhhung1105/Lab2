import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable,StyleSheet,FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import EditProfile from './EditProfile';
const Profile = (props) => {
  const navigation = props.navigation;
  const route = props.route;
  const dataProfile = [...route.params.dataHome];
   
  
  const clickEdit = ()=>{
    navigation.navigate('EditProfile',{dataProfile:dataProfile});
  }
  return (
    <View style={styles.container} >
        <View style={styles.image}>
            <Image
                style={{ width: 100, height: 100 ,borderRadius:100}}
                source={{ uri: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg' }}
            />
        </View>
        <View style={styles.info}>
            <Pressable  onPress={()=>{clickEdit()}}>
               
                <FontAwesome name="edit" size={30} style={styles.text_edit} />
            </Pressable>
        </View>
        <View style={styles.FlatList}>
        <FlatList
       
        data={dataProfile}
        renderItem={({item}) => 
        <View style={styles.info}>
          
          <Text style={styles.text}>Họ và tên: {item.name}</Text>
          <Text style={styles.text}>Địa chỉ: {item.diaChi} </Text>
          <Text style={styles.text}>Số Điện thoại: {item.Sdt} </Text>
          <Text style={styles.text}>Email: {item.Email} </Text>
         
        </View>}
        keyExtractor={(item) => item.id}
      />
        </View>
       
    </View>
  );
};
const styles = StyleSheet.create({
  
  image:{
      width: '100%',
     
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
     
  },
  FlatList:{
      padding:10,
      fontSize:20,
     
  },
  text:{
    fontSize:20,
    lineHeight:35,
    fontWeight:'bold'
  },
  info:{
    marginTop:10,

  },
  text_edit:{
    textAlign: 'right',
    paddingRight:20,
    fontSize:30,
    fontWeight:'bold',
    color:'red',
  }
});

export default Profile;
