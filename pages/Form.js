import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Platform, AsyncStorage} from 'react-native';
import Logo from '../pages/Logo';
import { Actions } from 'react-native-router-flux';

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password: ''
        }
    }

    saveData = async() =>{
        const {email,password} = this.state;
        //save data with asyncstorage

        let loginDetails ={
            email: email,
            password: password
        }

        if(this.props.type !== 'Login'){
            if(email.length > 0 & password.length > 0){
                AsyncStorage.setItem('loginDetails ', JSON.stringify(loginDetails ));
                Keyboard.dismiss();
                alert("You successfully registered. Email: " + email + ' password: ' + password);
                this.login();
                // Actions.goapp();
            } else{
                alert("nhap saiiii rrrr ");
            }
        } else if(this.props.type == 'Login'){
            try{
                let loginDetails  = await AsyncStorage.getItem('loginDetails ');
                let ld = JSON.parse(loginDetails );

                if (ld.email != null && ld.password != null)
                {
                    if (ld.email == email && ld.password == password)
                    {
                        alert('Go in!');
                        // Actions.goapp();
                    }
                    else
                    {
                        alert('Email and Password does not exist!');
                    }
                }

            }catch(error)
            {
                alert(error);
            }
        }


    }

    showData = async()=>{
        let loginDetails  = await AsyncStorage.getItem('loginDetails ');
        let ld = JSON.parse(loginDetails );
        alert('email: '+ ld.email + ' ' + 'password: ' + ld.password);
    }

    // letgo(){
       
    // }

    render() {
      
        return (
          <View style={styles.container}>
                <TextInput 
                    onChangeText={(email) => this.setState({email})}
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Email'
                    placeholderTextColor='#ffffff'
                    selectionColor="#ffffff"
                    onSubmitEditing={()=>this.password.focus()}
                />
                 <TextInput 
                    onChangeText={(password) => this.setState({password})} 
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Password'
                    placeholderTextColor='#ffffff'
                    secureTextEntry={true}
                    ref={(input) => this.password = input}
                />
                <TouchableOpacity style={styles.button} onPress={this.saveData}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
          </View>
        );
      }
    
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBox:{
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize:16,
        color:'#ffffff',
        marginVertical:10,
    },
    buttonText:{
        fontSize: 16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },
    button:{
        backgroundColor:'#1c313a',
        borderRadius: 25,
        width: 300,
        marginVertical: 10,
        paddingVertical: 12,


    }
})