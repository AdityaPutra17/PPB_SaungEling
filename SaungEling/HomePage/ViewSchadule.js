import React from 'react';
import {View,Image,StyleSheet, SafeAreaView, Text, StatusBar, TouchableOpacity} from 'react-native';
import Schadule from './schadule';

const ViewSchadule = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.teks}>Schedule For Today</Text>
            <Schadule/>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin:20
    },
    teks:{
        color:'white',
        fontWeight:'bold',
        fontSize: 20,
        marginTop:16
    },
   
    
})

export default ViewSchadule;
