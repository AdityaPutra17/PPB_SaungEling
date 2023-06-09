import React from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import Searchbar from './View/searchbar';
import Logo from './View/logo';
import Navbar from './View/navbar';
import Content from './View/content';

const Homeview = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo}>
                <Logo/>
            </View>
            <View style={styles.searchbar}>
                <Searchbar/>
            </View>
            <View style={styles.navbar}>
                <Navbar/>
            </View>
            <View style={styles.content}>
                <Content/>
            </View>
            <StatusBar/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        marginTop:10
    },
    logo:{
        flex:1,
        
    },
    searchbar:{
        flex:0.3,
    },
    navbar:{
        flex:1,
    },
    content:{
        flex:2,
    }

})

export default Homeview;
