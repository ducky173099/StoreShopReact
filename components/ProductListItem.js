import React, { Component } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

export default class ProductListItem extends Component{

    render(){
        const {products, onAddToCartClick, onPress} = this.props;
        return (
            <View style={styles.shadow}>
                <View style={styles.container}>
                    <Image style={styles.img} source={{uri: products.images[0].url }}/>
                    <View style={styles.info}>
                        <Text style={styles.name}>{products.name}</Text>
                        <View style={styles.priceRow}>
                            <Text style={styles.price}>{products.price}</Text>
                            <TouchableOpacity >
                                <Text style={styles.cartText}>Mua +</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    cartText:{
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc'
    },
    shadow:{
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0}
    },
    container:{
        flex:1,
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: '#fff',
        overflow: 'hidden'
    },
    info:{
        padding: 8
    },
    img:{
        height: 150,
        borderTopLeftRadius:4,
        borderBottomLeftRadius:4
    },
    name:{
        fontSize: 16,
        marginBottom: 8
    },
    priceRow:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    price:{
        fontSize: 16,
        color:'#888',
        flex:1
    }
})
