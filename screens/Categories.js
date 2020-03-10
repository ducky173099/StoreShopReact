/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet,View,Text, FlatList,} from 'react-native';
import axios from 'axios';
import CategoryListItem from '../components/CategoryListItem';

export default class Categories extends React.Component{
    constructor(props){
        super(props);
        this.state={
            categories: [
                { id: 1, name: 'Quan ao Gucci'},
                { id: 2, name: 'Giay Nike'},
                { id: 3, name: 'Dong ho Rolex'}
            ],
            // categories:[]
        }
    }

    // componentDidMount(){
        // const axios = require('axios');
        // axios.get('http://localhost:3000/categories')
        //     .then(res => {
        //         const categories = res.data;
        //         this.setState({
        //             categories
        //         })
        //     }).catch(error => {
        //         console.error(error)
        //     })

        // return fetch('http://localhost:3000/categories')
        // .then((response) => response.json())
        // .then((responseJson) => {
  
        //   this.setState({
        //     dataSource: responseJson.categories,
        //   }, function(){
  
        //   });
  
        // })
        // .catch((error) =>{
        //   console.error(error);
        // });


    // }

    render(){
      const {categories} = this.state;
      const {navigation} = this.props;

        return(
            <View>  
                <FlatList 
                    data={categories}
                    renderItem={({item}) => 
                        <CategoryListItem 
                            category={item}
                            onPress={() => navigation.navigate('Category',{
                                categoryName: item.name
                            })}
                        />}
                    keyExtractor={(item) => item.id +""}
                    contentContainerStyle={styles.container}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
  container:{
      paddingTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
  }
})

