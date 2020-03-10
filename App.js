
import React from 'react';
import {StyleSheet,View,Text, FlatList,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';  

import Categories from "./screens/Categories";
import Category from "./screens/Category";
import Cart from "./screens/Cart";
import Orders from "./screens/Orders";
import Settings from "./screens/Settings";
// import AppNavigator from './AppNavigator';



// const AppContainer = createStackNavigator(AppNavigator);
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const color ={
  ACTIVE: '#147efb',
  INACTIVE: '#ccc'
}

function CategoryScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen  name="Home" component={Categories} />
      <Stack.Screen  name="Category" component={Category} options={({ route }) => ({ title: route.params.categoryName })} />
    </Stack.Navigator>
  );
}
function CartScreen() {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen  name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
function OrdersScreen() {
  return (
    <Stack.Navigator initialRouteName="Orders">
      <Stack.Screen  name="Orders" component={Orders} />
    </Stack.Navigator>
  );
}
function SettinsScreen() {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen  name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}


export default class App extends React.Component{
    constructor(props){
      super(props);
      this.state={
          title:''
      }
    }
    render(){
        // const {navigation} = this.props;
        // const {route} = this.props;
        // const {categoryName} = route.params;
        return(

          <NavigationContainer>
            {/* <Stack.Navigator initialRouteName="Home">
              <Stack.Screen  name="Home" component={Categories} />
              <Stack.Screen  name="Category" component={Category} options={({ route }) => ({ title: route.params.categoryName })} />
            </Stack.Navigator> */}
            <Tab.Navigator>
              {/* <Tab.Screen name="Cart" component={Cart}/>
              <Tab.Screen name="Orders" component={Orders} />
              <Tab.Screen name="Settings" component={Settings} /> */}
              <Tab.Screen name="Home" component={CategoryScreen}
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ focused, color, size }) => (
                    focused ? <Image source={require('./assets/ski.png')}
                      style={[{ tintColor: '#147efb', width:25, height:25 }]}
                    />
                      : <Image source={require('./assets/ski.png')}
                        style={[{ tintColor: '#ccc',width:25, height:25 }]}
                      />
                  ),
                }}
              />
              <Tab.Screen name="Card" component={CartScreen}
                options={{
                  tabBarLabel: 'Card',
                  tabBarIcon: ({ focused, color, size }) => (
                    focused ? <Image source={require('./assets/disk.png')}
                      style={[{ tintColor: '#147efb', width:25, height:25 }]}
                    />
                      : <Image source={require('./assets/disk.png')}
                        style={[{ tintColor: '#ccc',width:25, height:25 }]}
                      />
                  ),
                }}
              />
              <Tab.Screen name="Orders" component={OrdersScreen}
                options={{
                  tabBarLabel: 'Orders',
                  tabBarIcon: ({ focused, color, size }) => (
                    focused ? <Image source={require('./assets/youtube.png')}
                      style={[{ tintColor: '#147efb', width:25, height:25 }]}
                    />
                      : <Image source={require('./assets/youtube.png')}
                        style={[{ tintColor: '#ccc',width:25, height:25 }]}
                      />
                  ),
                }}
              />
              <Tab.Screen name="Settings" component={SettinsScreen}
                options={{
                  tabBarLabel: 'Settings',
                  tabBarIcon: ({ focused, color, size }) => (
                    focused ? <Image source={require('./assets/diskme.png')}
                      style={[{ tintColor: '#147efb', width:25, height:25 }]}
                    />
                      : <Image source={require('./assets/diskme.png')}
                        style={[{ tintColor: '#ccc',width:25, height:25 }]}
                      />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>

        )
    }
};

const styles = StyleSheet.create({
  container:{
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'center',
      backgroundColor: '#e9ebee',
      paddingLeft: 16,
      paddingRight: 16,
  }
})

