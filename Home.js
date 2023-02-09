import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
const Home = (props) => {
    const navigation = props.navigation;
    const route = props.route;
    // const dataProfile = [...route.params.newData];
    // console.log(route.params.newData)
    const dataHome = [{
        id: 1,
        name: 'Vu Huy Hung',
        diaChi: 'Ha Noi',
        Sdt: '0817658303',
        Email: 'vhhung1105@gmail.com',
        checkdata: 1
    }]

    const click = () => {
        // if(dataProfile){
        //    dataHome = [...dataProfile]
        //    navigation.navigate('Profile',{dataHome:dataHome})
        // }else{
        //   navigation.navigate('Profile',{dataHome:dataHome})
        // }

        navigation.navigate('Profile', { dataHome: dataHome });

    }
    return ( <
        View style = { styles.container } >

        <
        Button title = 'Thông tin cá nhân '
        onPress = {
            () => { click() } }

        /> <
        /View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    }
});
export default Home;