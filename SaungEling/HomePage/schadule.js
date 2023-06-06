import React from 'react';
import {View,Image,StyleSheet, SafeAreaView, Text, StatusBar, TouchableOpacity} from 'react-native';

const Schadule = () => {
    return (  
        <View style={styles.rectangle}>
            <Text style={{fontWeight:'bold'}}>08.00</Text>
            <View style={{justifyContent:'center'}}>
                <Text>Nama Pelanggan</Text>
                <Text>Kegiatan</Text>
            </View>
        </View> 
    );
}

const styles = StyleSheet.create({
    
    rectangle:{
        width:320,
        height:64,
        backgroundColor:'white',
        marginTop:16,
        borderRadius:16,
        padding:20,
        justifyContent:'space-around',
        flexDirection:'row'
    }
   
    
})

export default Schadule;
