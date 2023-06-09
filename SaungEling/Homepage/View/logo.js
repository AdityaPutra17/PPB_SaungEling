import React from 'react';
import {View, Text,StyleSheet, Image, TouchableOpacity} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
const ijo='#04450B'

const Logo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.atas}>
                <Image source={require('../../assets/logo.png')}/>
                <TouchableOpacity style={styles.bgprofile}>
                    <FontAwesome5 name="user-alt" size={24} color={ijo} />
                </TouchableOpacity>
            </View>
            <Text style={{fontSize:32, fontWeight:'bold', color:ijo, marginTop:10}}>Hi, Elingers</Text>
            <Text style={{color:ijo, fontSize:16}}>Jelajahi Rasa dan Pesan Sekarang</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    atas:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    bgprofile:{
        width:44,
        height:44,
        backgroundColor:'#eeeeee',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        marginTop:8, marginRight:8
    },
})

export default Logo;
