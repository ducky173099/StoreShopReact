import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Image} from 'react-native';

export default class Logo extends Component {
    render() {
      
        return (
            <View style = {styles.container}>
                <Image
                    style={{width:40, height: 40}}
                    source={require('./../assets/ski.png')}
                />
                <Text style={styles.logoText}>Welcome to ky</Text>
            </View>
          
        );
      }
    
}


const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        flexGrow: 1,
        justifyContent: 'flex-end'
    
    },
    logoText:{
        fontSize:18,
        color:'rgba(255,255,255,0.7)',
        marginVertical:18,
    }

})