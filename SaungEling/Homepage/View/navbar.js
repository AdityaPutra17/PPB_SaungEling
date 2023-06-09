import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const ijo='#04450B'

const Navbar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={{alignItems:'center'}}>
                    <View style={styles.whitebg}>
                        <FontAwesome5 name="receipt" size={30} color={ijo} />
                    </View>
                    <Text>Package</Text>
                    <Text>Menu</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={styles.whitebg}>
                        <MaterialIcons name="restaurant-menu" size={30} color={ijo} />
                    </View>
                    <Text>Food</Text>
                    <Text>Menu</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={styles.whitebg}>
                        <FontAwesome5 name='mug-hot' size={30} color={ijo}/>
                    </View>
                    <Text>Drink</Text>
                    <Text>Menu</Text>
                </View>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    card:{
        width:320,
        height:132,
        backgroundColor :'#eeeeee',
        borderRadius:24,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row'
    },
    whitebg:{
        backgroundColor:'white',
        width:55,
        height:55,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
    }
    
})

export default Navbar;
