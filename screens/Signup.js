import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,TouchableOpacity} from 'react-native';
import Logo from '../pages/Logo';
import Form from '../pages/Form';
import { Actions } from 'react-native-router-flux';

export default class SignUpScreen extends Component {
    goBack(){
        Actions.pop();
    }
    render() {
      
        return (
          <View style={styles.container}>
                <StatusBar
                    backgroundColor="#1c313a"
                    barStyle="light-content"
                />
                <Logo/>
                <Form type="Sign up"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account?</Text>
                    <TouchableOpacity onPress={this.goBack}>
                        <Text style={styles.signupButton}>SignIn</Text>
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