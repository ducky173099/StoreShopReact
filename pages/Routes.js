import React, { Component } from 'react';
import {} from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import App from '../App';

export default class Routes extends Component {
  render() {
    return (
        <Router>
            <Stack key="root" hideNavBar={true}>
                <Scene key="login" component={Login} title="Login" initial={true}/>
                <Scene key="signup" component={Signup} title="signup" />
                <Scene key="goapp" component={App} />
            </Stack>
        </Router>
    );
  }
}
