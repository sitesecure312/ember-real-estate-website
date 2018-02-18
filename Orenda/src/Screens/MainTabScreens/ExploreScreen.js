import React, { Component } from 'react';
import { Text, Image, View, Platform, TouchableOpacity, ScrollView } from 'react-native'
import styles from './MainTabScreensStyles';
import { Images, Metrics, Colors } from 'Themes'
import { Button, TextInput } from 'Components'

export default class ExploreScreen extends React.Component {
    static navigatorStyle = {
        navBarTextFontFamily:'Futura Heavy',
        navBarHidden: true
    };
    constructor(props){
        super(props);        
    }  

    render () {
        return (
            <View style={styles.container}>
            </View>
        )
    }
}