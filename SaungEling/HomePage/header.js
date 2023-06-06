import React from 'react';
import {View,Image,StyleSheet, SafeAreaView, Text, StatusBar, TouchableOpacity} from 'react-native';

const Header = () => {
    return (  
        <View style={styles.container}>
            <View style={styles.first}>
                <TouchableOpacity>
                    <Image source={require('../assets/logo.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.notif}>
                        <Image source={require('../assets/Group11.png')}/>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.second}>
                <View style={{alignItems:'center'}}>
                    <View style={styles.package}>
                        <Image source={require('../assets/Vector.png')} style={{height:32, width:32}}/>
                    </View>
                    <Text>Package</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={styles.package}>
                        <Image source={require('../assets/Vector-1.png')} style={{height:32, width:32}}/>
                    </View>
                    <Text>Food</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={styles.package}>
                        <Image source={require('../assets/Group3.png')} style={{height:32, width:32}}/>
                    </View>
                    <Text>Hotel</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={styles.package}>
                        <Image source={require('../assets/Vector-2.png')} style={{height:32, width:32}}/>
                    </View>
                    <Text>Destination</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    first:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:30
    },
    notif:{
        width:40,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ebebeb',
        borderRadius:30
    },
    second:{
        flex:1,
        marginHorizontal:30,
        flexDirection:'row',
        
    },
    package:{
        borderWidth:1,
        width: 52,
        height:52,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderColor:'#ebebeb',
        marginHorizontal:12
    }
})

export default Header;
