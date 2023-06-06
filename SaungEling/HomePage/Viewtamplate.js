import React from 'react';
import {View,Image,StyleSheet, SafeAreaView, Text, StatusBar, TouchableOpacity, ImageBackground} from 'react-native';
import ViewSchadule from './ViewSchadule';
import Header from './header';

const Viewtamplate = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Header/>
            </View>
            <ImageBackground source={require('../assets/Image.png')} style={styles.background}>
                <ViewSchadule/>
            </ImageBackground>
            <StatusBar style='light'/>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        flex:1.2,  
    },
    background:{
        flex:2,
    }
    
})

export default Viewtamplate;
