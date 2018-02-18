import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, Metrics, Fonts, Images, Locale } from 'Themes'
import { Button, TextInput, EncriptionMessage } from 'Components'
import styles from './ContributionStyles'


export default class Contribution extends Component {
    constructor(props){
        super(props);
            
        this.state = { 
            text: ''
        };
            
    }

    render() {  	        
        return (
            <View style={[styles.center, {flexDirection:'row'}]}>
                <View style={[styles.leftView, {}]}>
                    <Text style={[styles.textCaption,{paddingTop:15}]}>
                        {this.props.title}
                    </Text>
                    <Text style={[styles.textContent,{paddingBottom:15}]}>
                        {this.props.content}
                    </Text>
                </View>
                <View style={[styles.rightView, {flexDirection:'row'}]}>
                    <Text style={[styles.textCaption,{paddingTop:8,fontSize:16, width:'auto', marginRight:0, marginLeft:100, color:Colors.subTitle, fontWeight:'400'}]}>
                        $
                    </Text>
                    <Text style={[styles.textCaption,{fontSize:24, width:'auto', marginRight:0, marginLeft:0, color:Colors.subTitle, fontWeight:'400'}]}>
                        {this.props.price}
                    </Text>
                </View>
                
            </View>
        );
    }
}