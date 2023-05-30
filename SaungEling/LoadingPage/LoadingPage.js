import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const LoadingPage = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/Logo.JPG')} />
        </View>
    );

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#044500 ',
        },
        image: {
          width: 200,
          height: 200,
        },
      });
}

export default LoadingPage;
