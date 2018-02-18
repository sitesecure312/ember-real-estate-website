import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, Metrics, Fonts, Images, Locale } from 'Themes'
import { Button, TextInput, EncriptionMessage } from 'Components'
import styles from './TransactionStyles'


export default class Transaction extends Component {
    constructor(props){
        super(props);
            
        this.state = { 
            text: ''
        };
            
    }

    render() {  	        
        return (
            <View style={styles.container}>
                <Text style={[styles.textCaption, {fontSize:9, fontWeight:'600', width:Metrics.screenWidth - 32, paddingRight: 16, paddingLeft: 16}]}>
                    {this.props.date}
                </Text> 
                <View style={{paddingTop:35}}/>
                <View style={[styles.center,{}]}>
                    <View style={{flexDirection:'row', width: Metrics.screenWidth, paddingTop:22}}>
                        <View style={{width:Metrics.screenWidth * 0.75}}>
                            <Text style={[styles.textCaption, {width:'auto', marginLeft:21}]}>
                                {this.props.code1}
                            </Text> 
                            <Text style={[styles.textCaption, {width:'auto', marginLeft:21}]}>
                                {this.props.code2}
                            </Text> 
                        </View>
                        <View style={{flexDirection:'row', width:Metrics.screenWidth * 0.25}}>
                            <Text style={[styles.textCaption,{width:'auto', fontSize:16, paddingTop:8, paddingRight:3}]}>
                                $
                            </Text>
                            <Text style={[styles.textCaption,{width:'auto', fontSize:24}]}>
                                {this.props.price1}
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', width: Metrics.screenWidth, paddingBottom:21}}>
                        <Text style={[styles.textContent, {width:Metrics.screenWidth * 0.73, marginLeft:21}]}>
                            {this.props.content1}
                        </Text> 
                        <Text style={[styles.textContent, {width:'auto'}]}>
                            $
                        </Text> 
                        <Text style={[styles.textContent, {width:'auto'}]}>
                            {this.props.price2}
                        </Text> 
                    </View>
                </View>

                <View style={{paddingTop:10}} />

                <View style={[styles.center,{}]}>
                    <View style={{flexDirection:'row', width: Metrics.screenWidth, paddingTop:30}}>
                        <Text style={[styles.textCaption, {width:Metrics.screenWidth * 0.7, marginLeft:21}]}>
                            {this.props.code3}
                        </Text> 
                        <Text style={[styles.textCaption,{width:'auto', fontSize:16, paddingTop:8, paddingRight:3}]}>
                            $
                        </Text>
                        <Text style={[styles.textCaption, {width:'auto', fontSize:24}]}>
                            {this.props.price3}
                        </Text>                        
                    </View>
                    <View style={{flexDirection:'row', width: Metrics.screenWidth, paddingBottom:30}}>
                        <Text style={[styles.textContent, {width:Metrics.screenWidth * 0.73, marginLeft:21}]}>
                            {this.props.content2}
                        </Text> 
                        <Text style={[styles.textContent, {width:'auto'}]}>
                            $
                        </Text> 
                        <Text style={[styles.textContent, {width:'auto'}]}>
                            {this.props.price4}
                        </Text> 
                    </View>
                </View>
                                
            </View>
        );
    }
}