import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,TouchableOpacity} from 'react-native';
import Logo from '../pages/Logo';
import Form from '../pages/Form';
import { Actions } from 'react-native-router-flux';

export default class SignInScreen extends Component {
    signup(){
        Actions.signup();
    }
    render() {
      
        return (
          <View style={styles.container}>
                <StatusBar
                    backgroundColor="#1c313a"
                    barStyle="light-content"
                />
                <Logo/>
                <Form type="Login"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.signup}>
                        <Text style={styles.signupButton}>SignUp</Text>
                    </TouchableOpacity>
                </View>
          </View>
        );
      }
    
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#455a64',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyles:{
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    signupTextCont:{
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical:16,
        flexDirection: 'row'
    },
    signupText:{
        color:'rgba(255,255,255,0.6)',
        fontSize: 16
    },
    signupButton:{
        color:'#ffffff',
        fontWeight:'500',
        fontSize:16,
        marginHorizontal:4,
    }
})